/* $lab:coverage:off$ */
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991
/* $lab:coverage:on$ */

module.exports = isPositiveInteger
module.exports.isSafePositiveInteger = isSafePositiveInteger

function isPositiveInteger (x) {
  // Is it a number?
  return Object.prototype.toString.call(x) === '[object Number]' &&
    // Is it an integer?
    x % 1 === 0 &&
    // Is it positive?
    x > 0
}

// strict positive integer check:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
function isSafePositiveInteger (x) {
  return isPositiveInteger(x) &&
    x <= MAX_SAFE_INTEGER
}
