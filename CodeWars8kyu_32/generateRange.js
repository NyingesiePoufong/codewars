//https://www.codewars.com/kata/generate-range-of-integers/train/javascript

function generateRange(min, max, step){
  let arrRange = [];

  if(min > max){
    arrRange.push(max)
    console.log(arrRange)
    //let calc1Lh = min - max
    //console.log(calc1Lh)

      for(let i = max+step; i <= min; i += step){
        arrRange.push(i)
        //console.log(i)
        console.log(arrRange)

      }

    return arrRange


    //let foundMax = arrRange[arrRange.length - 1]
    //console.log(foundMax)

    //let foundMin = arrRange[arrRange.length - arrRange.length]
    //console.log(foundMin)

    //max = foundMax
    //console.log(max)
    //min = foundMin
    //console.log(min)

  }else if(min < max){
    arrRange.push(min)
    console.log(arrRange)

     for(let i = min+step; i <= max; i += step){
        arrRange.push(i)
        console.log(arrRange)
      }
  }else{
    console.log('this is not a range')
  }

  return arrRange
}
