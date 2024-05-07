class Shopper {

    constructor(name, money = 0) {
        this._name = name;
        this._money = money;
    }

    display() {
        console.log(`Name: ${this._name}, Money: ${this._money}`)
    }
}

module.exports = Shopper;