var scout_prototype = require('./scout_prototype');

var alex = scout_prototype.clone();
alex.name = "Alex Banks"
alex.addItemToList('slingshot')

var eva = scout_prototype.clone();
eva.name = "Eva Mandis"
eva.addItemToList('rope')


console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${eva.name}: ${eva.shoppingList}`)
