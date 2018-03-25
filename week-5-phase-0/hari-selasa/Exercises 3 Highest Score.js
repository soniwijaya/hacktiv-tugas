function highestScore (students) {
    // for(x in students){
    //   for(y in students){
    //     if(students[x]["class"]==students[y]["class"] && students[x]["score"]>students[y]["score"]){
    //       var tmp = students[x];
    //       students[x] = students[y];
    //       students[y] = tmp;
    //     }
    //   }
    // }

    // var tabel = {};
    // var fix = {};
    // for(var l=0;l<students.length;l++)
    //   if(tabel[students[l].class]===undefined){
    //     tabel[students[l].class] = 'a';
    //     fix[students[l].class] = { name:students[l].name, score:students[l].score };
    //   }

    // return fix;

    var obj = {};
      for(var i=0;i<students.length;i++){
        if(obj[students[i].class]==undefined){
            obj[students[i].class] = {name:students[i].name,score:students[i].score};
        }else{
          if(students[i].score > obj[students[i].class].score){
            obj[students[i].class] = {name:students[i].name,score:students[i].score};
          }
        }
      }
      
    return obj;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
console.log(highestScore([])); //{}