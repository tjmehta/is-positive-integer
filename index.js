module.exports = isPositiveInteger

function isPositiveInteger (x) {
  return Number(x) === x && x % 1 === 0 && x > 0;
}
