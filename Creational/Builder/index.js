var personBuilder = require('./PersonBuilder')


//Employee
var sue = new personBuilder('Sue').makeEmployee().makeManager().build();

//  Shopper
var rachel = new personBuilder('Rachel').withMoney(500).build();


console.log(sue.toString());
console.log(rachel.toString());
