var Logger = require('./Logger')
var Store = require('./Store')
var Shopper = require('./Shopper')

var logger = new Logger().getInstance();

logger.log('starting app..')
var shopper = new Shopper('vipul', 500)

var store = new Store('Balaji', [
    {
        item: 'Poha',
        qty: 1,
        price: 124
    },
    {
        item: 'Vermicilie',
        qty: 1,
        price: 130
    }
])

logger.log('finished config..')

console.log(`${logger.count} total logs`)