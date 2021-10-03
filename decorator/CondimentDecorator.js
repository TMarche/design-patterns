class CondimentDecorator {
    constructor(beverage) {
        this.beverage = beverage;
        if (!this.getDescription) {
            throw new Error("Must implement getDescription()");
        }
    }
}

class Milk extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    cost() {
        return this.beverage.cost() + 0.1;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Milk";
    }
}

class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    cost() {
        return this.beverage.cost() + 0.2;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Mocha";
    }
}

class Soy extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    cost() {
        return this.beverage.cost() + 0.15;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Soy";
    }
}

class Whip extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    cost() {
        return this.beverage.cost() + 0.1;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }
}

exports.Milk = Milk;
exports.Mocha = Mocha;
exports.Soy = Soy;
exports.Whip = Whip;
