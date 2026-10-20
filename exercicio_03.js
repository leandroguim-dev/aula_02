const prompt = require('prompt-sync')();

const mes1 = parseInt(prompt("Digite o consumo do primeiro mês em kWh: "));
const mes2 = parseInt(prompt("Digite o consumo do segundo mês em kWh: "));
const mes3 = parseInt(prompt("Digite o consumo do terceiro mês em kWh: "));
const mes4 = parseInt(prompt("Digite o consumo do quarto mês em kWh: "));

const mediaMensal = (mes1 + mes2 + mes3 + mes4) / 4;

console.log();

console.log("=== Consumo do Mês ===");
console.log("Mês 1: " + mes1 + "kWh");
console.log("Mês 2: " + mes2 + "kWh");
console.log("Mês 3: " + mes3 + "kWh");
console.log("Mês 4: " + mes4 + "kWh");
console.log("------------------------------------");
console.log("Média mensal: " + mediaMensal + "kWh");