const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let results = 0
  for (let mainArr of matrix ){
    for(let inArr of mainArr){
      if(inArr === '^^') {
        results++
      }
    }
  }
  return results
}

module.exports = {
  countCats
};
