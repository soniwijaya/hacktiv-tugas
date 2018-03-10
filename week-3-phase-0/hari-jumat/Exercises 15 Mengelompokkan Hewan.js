function groupAnimals(animals) {
    animals.sort();
    var hasil = [];
    var abjad = animals[0][0];
    var resetArray = [];
    for(var i=0;i<animals.length;i++){
        if(animals[i][0]==abjad){
            resetArray.push(animals[i]);
        }else{
            hasil.push(resetArray);
            resetArray = [];
            abjad = animals[i][0];
            resetArray.push(animals[i]);
        }

        if(i==animals.length-1){
            hasil.push(resetArray);
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]