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
  let soma = 0;
  let quantia = [];
  for(let c in ingerido){
    for(let i = 1; i <=10; i++){
      if(ingerido[c] == i){
        quantia.push(parseInt(ingerido[c]));
      }
    }
  }
  for(let c in quantia){
    soma += quantia[c];
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
