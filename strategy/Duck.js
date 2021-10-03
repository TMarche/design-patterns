const {
    SimpleQuackStrategy,
    NoQuackStrategy,
    LoudQuackStrategy,
} = require("./IQuackStrategy");

const { SimpleFlyStrategy, NoFlyStrategy } = require("./IFlyStrategy");

class Duck {
    constructor() {
        this.quack = new SimpleQuackStrategy();
        this.fly = new SimpleFlyStrategy();
    }
}

class WildDuck extends Duck {
    constructor() {
        super();
        this.quack = new LoudQuackStrategy();
    }
}

class RubberDuck extends Duck {
    constructor() {
        super();
        this.quack = new NoQuackStrategy();
        this.fly = new NoFlyStrategy();
    }
}

class CityDuck extends Duck {
    constructor() {
        super();
        this.quack = new LoudQuackStrategy();
    }
}

exports.Duck = Duck;
exports.WildDuck = WildDuck;
exports.RubberDuck = RubberDuck;
exports.CityDuck = CityDuck;
