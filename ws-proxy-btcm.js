const WebSocketServer = require('websocket').server
const http = require('http')

const PORT = process.env.PORT || 10001
const HOST = process.env.HOST || 'localhost'
const SOCKETIO_SOURCE = process.env.SOCKETIO_SOURCE || 'https://socket.btcmarkets.net'
const SOCKETIO_PARAMS = process.env.SOCKETIO_PARAMS || {secure: true, transports: ['websocket'], upgrade: false}

const httpServer = http.createServer((req, res) => {
  res.end()
})

const wsServer = new WebSocketServer({
  httpServer,
  autoAcceptConnections: true,
})

console.log("\nWebsocket proxy server started");
console.log("Please connect to ws://" + HOST + ":" + PORT);

wsServer.on('connect', (clientConnection) => {

  console.log('Client connected to proxy');
  
  clientConnection.send(JSON.stringify({"status": "connected"}));

    clientConnection.on('message', (message) => {
            
      const socket = require('socket.io-client')(SOCKETIO_SOURCE, SOCKETIO_PARAMS);

      var channelName = JSON.parse(message.utf8Data)['channelName']
      var eventName = JSON.parse(message.utf8Data)['eventName']
      
      socket.on('connect', function(){
        console.log('Subscribing to: "' + channelName + '" channel for "' + eventName + '" events');
        socket.emit('join', channelName);
      });

      socket.on(eventName, function(data){
        console.log(data);
        clientConnection.send(JSON.stringify(data));
      });

      socket.on('disconnect', function(){
        console.log('disconnected');
      });
    })
})

httpServer.listen({  
  port: PORT,
  host: HOST,
})
