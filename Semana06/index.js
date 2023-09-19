const nombre = "linder";
const apellido = "Hasinger";
const dni= "41417497";

const datos = nombre + " " + apellido
const datos2 = `Datos: ${nombre} ${apellido} ${dni}`

console.log("Concatenacion",datos);
console.log("Tempate string",datos2);

//formas de console
console.log("Info");
console.error("Error en la consola")
console.warn("Warring en consola");

//operadores

console.log("suma1",2+2)
console.log("suma2",2+"2")
console.log("resta1",20-2)
console.log("resta2",20+"5")
console.log("division1",9/3)
console.log("multiplicacion",23*2)
console.log("residuo mood",40 % 5)
console.log("residuo mood",40 % 3)
console.log("Raiz cuadrada",Math.sqrt(100))
console.log("Potencia",Math.pow(40,0.5))
console.log("Pi",Math.PI)

// operadores de comparacion
// == compara valor
// === compara valor y tipo de dato
 
console.log("igual",2=="2")
console.log("igual2",2==="2")
// diferente
console.log("diferente",2!="2");
console.log("diferente2",2!=="2");
//Mayor menor
console.log(100 > 10);
console.log(100 < 10);
console.log(100 > 10);
console.log(100 >= 10);
console.log(100 <= 10);

let edad=15;

if(edad >=18){
    console.log("La persona es mayor de edad")
}else{
    console.log("la persona es nene")
}

let numero = 5

if(numero %2 === 0){
    console.log("el numero es par");
}else{
    console.log("el numero es impar")
}

console.log("----fecha-----")
const fecha = new Date();
console.log(fecha);


const hora = fecha.getHours();
if (hora < 12){
    console.log("buenos dias");
}else if (hora < 18){
    console.log("Buenas Tardes");
}else if (hora < 20){
    console.log("biuenas tardes Argentina");
}else {
    console.log("Buenas noches")
}


