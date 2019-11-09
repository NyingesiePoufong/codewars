//https://www.codewars.com/kata/grasshopper-grade-book/train/javascript
let grade = ''

function getGrade (s1, s2, s3) {
  // Code here

  let average = ((s1 + s2 + s3) / 3)

  if(average <= 0 || average < 60) {
    grade = 'F'
  }else if(average <= 60 || average < 70){
    grade = 'D'
  }else if(average <= 70 || average < 80){
    grade = 'C'
  }else if(average <= 80 || average < 90){
    grade = 'B'
  }else if(average <= 90 || average <= 100){
    grade = 'A'
  }
  return grade
};
