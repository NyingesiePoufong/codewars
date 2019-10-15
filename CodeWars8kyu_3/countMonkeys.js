// https://www.codewars.com/kata/count-the-monkeys/javascript

const monkeyCount = (n) => Array.from({length: n}, (v, k) => k+1) ;

console.log(monkeyCount(5))
