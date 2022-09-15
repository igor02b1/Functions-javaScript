const prompt = require('prompt-sync')();

const showIMC = require('./IMC');

const peso = prompt('Digite o seu peso(em KG): ');
const altura = prompt('Digite sua altura(não esqueça do ponto): ');
console.log(`O seu IMC é de: ${showIMC(peso, altura)}`);
