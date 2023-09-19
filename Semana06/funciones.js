
/*el nombre de las funciones sea un verbo infinitivo (ar, er..)*/
/* n1 n2 */



function calcular(n1, n2, operador) {
    if (operador === "+") {
        return n1 + n2;
    } else if (operador === "-") {
        return n1 - n2;
    } else if (operador === "*") {
        return n1 * n2;
    } else if (operador === "/")
        if (n2 !== 0) {
            return n1 / n2;
        } else {
            return "no es posible entre ";
        } else {
        return "no existe operador";
    }
}

console.log(calcular(23, 45, "+"))
console.log(calcular(23, 45, "-"))
console.log(calcular(23, 0, "/"))

function calcular2(n1, n2, operador) {
    if (operador === "+") return n1 + n2;
    if (operador === "-") return n1 - n2;
    if (operador === "*") return n1 * n2;
    if (operador === "/") {
        if (n2 === 0) return "no es posible entre 0";
        return n1 / n2;
    }
    return "no es posible entre ";
}

console.log(calcular2(23, 45, "+"))
console.log(calcular2(23, 45, "-"))
console.log(calcular2(23, 0, "/"))

function calcular3(n1,n2,operador){
    //validar el error de la divicion 
    if(n2===0 && operador === "/") return "no es posible"

    const operaciones = {
        "+":n1+n2,
        "-":n1-n2,
        "*":n1*n2,
        "/":n1/n2,
    };
    return operaciones[operador] ?? "no se puede";
}

console.log("Usando calcular 3")
console.log(calcular3(23, 45, "+"))
console.log(calcular3(2, 45, "-"))
console.log(calcular3(23, 0, "/"))



function calcular4(n1, n2, operador) {
    try {
      return eval(`${n1}${operador}${n2}`) === Infinity
        ? "Operacion No valida"
        : eval(`${n1}${operador}${n2}`);
    } catch (err) {
      return err;
    }
  }


  function calcular5(n1, n2, operador) {
    try {
      const res = eval(`${n1}${operador}${n2}`);
      return isFinite(res) ? res : "Operacion No valida";
    } catch (err) {
      return err;
    }
  }
