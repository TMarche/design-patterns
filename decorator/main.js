const { HouseBlend, DarkRoast, Espresso, Decaf } = require("./Beverage");
const { Milk, Mocha, Soy, Whip } = require("./CondimentDecorator");

let beverage1 = new HouseBlend();
beverage1 = new Mocha(beverage1);
beverage1 = new Soy(beverage1);
console.log(beverage1.getDescription());
console.log(beverage1.cost());
