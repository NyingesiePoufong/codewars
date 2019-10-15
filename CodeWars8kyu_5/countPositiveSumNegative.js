// // https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript


function countPositivesSumNegatives(input){
  let elCount = 0
  let elSum = 0
  if (input === null || input.length === 0){
  return []
  }
  input.forEach(el => {
    elCount = (Math.sign(el) === 1) ? elCount+1:elCount
    elSum = (Math.sign(el) === -1) ?  elSum + el:elSum
//     if (Math.sign(el) === 1){
//       elCount ++
//     }else if(Math.sign(el) === -1){
//       elSum = elSum + el
//     }
  })
return [elCount,elSum]
}

// function countPositivesSumNegatives(input){
//   let elCount = 0
//   let elSum = 0
//   if (input === null || input.length === 0){
//   return []
//   }
//   input.forEach(el => {
//     if (Math.sign(el) === 1){
//       elCount ++
//     }else if(Math.sign(el) === -1){
//       elSum = elSum + el
//     }
//   })
// return [elCount,elSum]
// }
