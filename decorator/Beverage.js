class Beverage {
    constructor() {
        if (!this.cost) {
            throw new Error("Must implement cost()");
        }
    }

    getDescription() {
        return this.description;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "House Blend Coffee";
    }

    cost() {
        return 0.89;
    }
}

class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }

    cost() {
        return 0.99;
    }
}

class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cost() {
        return 1.99;
    }
}

class Decaf extends Beverage {
    constructor() {
        super();
        this.description = "Decaf Coffee";
    }

    cost() {
        return 1.05;
    }
}

exports.HouseBlend = HouseBlend;
exports.DarkRoast = DarkRoast;
exports.Espresso = Espresso;
exports.Decaf = Decaf;
