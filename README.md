# Precursors

NodeJS, NPM


# Building - One Time Only

Build the node modules using npm, where `[path]` is the path to `ws-proxy-btcm.js`.

Do not include a filename in the command.
```
npm i --prefix /[path]/
```


# Executing - Starting Server

This will run websocket server on `ws://localhost:10001` with a proxy to `https://socket.btcmarkets.net`

```
node /[path]/ws-proxy-btcm.js
```


# Connecting - Starting Client

See example python client `sample-client.py`

See sample responses `sample-responses.md`

More information on channel and event names can be found at https://github.com/BTCMarkets/API/wiki/websocket



# Customizing

```
HOST=127.0.0.1 PORT=7777 SOCKETIO_SOURCE=ws://example.com/ws
```
