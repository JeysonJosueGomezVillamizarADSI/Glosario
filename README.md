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

# Map

Map es un método que nos permite devolver un nuevo arreglo de datos partiendo de un arreglo, dicho así, no mutamos los datos del arreglo original, ahora tenemos un nuevo arreglo con los valores resultantes.



```javascript
 arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

    const products = [
        { id: "1", name: "shirt", category: "clothing" },
        { id: "2", name: "Sports Tennis", category: "accessories" },
        { id: "3", name: "Casual shoes", category: "footwear" },
        { id: "4", name: "skirt", category: "clothing" },
        { id: "5", name: "tie", category: "clothing" }
    ]
    let nameOfProducts = products.map((product, index, array) => {
        // Cómo solo queremos los nombres, retornamos "name".
        return product.name;
    })

    console.log(nameOfProducts2);
```



# Filter

El método Filter() nos permite filtrar solo los elementos que deseamos (segun ciertos criterios) y devolverlos en un nuevo array.



```javascript
let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let pequeños = gente.filter(persona => persona.edad <= 3)

console.log(pequeños);

```
