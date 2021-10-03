const { CurrentConditionsDisplay } = require("./Observer");
const { WeatherData } = require("./Subject");

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(
    "currentConditions",
    weatherData
);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);

weatherData.removeObserver("currentConditions");
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(78, 90, 29.2);
