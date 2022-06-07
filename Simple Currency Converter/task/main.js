console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD\n" +
    "1 USD equals  113.5 JPY\n" +
    "1 USD equals  0.89 EUR\n" +
    "1 USD equals  74.36 RUB\n" +
    "1 USD equals  0.75 GBP");

let arrayCurrencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
let arrayCurrenciesNumbers = [1, 113.5, 0.89, 74.36, 0.75];
const input = require('sync-input');

//
while (true) {
    console.log("What do you want to do?\n" +
        "1-Convert currencies 2-Exit program");
    let command = Number(input());
    if (isNaN(command)) {
        console.log("Unknown input");
        continue;
    }
    if (!(command === 1 ||  command === 2)){
        console.log("Unknown input");
        continue;
    }
    if (command === 2){
        console.log("Have a nice day!");
        break;
    }
    console.log("What do you want to convert?");
    console.log("From:");
    let fromCurrency = input().toUpperCase();

    if (!arrayCurrencies.includes(fromCurrency)) {
        console.log("Unknown currency");
        continue;
    }
    console.log("To:");
    let toCurrency = input().toUpperCase();
    if (!arrayCurrencies.includes(toCurrency)) {
        console.log("Unknown currency");
        continue;
    }

    console.log("Amount: ");
    let amount = Number(input());
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        continue;
    }
    if (amount < 1) {
        console.log("The amount can not be less than 1");
        continue;
    }
    let fromPos = arrayCurrencies.indexOf(fromCurrency);
    let toPos = arrayCurrencies.indexOf(toCurrency);
    let res = amount / arrayCurrenciesNumbers[fromPos] * arrayCurrenciesNumbers[toPos];

    console.log("Result: " + amount + " " + arrayCurrencies[fromPos]
        + " equals " + res.toFixed(4) + " " + arrayCurrencies[toPos]);
}
