# Iteración

Iteración es repetir un proceso de un bloque de código en una secuencia determinada o hasta que se produce un resultado específico. En este ejemplo vemos bien como funciona

```javascript
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

# Ciclo

Un  ciclo,  es una sentencia que se realiza repetidas veces en  un trozo aislado de código, hasta que la condición asignada a dicho ciclo deje de cumplirse.

```javascript
let numeros = [1,2,3,4,5];
for (x in numeros) {
    console.log(numeros[x]);
}
/*Imprime
1
2
3
4
5
*/
```

# For Each

Es un tipo especial de bucle que  permite recorrer estructuras que contienen varios elementos ( matrices, recursos u objetos) sin necesidad de preocuparse por el número de elementos.



```javascript
const array1 = ['a', 'b', 'c','d','e'];

array1.forEach(element => console.log(element));

// Imprime: "a"
// Imprime: "b"
// Imprime: "c"
// Imprime: "d"
// Imprime: "e"

```



