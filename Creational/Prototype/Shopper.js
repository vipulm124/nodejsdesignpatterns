class Shopper {

    constructor(name = "undefined name") {
        this._name = name;
        this._shoppingList = [];
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item)
    }

    clone() {
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }
}

module.exports = Shopper;