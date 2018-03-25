function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    rute.unshift("");
    var harga = [];
    for(var i=0;i<arrPenumpang.length;i++){
        var obj = {};
        obj["penumpang"] = arrPenumpang[i][0];
        obj["naikDari"] = arrPenumpang[i][1];
        obj["tujuan"] = arrPenumpang[i][2]; 
        for(var l=0;l<rute.length;l++){
            if(arrPenumpang[i][1]==rute[l]){
                indexAwal = l;
            }else if(arrPenumpang[i][2]==rute[l]){
                indexAkhir = l;
            }
        }
        obj["bayar"] = (indexAkhir-indexAwal)*2000;
        harga.push(obj)
    }
    return harga;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]