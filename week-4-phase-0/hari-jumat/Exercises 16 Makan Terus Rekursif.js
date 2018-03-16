function makanTerusRekursif(waktu) {
    if(waktu <= 0){
        return 0
    }else{
        var makan = 1;
        return makan + makanTerusRekursif(waktu-15);;
    }
  }
//   ada 66
//   66 - 15 = 1
//   51 - 15 = 2
//   36 - 15 = 3
//   21 - 15 = 4
//   6 - 15 = 5
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0