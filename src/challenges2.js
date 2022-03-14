// Desafio 11
function generatePhoneNumber(numeros) {
  var teste = [];
  var teste2 =[];
  var teste3 = [];
  var res = [];
  
  function getOccurrence(array, value) {
    var count = 0;
    var res = [];
    array.forEach((v) => (v === value && count++));
    res.push(value);
    res.push(count);
    return res;
  }
  for (c in numeros) {
    teste.push(getOccurrence(numeros, numeros[c]));
  }
  for (c in teste){
    for(i in teste[c]){
      teste2.push(teste[c][i]);
    }
  }
  for (c in teste2){
    if(c % 2 !== 0){
      teste3.push(teste2[c]);
    }
  }
  for(c in teste3){
    if(teste3[c] >= 3){
        res.push(teste3[c]);
    }
}

  if (numeros.length === 11) {
    for (c in numeros) {
      if (numeros[c] < 0) {
        return "não é possível gerar um número de telefone com esses valores";
      } else if (numeros[c] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    if(res.length >= 3){
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      return `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`

    }
  } else {
    return "Array com tamanho incorreto."
  }

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
  if(soma === 1){
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
