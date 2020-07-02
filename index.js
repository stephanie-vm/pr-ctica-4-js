let num1 = parseInt(prompt('ingrese el primer número'));
let num2 = parseInt(prompt('ingrese el segundo número'));
let num3 = parseInt(prompt('ingrese el tercer número'));
let num4 = parseInt(prompt('ingrese el cuarto número'));
let num5 = parseInt(prompt('ingrese el quinto número'));
let num6 = parseInt(prompt('ingrese el sexto número'));
let num7 = parseInt(prompt('ingrese el setimo número'));
let num8 = parseInt(prompt('ingrese el octavo número'));
let num9 = parseInt(prompt('ingrese el noveno número'));
let num10 = parseInt(prompt('ingrese el décimo número'));

let arreglo = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
arreglo.sort((a,b) => a - b);
let numeros = (num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);


if (isNaN(numeros)){
    console.log('Alguno de los dígitos no es un número');
}else{
    console.log(arreglo);
}

let promedio = num1 + num2 + num3 +num4 + num5 + num6 + num7 + num8 + num9 + num10 / arreglo.length;

console.log(`El promedio es: ${promedio}`);

let mediana = arreglo[4] + arreglo[5] / 2 ;
console.log(`La mediana es: ${mediana}`);

let minimo = arreglo[0];
console.log(`El valor mínimo es: ${minimo}`);
let maximo = arreglo[9];
console.log(`El valor máximo es: ${maximo}`);

// No logré  el while,el módulo de %2 para sacar si la cantidad de elementos era par o no, no pude crear string vacío y tampoco como no agregar al array si un string no es un número isNaN.
