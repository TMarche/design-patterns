class IQuackStrategy {
    constructor() {
        if (!this.execute) {
            throw new Error("A quack must be executable");
        }
    }
}

class SimpleQuackStrategy extends IQuackStrategy {
    execute() {
        console.log("Quack!");
    }
}

class NoQuackStrategy extends IQuackStrategy {
    execute() {
        console.log("This duck cannot quack.");
    }
}

class LoudQuackStrategy extends IQuackStrategy {
    execute() {
        console.log("QUACK!!!");
    }
}

exports.SimpleQuackStrategy = SimpleQuackStrategy;
exports.NoQuackStrategy = NoQuackStrategy;
exports.LoudQuackStrategy = LoudQuackStrategy;
