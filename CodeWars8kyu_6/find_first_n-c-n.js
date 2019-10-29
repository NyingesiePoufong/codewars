//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++){
    let difference = arr[i] - arr[i-1]
    if(difference !== 1){
      return arr[i]
      }
  }
  return null
}
