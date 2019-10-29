//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  for(let i = 0; i <queue.length; i++){
    if(i === queue.length-1){
      return "Pls go away and stop eating my sheep"
    }else if(queue[i] === "wolf"){
      let N = queue.length - (i+1)
      return "Oi! Sheep number " + N +  "! You are about to be eaten by a wolf!"
    }
  }
}

//if wolf is the value for the last index of the array return pls go away
//else if wolf is not at the end of the array return sheep you are going to be eaten
//if sheep is going to be eaten run the function that finds the value of wolf and adds plus one
//3-1-1
//3-(1-1)
//3-(1+1)
