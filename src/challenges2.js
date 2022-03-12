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
  var somaAB = lineA + lineB;
  var somaAC = lineA + lineC;
  var somaBC = lineB + lineC;
  var difeAB = Math.abs(lineA - lineB);
  var difeAC = Math.abs(lineA - lineC);
  var difeBC = Math.abs(lineB - lineC);
  var resultado = false;
  if (lineA < somaBC && lineB < somaAC && lineC < somaAB
    && lineA < difeBC && lineB < difeAC && lineC < difeAB) {
    resultado = true;
  }
  return resultado;
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
