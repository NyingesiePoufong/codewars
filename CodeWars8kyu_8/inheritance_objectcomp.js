//https://www.codewars.com/kata/factory-functions-number-2-inheritance-and-object-composition/train/javascript
function constructionWorker(firstName, lastName, age, gender, married, boss) {
  // Define Me :)
  var parent = person(firstName, lastName, age, gender, true, "construction worker", married)
  parent.sayBossName = function (){
     return 'My boss is called ' + this.boss + ' and is a very nice person!'
  }
  parent.boss = boss
  return parent;

}



//function calling
//maniplating objects 
