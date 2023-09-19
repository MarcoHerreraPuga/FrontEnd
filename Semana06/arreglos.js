const personas = ["pablo","marco","pedro","maria","lucia"];
console.log(personas[3])

//agregar un elemento a mi arreglo

personas.push("alejando")

//leng cantidad de elementos de un arrays
console.log(personas.length)

//pop: elimina el ultimo elelento de un arreglo
const eliminado = personas.pop();
console.log("persona depues del POP", personas, eliminado)

//unshift: agregar elemento pero al inicio del arreglo
personas.unshift("primer elemento");
console.log("Personas unshift",personas);

//shift:
personas.shift();
console.log("personas shift",personas);

//for

const numeros =[1,2,3,4,5,6,7,8,9,10];
const producto =5;
const resultado = [];
const resultado2 = [];
const resultado3 = [];

for (let i = 0; i< numeros.length;i++){
    const Ope = numeros[i]*producto;
    resultado.push(Ope);
}
console.log("calculadora",resultado)

//for of 

for(let i of numeros){
    resultado2.push(i * producto)
}
console.log("calculadora",resultado2)
/*
for (const numero1 of numeros){
resultado3.push(numero1 * producto)
}

comsole.log("for of ",resultado3)
*/
const numeros3 = [2,5,20,21,1,-5]

let mayor = numeros3[0]

for (const numero of numeros3){
    if (numero > mayor){
        mayor = numero
    }
}

console.log("el mayor es ",mayor)

const numeros4 = [1, 2, 13, 23, 24, 89, 104]

// Quiero un algoritmo que diga la suma de los numeros pares e impares

// Paso 1: crear 2 variables
let sumaPar = 0
let sumaImpar = 0

// Paso 2: for of
for (const numerito of numeros4) {
  if (numerito % 2 === 0) {
    sumaPar += numerito
  } else {
    sumaImpar += numerito
  }
}


console.log("Suma Par", sumaPar)
console.log("Suma Impar", sumaImpar)

/* contar la cantidad de vocales en una palabra */

const palabra = "monitor"

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0
let contador2 = 0
let letraActual = ""

for (const letra of palabra) {
  for (const vocal of vocales) {
    if (letra !== vocal) {
      contador++ 
    }
  }
}

for (const letra of palabra) {
  if (!"aeiou".includes(letra)) {
    contador2++
  }
}

console.log("contador", contador)
console.log("contador2", contador2)

//map retorna elarray donde a cada elemento lo ha multiplicado  x 5

const numeros6 = [1,2,3,4,5,6,7,8,9,10]

//usaremos un maps para iterar el arreglo

// map
// forEach

// Map retorna un array y ForEach solo itera

// Ejemplo de calculadora
const numeros7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map Retorna el array donde a cada elemento de numeros lo ha
// multiplicado * 
const resultado4 = numeros7.map(function (numerito) {
  return numerito * 5
})

console.log(resultado)


const personas6 = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata",
      age: 22
    },
    {
      name: "Maria",
      lastname: "Gonzales",
      age: 25
    }
  ]
  
  // Reto solo quiero obtener los nombres de las personas y guardarlos en un array
  const nombres = personas6.map((persona) => persona.name)
  
  console.log(nombres)


  function calcular(n1, n2) {
    return n1 + n2
  }
  
  const calcular2 = (n1, n2) => {
    return n1 + n2
  }
  
  // Si solo tenemos una linea dentro de la funcion esta puede abreviarse
  const calcular3 = (n1, n2) => n1 + n2
  
  const division = (n1, n2) => {
    if (n2 === 0) return "No valido"
    return n1 / n2
  }
  
  calcular2(1, 2)
  calcular2(2, 3)


// Crear una funcion que reciba un numero es indique si es par, esta retorna true si no false

// Nivel 1
const esPar = (numero) => {
    if (numero % 2 === 0) {
      return true
    } else {
      return false
    }
  }
  
  // Nivel 2
  const esParSilvia = (numero) => {
    if (numero % 2 === 0) return true
    return false  
  }
  
  const nombre = undefined
  const edad = 18
  // Nulish coelscing operator ??
  console.log(nombre ?? "Nombre no encontrado")
  // Operador ternario true ? si : no
  console.log(nombre ? nombre : "Nombre no encontrado")
  console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad")
  
  const esParJose = (num) => num % 2 === 0 ? true : false
  
  const esParRel = numero => numero % 2 === 0
  esParRel(20)


  //reto

// Reto solo quiero obtener los edades de las personas y guardarlos en un array
const ages = personas.map((persona) => persona.age * 10)
// ahora quier las edades pero multiplicas x 10
// '[21, 22, 25]'
// '[210, 220, 250]'
console.log(ages)

const numeros8 = [1, 3, 5, 7, 9]

numeros8.forEach((numero) => {
  console.log(numero)
})

//filter y find

// filter
// find
const numero9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filtras los numeros que sea multiplo de 3
// filter: retorna un array con el filtro

const numerosFiltrados = numero9.filter((numer) => numer % 3 === 0)

const numerosFiltrados2 = numero9.filter((numer) => {
  return numer % 3 === 0
})

const numerosFiltrados3 = numero9.filter(function(numer) {
  if(numer % 3 === 0) {
    return numer
  }
})

console.log(numerosFiltrados)
console.log(numerosFiltrados2)
console.log(numerosFiltrados3)



// filter
// find
const personas11 = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata", // zapata
      age: 22
    },
    {
      name: "Maria",
      lastname: "Tapia", // tapia
      age: 25
    }
  ]
  
  // quiero filtrar a las persona que tengan mas de 21 años y su apellido contenga la "t"
  
  const nombres21 = ["Pepe", "Juan", "Maria", "Mercedez", "Juan", "Maria"]

const busqueda = nombres21.findIndex((nombre) => nombre === "Carlos")
const busqueda2 = nombres21.find((nombre) => nombre === "Carlos")

console.log(busqueda)
console.log(busqueda2)

let par = true

const numeros22 = [2,4,6,8,10]
for (const numero of numeros22){
  if (numero %2===0){
    par=false
  }
}

console.log("resultado",par)

const todoEsPar = numeros22.every((numero)=>numero % 2=== 0)
console.log("resultado con every",todoEsPar)

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

function validateFizzBuzz(numero) {
  const m3 = numero % 3 === 0;
  const m5 = numero % 5 === 0;
  const m15 = numero % 15 === 0;

  const respuesta = m15 ? "fizzbuuzz" : m3 ? "fizz" : m5 ? "buzz" : numero;
  return respuesta;
}

for (let i = 1; i <= 100; i++) {
  console.log(validateFizzBuzz(i));
}

/*
Escribe un programa que reciba un texto y transforme lenguaje natural a
"lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 se caracteriza por sustituir caracteres alfanuméricos.
- Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
  con el alfabeto y los números en "leet".
  (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
  const alfabeto = {
    a: "4",
    b: "I3",
    c: "[",
    d: ")",
    e: "3",
    f: "|=",
    g: "&",
    h: "#",
    i: "1",
    j: ",_|",
    k: ">|",
    l: "1",
    m: "/\\/\\",
    n: "^/",
    o: "0",
    p: "|*",
    q: "(_,)",
    r: "I2",
    s: "5",
    t: "7",
    u: "(_)",
    v: "\\/",
    w: "\\/\\/",
    x: "><",
    y: "j",
    z: "2",
    1: "L",
    2: "R",
    3: "E",
    4: "A",
    5: "S",
    6: "b",
    7: "T",
    8: "B",
    9: "g",
    0: "o",
  };


  function haker(text) {
    const alfabeto = {
      a: "4",
      b: "I3",
      c: "[",
      d: ")",
      e: "3",
      f: "|=",
      g: "&",
      h: "#",
      i: "1",
      j: ",_|",
      k: ">|",
      l: "1",
      m: "/\\/\\",
      n: "^/",
      o: "0",
      p: "|*",
      q: "(_,)",
      r: "I2",
      s: "5",
      t: "7",
      u: "(_)",
      v: "\\/",
      w: "\\/\\/",
      x: "><",
      y: "j",
      z: "2",
      1: "L",
      2: "R",
      3: "E",
      4: "A",
      5: "S",
      6: "b",
      7: "T",
      8: "B",
      9: "g",
      0: "o",
      };
  
   let resultado = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toLowerCase();
      if (alfabeto[char]) {
        resultado += alfabeto[char];
      } else {
        resultado += text[i];
      }
    }
  
    return resultado;
  }
  
  const inputText = "marco herrera";
  const leetText = haker(inputText);
  console.log(leetText);



