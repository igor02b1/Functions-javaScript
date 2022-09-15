function IMC (peso, altura){
    IMC = Math.round(peso / (altura * altura));
    return IMC;
}
module.exports = IMC