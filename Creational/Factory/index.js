var userFactory = require('./userFactory');

var alex = userFactory('Alex Banks', 150)
var eva = userFactory('Eva Mandis', 100, "employee", "This and that")

alex.display();
eva.display();

eva.payDay();
eva.display();


