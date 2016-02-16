var passAll = require('101/pass-all')
var isPositive = require('is-positive')
var isInteger = require('is-integer')

module.exports = passAll(isPositive, isInteger)
