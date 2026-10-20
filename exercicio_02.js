const prompt = require('prompt-sync')();

const semana1 = parseFloat(prompt("Digite o valor total de vendas da Semana 1 (R$): "));
const semana2 = parseFloat(prompt("Digite o valor total de vendas da Semana 2 (R$): "));
const semana3 = parseFloat(prompt("Digite o valor total de vendas da Semana 3 (R$): "));
const semana4 = parseFloat(prompt("Digite o valor total de vendas da Semana 4 (R$): "));

const mediaSemanal = (semana1 + semana2 + semana3 + semana4) / 4;

console.log();

console.log("=== Vendas do Mês ===");
console.log("Semana 1: R$ " + semana1.toFixed(2));
console.log("Semana 2: R$ " + semana2.toFixed(2));
console.log("Semana 3: R$ " + semana3.toFixed(2));
console.log("Semana 4: R$ " + semana4.toFixed(2));
console.log("------------------------------------");
console.log("Média semanal: R$ " + mediaSemanal.toFixed(2));