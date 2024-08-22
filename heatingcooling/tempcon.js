let tempCelsius = 25; // Example temperature in Celsius
let targetUnit = "F"; // Example target unit ("C", "F", or "K")

switch (targetUnit) {
    case "C":
        console.log(`${tempCelsius}°C`);
        break;
    case "F":
        let tempFahrenheit = (tempCelsius * 9/5) + 32;
        console.log(`${tempFahrenheit}°F`);
        break;
    case "K":
        let tempKelvin = tempCelsius + 273.15;
        console.log(`${tempKelvin} K`);
        break;
    default:
        console.log("Invalid target unit");
        break;
}
