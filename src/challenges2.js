// Desafio 11
function generatePhoneNumber(numeros) {
  var resultado = "ok";
  if(numeros.length !== 11){
    resultado = "erro";
  }else{
    for(c in numeros){
      if(numeros[c] < 0 && numeros[c] > 9){
        
      }
    }
    
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))){
    return true;
  }else if((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))){
    return true;
  }else if((lineC < (lineB + lineA)) && (lineC > Math.abs(lineB - lineA))){
    return true;
  }else{
    return false;
  }  
}

// Desafio 13
function hydrate(ingerido) {
  var r = /\d+/;
  var s = ingerido;
  var numLis = [];
  for(c in ingerido){
    var cara = s.match(r)[c]
    var num = parseInt(cara);
    numLis.push(num)
  }

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
