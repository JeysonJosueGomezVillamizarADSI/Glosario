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

# Search

 Es un método de cadena que se usa para buscar una cadena específica o una expresión regular.

- El método search() no cambia el valor de la *cadena* original .
- El método search() realiza una búsqueda que distingue entre mayúsculas y minúsculas.

``

```javascript
let text = "El señor Carlos tiene una casa en las montañas";
let position = text.search("casa");
console.log(position)
```

# Nivel de scop

El nivel de SCOPE  es lo que le da SIGNIFICADO a las variables y además DETERMINA el CONJUNTO DE VARIABLES que podemos ACCEDER en cada línea de código.



```javascript
let otraFruta='Pera'

function comer (){
    let fruta='Manzana';
    console.log("Estoy comiendo una " + fruta)
}
console.log(otraFruta)
```

#  Clausula

Una cláusula es una función que tiene acceso al ámbito de su función padre, incluso después de que la función padre haya terminado de ejecutar.

```javascript
const miFuncion = () => {
     let miValor = 2;
     console.log(miValor);

     const funcionHija = () => {
          console.log(miValor += 1);
     }

     return funcionHija;
}

const resultado = miFuncion();
console.log(resultado);
resultado();
resultado();
resultado();
```

# Funciones

Una funcion es similar a un procedimiento,un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

```
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x obtiene el valor "Honda"

myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)
```

# Separadores

El método split en JavaScript es la división de cadenas de textos (string) empleando un separador que puede ser solo un carácter, otra cadena o una expresión regular.

```javascript
const authHeader = 'bearer token'
const split = authHeader.split(' ') // (1) [ 'bearer', 'token' ]
const token = split[1] // (2) token
```

# Función Flecha

Las funciones de flecha, son una forma de definir funciones  hay distintas variantes en la sintaxis:Función de un solo parámetro.Al crear una función flecha de un solo parámetro no es necesario escribir los paréntesis, tampoco es necesario escribir las llaves, esto se puede cuando la función es de una sola línea y devuelve un valor.

```javascript
let edad = prompt("Cual es tu edad?", 18);

let Bienvenido = (edad < 18) ?
  () => alert('¡Hola!') :
  () => alert("¡Saludos!");

Bienvenido();
```

