class IFlyStrategy {
    constructor() {
        if (!this.execute) {
            throw new Error("Flying must be executable");
        }
    }
}

class SimpleFlyStrategy extends IFlyStrategy {
    execute() {
        console.log("This duck is flying.");
    }
}

class NoFlyStrategy extends IFlyStrategy {
    execute() {
        console.log("This duck cannot fly.");
    }
}

exports.SimpleFlyStrategy = SimpleFlyStrategy;
exports.NoFlyStrategy = NoFlyStrategy;
