//https://www.codewars.com/kata/101-dalmatians-squash-the-bugs-not-the-dogs/train/javascript

function howManyDalmatians (number) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!"
  ]
  let respond = number <= 10 ? dogs[0]
                : number <= 50 ? dogs[1]
                : number == 101 ? dogs[3]
                : dogs[2]
  return respond
}
