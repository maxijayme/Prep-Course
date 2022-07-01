// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array=[];
  var nuevoArray=[];
  for(var propiedad in objeto){
    array.push(propiedad,objeto[propiedad]);// con array.push([propiedad,objeto[propiedad]]) ya estoy pusheando un array dentro del array.
    nuevoArray.push(array);
    array=[];
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var newObjeto= {};
  var array = string.split("");//convierto la cadena en un array
      for(var x = 0; x < array.length; x++){
        if (newObjeto[array[x]]==undefined){//veo si ya existe la propiedad y si no existe la creo y le doy valor 1
          newObjeto[array[x]]=1;
      }else{
        newObjeto[array[x]]+=1 //si existe le sumo 1
      }
    }
  return newObjeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var esMayus="";
  var esMin="";
  for(var x = 0; x < s.length; x++){
    if (s[x]===s[x].toUpperCase()){
      esMayus+=s[x];
    }else{
      esMin+=s[x];
    }
  }
  return s=esMayus+esMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo= str.split(" ");
  var espejado=[];
  for (var x=0;x<espejo.length;x++){
    var palabra="";
      for(var i=espejo[x].length-1;i>=0;i--){
        palabra+= espejo[x][i];
      }
    espejado.push(palabra);
  } 
  str = espejado.reduce(function(acc,ele){
    return acc+" "+ele;
  })

   return str;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var original =numero.toString();
  var copia="";
  for (i=original.length-1;i>=0;i--){
    copia+=original[i];
  }
  if(original===copia){
    return ("Es capicua");
  }
  else{
    return ("No es capicua");
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí7
  var nuevaCadena = "";
  for(var i=0;i<cadena.length;i++){
    if(cadena[i]!="a" && cadena[i]!="b" && cadena[i]!="c" ){
      nuevaCadena += cadena[i];
  }
  }
  if(cadena.length==nuevaCadena.length){
    return cadena;
  }else{
    return nuevaCadena;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arreglo = arr.sort(function(a,b){
    if(a.length>b.length){
      return 1;
    }
    else if(a.length<b.length){
      return -1;
    }
    else{
      return 0;
    }
  });
  return arreglo;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3=[];
  for (var x=0;x<arreglo1.length;x++){
    for (var y=0;y<arreglo2.length;y++){
      if(arreglo1[x]==arreglo2[y]){
        if(!arreglo3[x]){
          arreglo3.push(arreglo1[x]);
        }
      }
    }
  }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

