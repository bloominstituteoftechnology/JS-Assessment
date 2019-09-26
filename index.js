/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  //write code here
}


/**
 * ### Challenge `getHome`
 * @instructions
 * Must return input object's `name` property and `homeworld` property.
 *
 * Sample data expected output: `Luke Skywalker is from Tatooine`
*/
function getHome(character) {
  //write code here
}

/**
 * ### Challenge `firstStarshipCost`
 * @instructions
 * Must return character's first starship's `cost_in_credits` property if there are no starships return null.
 *
 * Sample data expected output: 149999
*/
function firstStarshipCost(character) {
  //write code here
}



/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getHome) { module.exports.getHome = getHome }
  if (firstStarshipCost) { module.exports.firstStarshipCost = firstStarshipCost }
  // TODO/INSTRUCTOR: ADD ANY FUNCTIONS YOU CREATE TO EXPORTS HERE
  //                  USE THE LINES ABOVE AS A REFERENCE
}

