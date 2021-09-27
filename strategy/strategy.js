const { Duck, WildDuck, RubberDuck, CityDuck } = require("./Duck");

arr = [new Duck(), new WildDuck(), new RubberDuck(), new CityDuck()];

arr.forEach((duck) => {
    duck.quack.execute();
});

arr.forEach((duck) => {
    duck.fly.execute();
});
