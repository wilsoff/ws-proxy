## Sample Responses from BTCMarkets.net Socket.io
### Orderbook Events
   + **channelName**: Orderbook_BTCAUD
   + **eventName**: OrderBookChange
```javascript
{
    "currency": "AUD",
    "instrument": "BTC",
    "timestamp": 1518142325055,
    "marketId": 1001,
    "snapshotId": 1518142324995000,
    "bids": [
        [1036074000000, 66000000, 2001],
        [1036038000000, 361000000, 2001],
        [***, ***, ***]
    ],
    "asks": [
        [1039999000000, 200000000, 2001],
        [1041300000000, 5450155, 2001],
        [***, ***, ***]
    ]
}
```

### Trade Events
   + **channelName**: TRADE_BTCAUD
   + **eventName**: MarketTrade
```javascript
{
    "id": 0,
    "timestamp": 0,
    "marketId": 2001,
    "agency": "BTCMarkets",
    "instrument": "BTC",
    "currency": "AUD",
    "trades": [
        [1518142403554, 1039999000000, 1000000, 1244176640]
    ]
}
```

### Tick Events
   + **channelName**: Ticker-BTCMarkets-BTC-AUD
   + **eventName**: newTicker
```javascript
{
    "volume24h": 73737469171,
    "bestBid": 1036000000000,
    "bestAsk": 1039998000000,
    "lastPrice": 1039998000000,
    "timestamp": 1518142443689,
    "snapshotId": 1518142443689000,
    "marketId": 2001,
    "currency": "AUD",
    "instrument": "BTC"
}
```
