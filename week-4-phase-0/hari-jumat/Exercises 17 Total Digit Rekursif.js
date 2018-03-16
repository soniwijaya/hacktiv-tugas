function totalDigitRekursif(angka) {
    var angka = String(angka).split("");
    var hasil = Number(angka[0]);
    angka.shift();
    if(angka.length==0){
        return hasil;
    }else{
        var join = angka.join("");
        return hasil + totalDigitRekursif(join);
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5