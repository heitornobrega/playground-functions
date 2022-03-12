// Desafio 1 
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(nome) {
  return `${nome[nome.length - 1]}, ${nome[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(valores) {
  var maior = 0;
  var listaMaior = [];
  var absolutos = [];
  if (valores[0] >= 0) {
    for (c in valores) {
      if (maior <= valores[c]) {
        maior = valores[c];
      }
    }
    for (c in valores) {
      if (maior === valores[c]) {
        listaMaior.push(maior);
      }
    }
  } else {
    for (c in valores) {
      var convertido = Math.abs(valores[c]);
      absolutos.push(convertido);
    }
    var m = Math.min(...absolutos)
    for (c in absolutos) {
      if (m === absolutos[c]) {
        listaMaior.push(m);
      };
    };
  }
  var quantia = listaMaior.length;
  return quantia;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  var campeao = "";
  if (Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    campeao = "os gatos trombam e o rato foge";
  } else if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    campeao = "cat1";
  } else {
    campeao = "cat2";
  }
  return campeao;
}

// Desafio 8
function fizzBuzz(numeros) {
  palavras = [];
  for (c in numeros) {
    if ((numeros[c] % 3 !== 0) && (numeros[c] % 5 !== 0)) {
      palavras.push("bug!");
    } else if ((numeros[c] % 3 === 0) && (numeros[c] % 5 === 0)) {
      palavras.push("fizzBuzz");
    } else if ((numeros[c] % 3 === 0)) {
      palavras.push("fizz");
    } else if ((numeros[c] % 5 === 0)) {
      palavras.push("buzz");
    }
  }
  return palavras;
}

// Desafio 9
function encode(texto) {
  for (let c in texto) {

  }
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(techLista, name) {
  let saida = [];
  if (techLista.length === 0) {
    return "Vazio!";
  }
  techLista.sort();
  for (c in techLista) {
    saida.push(
      {
        tech: techLista[c],
        name: name
      }
    )
  }
  return saida;
}



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
