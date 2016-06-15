function piramide() {
  for(i=0;i<)
}

/*function fibonacci(x){
  var x = prompt("¿Cuantas vueltas quieres?");
  var antepenultimo = 0;
  var penultimo = 1;
  var fibo = 0;

  for (i=0;i<=x;i++){
    console.log(fibo)
    antepenultimo = penultimo;
    penultimo = fibo;
    fibo = antepenultimo + penultimo;
  }
};
*/
function palindromo(palabra){
  var palabra = prompt("¿Quieres saber si una frace es un palindromo?" + "\n" + "Escribe una frace:");
  palabra1 = palabra.toLowerCase();
  palabra1 = palabra1.replace(/\s+/g, '');
  var palabra2 = "";
  for(i=1;i<=palabra1.length;i++){
    palabra2 += palabra1[palabra1.length-(i)];
  };
  if (palabra1 === palabra2){
    alert("!Felicidades, '" + palabra + "' es un palíndromo!");
  }else {
    alert("Lo sentimos, '" + palabra + "' no es un palíndromo");
  };
};
/*
function repetidos(serie){
  var serie = prompt("Dame una serie de números");
  var cadena = [];
  serie = serie.split("");
  serie = serie.sort();
  for(i=0;i<serie.length;i++){
    if(serie[i] == serie[i+1] && serie[i] != serie[i+2]){
      cadena.push(serie[i]);
    };
  };
  console.log(cadena);
};
*/
