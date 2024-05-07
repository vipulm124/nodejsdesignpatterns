class Employee {

    constructor(name, money = 0, employer) {
        this._name = name;
        this._money = money;
        this._employer = employer;
    }

    display() {
        console.log(`Name: ${this._name}, Money: ${this._money}, Employer:${this._employer}`)
    }

    payDay() {
        this._money = this._money + 100
    }
}

module.exports = Employee;