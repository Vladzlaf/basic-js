const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0
  let arr1 = s1.split('')
  let y = s2
  while (arr1.length){
    const x = arr1.pop()
    if(y.includes(x)) {
      counter++
      y= y.replace(x, '')
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
