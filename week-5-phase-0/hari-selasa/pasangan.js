function oddPairsum(str){
    var tambah = 0;
    var tmp;
    for(var i=0;i<str.length;i += 2){
        if(str[i+1]===undefined){
            tmp = str[i] + str[(str.length-1)/2]
            //console.log(tmp)
        }else{
            tmp = str[i] + str[i+1]
            //console.log(tmp)
        }

        if(tmp%2!=0){
            //console.log(tmp)
            tambah += Number(tmp);
        }
        
    }
    return tambah
}

console.log(oddPairsum('2144131211')); // 45
console.log(oddPairsum('33791363')); // 188
console.log(oddPairsum('23426766201')); // 107
console.log(oddPairsum('2478201')); // 0