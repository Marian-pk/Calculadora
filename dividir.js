function dividir(numero1,numero2){
    if (numero1 !== 0 && numero2 !== 0) {
        return numero1 / numero2;
    } else {
        return 'No se puede dividir por cero';
    }
};
//console.log(dividir(0, 3));
module.exports = dividir;