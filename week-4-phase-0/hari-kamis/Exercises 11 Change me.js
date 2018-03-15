function changeMe(arr) {
    var namalengkap = "";
    var count = 0;
    if(arr.length===0){
        console.log(" ");
    }else{
        for(var i=0;i<arr.length;i++){
            count++;
            console.log(count+". "+arr[i][0]+" "+arr[i][1]+":");
            var biodata = {};
            biodata["firstName"] = arr[i][0];
            biodata["lastName"] = arr[i][1];
            biodata["gender"] = arr[i][2];
            if(arr[i][3]==undefined){
                biodata["age"] = "Invalid Birth Year";
            }else if(arr[i][3]!=undefined){
                biodata["age"] = 2018-arr[i][3];
            }
            console.log(biodata);
        }
    }
  }
  
  // TEST CASES
 changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""