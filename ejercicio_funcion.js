/* Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de
1 hasta n.*/
function sumatoria(tope){
sum = 0;
    for (let index = 1; index < tope; index++) {
        sum = sum + index;
    }
    return sum
}
sumatoria(tope);
/*2.- Construya una función que imprima si un número es primo o no. Los números primos son
aquellos que son divisibles solo por 1 y por sí mismos.*/
function esPrimo(numero) {
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}
/*3.- Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva,
es decir si n es 5 deberá imprimir 5,4,3,2,1.*/
function sumatoria(tope){
    sum = 0;
        for (let index = 1; index < tope; index++){
            sum = sum - index;
        }
        return sum
    }



