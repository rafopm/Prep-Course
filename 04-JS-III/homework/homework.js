// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0; i<array.length; i++){
    array[i]=array[i]+1;
  }
  return array;
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
  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var z=0; z < array.length; z++){
    if (elemento === array[z]) {
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var qsuma = 0;
  for(var q=0; q<numeros.length; q++){
    qsuma = qsuma + numeros[q];
  }
  return qsuma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var xpromedio = 0;
  for(var x=0; x<resultadosTest.length; x++){
    xpromedio = xpromedio + resultadosTest[x];
  }
  return xpromedio/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var cantiArguments;
  var multiArguments;
  cantiArguments = arguments.length
  if (cantiArguments === 0) return 0;
  else if (cantiArguments ===1) return arguments[0];
  else 
    multiArguments=arguments[0];
    for(var h=1; h < cantiArguments; h++) {
      multiArguments=multiArguments*arguments[h];
    }
  return multiArguments;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var pContador = 0;
  for ( var k = 0; k < arreglo.length; k++) {
    pNumero = arreglo[k]
    if(pNumero > 18) {
      pContador = pContador+1;
    }
  }
  return pContador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 1: return 'Es fin de semana';
    case 2: return 'Es dia Laboral';
    case 3: return 'Es dia Laboral';
    case 4: return 'Es dia Laboral';
    case 5: return 'Es dia Laboral';
    case 6: return 'Es dia Laboral';
    case 7: return 'Es fin de semana';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString()
  if (num[0]==='9') return true;
  else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var num2 = arreglo[0]
  for (h = 1; h<arreglo.length; h++){
    if(num2 != arreglo[h]) {
      return false;
      break;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses1=[]
  for (g = 0; g<array.length; g++){
    if(array[g] === 'Enero' ||array[g] === 'Marzo' ||array[g] === 'Noviembre' ) {
      meses1.push(array[g])
    } 
  }
  if (meses1.length < 3) {
    return 'No se encontraron los meses pedidos';
  } 
  return meses1;
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayor100=[]
  for(var m = 0; m < array.length ; m++) {
    if (array[m] > 100) {
      mayor100.push(array[m])
    }
  }
  return mayor100
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var lista2=[]
  for (var y = 0; y < 10; y++){
    numero = numero+2;
    lista2.push(numero)
    if (numero === y) {
      return 'Se interrumpió la ejecución';
      break;
    }
  }
  return lista2;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var lista3=[]
  for (var w = 0; w < 10; w++){
    if (w === 5) {
        continue;
    } else {
      numero = numero + 2
      lista3.push(numero)
    }
  }
  return lista3;
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
