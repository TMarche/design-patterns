class Observer {
    constructor() {
        if (!this.update) {
            throw new Error("Must implement update()");
        }
    }
}

class CurrentConditionsDisplay extends Observer {
    constructor(name, subject) {
        super();
        this.subject = subject;
        this.name = name;
        subject.addObserver(this);
    }

    update() {
        this.temperature = this.subject.temperature;
        this.humidity = this.subject.humidity;
        this.display();
    }

    display() {
        console.log(
            `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
        );
    }
}

exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
