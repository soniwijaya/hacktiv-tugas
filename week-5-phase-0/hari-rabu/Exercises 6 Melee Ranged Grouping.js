function meleeRangedGrouping (str) {
    if(str.length==0){
      return [];
    }else{
      var str = str.split(",");
      var ranged = [];
      var melee = [];
      var gabungan = [];
      for(var i=0;i<str.length;i++){
          var baru = str[i].split("-");
          if(baru[1]=="Ranged"){
            ranged.push(baru[0]);
          }else{
            melee.push(baru[0]);
          }
      }
      gabungan.push(ranged)
      gabungan.push(melee)
      return gabungan;
    }

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []