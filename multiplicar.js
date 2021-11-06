function multiplicar(numero1,numero2){
    if (numero1 !== 0 && numero2 !== 0) {
        return numero1 * numero2;
    } else {
        return 0;
    }
};
//console.log(multiplicar(5, 3));
module.exports = multiplicar;
