// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
array[0];
return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
 let ultimoElement = array[array.length -1]; {
   return ultimoElement;
 }
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var longarray = array.length; {
    return longarray;
  }
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayporuno = [];
  for(var ppp = 0; ppp < array.length; ppp++) {
  arrayporuno[ppp] = array[ppp] + 1;
    }
  return arrayporuno;
  }



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
var concatt = palabras.join( " "); {
  return concatt;
}
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var jjj = 0; jjj < array.length; jjj++) {
    if(array[jjj] === elemento) {
return true;
    }
  }
  return false;
  }




function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
adicion = 0;
for (var zz = 0; zz < numeros.length; zz++){
adicion = adicion + numeros[zz];
}
return adicion;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
  }



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var limitee = numeros[0];
  for(var oo = 1; oo < numeros.length; oo++) {
    if(numeros[oo] > limitee) { 
      limitee = numeros[oo];
    }
  }
  return limitee;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var fg = 0; fg < arguments.length; fg++) {
    total = total * arguments[fg];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
recuento = 0;
  for( qq = 0; qq < arreglo.length; qq++) {
  if(arreglo[qq] > 18) {
    recuento++;
  }
}
return recuento;
}



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
if(numeroDeDia === 1 || numeroDeDia === 7) {
  return "Es fin de semana";
}else {
  return "Es dia Laboral";
} 
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
var nueve = n.toString()
if(nueve.charAt(0) === "9") {
return true;
}
return false;
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var iu =0 ; iu < arreglo.length - 1; iu++) {
    if(arreglo[iu] !== arreglo[iu+1]){
      return false
    }
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var arraymeses = [];
for(let pp = 0; pp < array.length; pp++){
if(array[pp] === "Enero" || array[pp] === "Marzo" || array[pp] === "Noviembre") {
arraymeses.push(array[pp]);
}
}
if(arraymeses.length < 3) {
  return "No se encontraron los meses pedidos";
}
else {
  return arraymeses;
}
}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayfiltro = []
  for(var gg = 0; gg < array.length; gg++) {
    if(array[gg] > 100) {
      arrayfiltro.push(array[gg]);  
      } 
  }
  return arrayfiltro;
  }



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var nuevooarray = [];
var aumento = numero;
for(var ff = 0; ff < 10; ff++) {
  aumento = aumento + 2;
if(aumento === ff) break;
else {
  nuevooarray.push(aumento);
}
}

  if( ff < 10) {
    return "Se interrumpió la ejecución"
  }
   else{
    return nuevooarray;
  }
}




function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arraynew = [];
  let aumento2 = numero;
  for(var uuu = 0; uuu < 10; uuu++) {
    if(uuu === 5) continue;
  else {
    aumento2 = aumento2 + 2;
    arraynew.push(aumento2);
  }
}
return arraynew;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
