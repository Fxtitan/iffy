const colorDeconstructor = require('./color-deconstructor.js')
const colorCombinator = require('./color-combinator.js')
// Your code here!
const variant = getInput(0);
const otherVariant = getInput(1)

if(variant === undefined){
  console.log('We need at least one color!')
}else if(otherVariant === undefined) {
  console.log(colorDeconstructor(variant))
} else {
  const consoleLog = colorCombinator(variant, otherVariant)
  console.log(consoleLog)
}


//no return cause not in function





// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}




