class Subject {
    constructor() {
        if (!this.addObserver) {
            throw new Error("Must implement addObserver()");
        }
        if (!this.removeObserver) {
            throw new Error("Must implement removeObserver()");
        }
        if (!this.notify) {
            throw new Error("Must implement notify()");
        }
    }
}

class WeatherData extends Subject {
    constructor() {
        super();
        this.observers = [];
    }

    addObserver(observer) {
        this.observers = [...this.observers, observer];
    }

    removeObserver(name) {
        const index = this.observers.findIndex((x) => x.name === name);
        this.observers.splice(index, 1);
    }

    notify() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }

    measurementsChanged() {
        this.notify();
    }

    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

exports.WeatherData = WeatherData;
