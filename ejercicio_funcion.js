/* Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de
1 hasta n.*/
function sumatoria(tope){
sum = 0;
    for (let index = 1; index < tope; index++) {
        sum = sum + index;
    }
    return sum
}
sumatoria(100);

/*2.- Construya una función que imprima si un número es primo o no. Los números primos son
aquellos que son divisibles solo por 1 y por sí mismos.*/
function MiPrimo(numero) {
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}
MiPrimo(8)
/*3.- Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva,
es decir si n es 5 deberá imprimir 5,4,3,2,1.*/
function regresiva(numero){
    document.write("<table>");
        document.write("<thead>");
            document.write("<tr>");
                document.write("<th>Número</th>")
            document.write("</tr>");
        document.write("<thead>")
    for (let i = numero; i > 0; i--) { // muestra 0, luego 1, luego 2
        document.write("<tr>");
            document.write("<td>");
		    document.write(i);
            document.write("</td>");
		document.write("</tr>");
        }
    document.write("</table>");
    }
regresiva(100);
/*- Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule
la sumatoria de todos los números pares contenidos en el rango.*/

function punto3(tope){
    sum = 0;
    for (let index = 11; index < tope; index++) {
        if(index%2 == 0){
            sum = sum + index;
        }
    }
    return sum;
}
punto3(1000);
/*5.- Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho
número hasta el 12.*/
function TablaMultiplicar(j){
	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");
	document.write("<ul>");
	//i++ significa i=i+1;
	for(i = 1;i<=12;i++){
		document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
	}
	document.write("</ul>");
}
TablaMultiplicar(2);