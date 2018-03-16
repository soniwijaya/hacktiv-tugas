function kaliTerusRekursif(angka) {
    var string = String(angka); 
    if(string.length==1){
        return angka;
    }else{
        var counter = 1;
        for(var i=0;i<string.length;i++){
            counter = counter * string[i];
        }
        return kaliTerusRekursif(counter);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6