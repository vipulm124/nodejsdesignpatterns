var logger = require('./Logger')

// var logger = new Logger()


class Shopper {

    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their acccount.`)
    }
}

module.exports = Shopper;