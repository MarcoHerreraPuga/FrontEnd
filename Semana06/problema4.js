/*Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100. 
*/

function isPrime(number) {
    if (number === 1) return "no es primo";
  
    let cont = 0;
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) cont++;
    }
  
    return cont === 2 ? "es primo" : "no es primo";
  }
  
  for (let i = 1; i <= 1000; i++) {
    console.log(i, isPrime(i));
  }

function Primo(n1) {
    if (n1 <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n1); i++) {
      if (n1 % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 1; i <= 100; i++) {
    if (Primo(i)) {
      console.log(i);
    }
  }

