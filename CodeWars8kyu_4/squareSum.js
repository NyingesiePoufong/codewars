
  // *console.log(Array.from([1, 2, 3], (x, y) => Math.pow(y+1, 2)));
// *expected output: Array [2, 4, 6]

function squareSum(numbers) {
  let total = 0,
      i = numbers.length;
  while (i--)
   total += Math.pow(numbers[i], 2);
  return total;
}

console.log(squareSum([4,5]));
