module.exports = isPositiveInteger

function isPositiveInteger (x) {
  return x >> 0 === x && x >> 0 > 0
}
