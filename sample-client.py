import websocket
import json

#connect to proxy server
ws = websocket.create_connection('ws://localhost:10001')

#confirm connection
resp = ws.recv()
print json.loads(resp)['status']

#subscribe to channels
#for channel and event names, see: https://github.com/BTCMarkets/API/wiki/websocket 
req = ws.send(json.dumps({'channelName': 'TRADE_LTCAUD', 'eventName': 'MarketTrade'}))
req = ws.send(json.dumps({'channelName': 'TRADE_ETHCAUD', 'eventName': 'MarketTrade'}))
req = ws.send(json.dumps({'channelName': 'Orderbook_BTCAUD', 'eventName': 'OrderBookChange'}))
req = ws.send(json.dumps({'channelName': 'Orderbook_XRPAUD', 'eventName': 'OrderBookChange'}))
req = ws.send(json.dumps({'channelName': 'Orderbook_LTCBTC', 'eventName': 'OrderBookChange'}))
req = ws.send(json.dumps({'channelName': 'Ticker-BTCMarkets-BTC-AUD', 'eventName': 'newTicker'}))
req = ws.send(json.dumps({'channelName': 'Ticker-BTCMarkets-BCH-AUD', 'eventName': 'newTicker'}))
req = ws.send(json.dumps({'channelName': 'Ticker-BTCMarkets-ETC-BTC', 'eventName': 'newTicker'}))

#process responses
while True:
     resp = ws.recv()
     print resp
