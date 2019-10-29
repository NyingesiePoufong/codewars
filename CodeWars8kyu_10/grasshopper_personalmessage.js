// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet (name, owner) {
  if (name !== owner){
    return 'Hello guest'
  }else{
    return 'Hello boss'
  }
