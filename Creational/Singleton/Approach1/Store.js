var logger = require('./Logger')

// var logger = new Logger()

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has inventory ${inventory} items in stock`)

    }
}

module.exports = Store;