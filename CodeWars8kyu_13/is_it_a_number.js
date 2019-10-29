//https://www.codewars.com/kata/is-it-a-number/train/javascript

function isDigit(s) {
return s==parseFloat(s);
}

// // other code WIP
// let temp;
// let space;
// ​
// //trip spaces at ends of string
// function trimString(s){
//   temp = s.trim();
// }
// ​
// // check to see if there is a space in between char
// //(only if there is more than one char)
// function test4Space(s) {
//   if (temp.length !=1) {
//     space = temp.indexOf(' ') >= 0;
//   }else{
//     isDigit(s);
//   }
// }
// ​
// function isDigit(s) {
//   trimString(s);
//   test4Space(s);
//
//   if(Number(temp) != NaN && space === false) {
//      console.log(true);
//   }else{
//     console.log(false);
//   }
// };
// ​
// ​
// ​
// ​
// isDigit("55 45");
