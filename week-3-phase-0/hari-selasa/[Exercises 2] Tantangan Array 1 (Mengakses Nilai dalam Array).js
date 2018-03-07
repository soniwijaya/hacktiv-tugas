var hasil = "";

function balikString(text){
    for(var i=text.length-1;i>=0;i--){
        hasil += text[i];   
    }
    return hasil;
}

console.log(balikString("hello world!"));