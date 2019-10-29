//https://www.codewars.com/kata/filter-out-the-geese/train/javascript

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  for (let i = 0; i <= 4; i ++){
  //loop through the array and set i equal to the array length
    if (birds.includes(geese[i])){
    //find out if arguement has what is included in the index's values of geese
      let a = birds.indexOf(geese[i]);
      //store those those values in an array
      birds.splice(a, 1)
      //delete the values of the array one by one (a is for anywhere, 1 is by how many)
      i--;
      //-- ensures we check for duplicates
      }
  }

  return birds
  //return the modified version of birds


  // return an array containing all of the strings in the input array except those that match strings in geese
};
