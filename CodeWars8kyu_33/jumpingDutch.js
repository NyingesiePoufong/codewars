//https://www.codewars.com/kata/coding-3min-jumping-dutch-act/train/javascript

function sc(floor){
  let scream = '';

  //console.log(floor)
  if(floor <= 1){
  scream = '';
  //console.log(scream);
  }else if(floor > 1 && floor <= 6){

    for(let i = 1; i < floor; i++){
      scream += "Aa~ "
      //console.log(scream)
    }

    scream += 'Pa! Aa!'
    console.log(scream)

  }else if(floor > 6){
    for(let i = 1; i < floor; i++){
      scream += "Aa~ "
      //console.log(scream)
    }
    scream += 'Pa!'
    console.log(scream)
  }
  return scream
};
