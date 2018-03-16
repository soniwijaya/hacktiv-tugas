function changeVocals (str) {
    var vocal = 'bjvfp';
    var vocal1 = 'BJVFP';
    var bandingHuruf = 'aiueo';
    var bandingHuruf1 = 'AIUEO';
    var array = str.split("");

    
        for(var i=0;i<array.length;i++){
            for(var k=0;k<bandingHuruf.length;k++){
                if(array[i]==bandingHuruf[k]){
                    array[i] = vocal[k];
                }else if(array[i]==bandingHuruf1[k]){
                    array[i] = vocal1[k];
                }
            }
        }
        var join = array.join("");
        return join;
  }

  function reverseWord (str) {
    var hasil = "";
    for(var i=str.length-1;i>=0;i--){
        hasil += str[i];
    }
    return hasil;
  }
  
  function setLowerUpperCase (str) {
    var hasil = "";
    for(var i=0;i<str.length;i++){
        if(str[i]==str[i].toUpperCase()){
           hasil += str[i].toLowerCase();
        }else{
           hasil += str[i].toUpperCase();
        }
    }
    return hasil;
  }
  
  function removeSpaces (str) {
    var hasil = "";
    if(str.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }else{
        for(var i=0;i<str.length;i++){
            if(str[i]==" "){
                hasil += "";
            }else{
                hasil += str[i];
            }
        }
        return hasil;
    }
  }
  
  function passwordGenerator (name) {
    var ubahhuruf = changeVocals(name);
    var balikkata = reverseWord(ubahhuruf);
    var ubahhurufBesar = setLowerUpperCase(balikkata);
    var hapusspasi = removeSpaces(ubahhurufBesar);
    return hapusspasi;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'