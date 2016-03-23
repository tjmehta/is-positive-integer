# is-positive-integer [![Build Status](https://travis-ci.org/tjmehta/is-positive-integer.svg?branch=master)](https://travis-ci.org/tjmehta/is-positive-integer) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
check if a number is a positive integer

# Installation
```bash
npm --save i is-positive-integer
```

# Usage
```js
var isPositiveInteger = require('is-positive-integer')

isPositiveInteger(1) // true
isPositiveInteger(10) // true
isPositiveInteger(100) // true
isPositiveInteger(1000) // true
isPositiveInteger(0) // false
isPositiveInteger(-1) // false
isPositiveInteger(-10) // false
isPositiveInteger(-100) // false
isPositiveInteger(-1000) // false
isPositiveInteger(1.1) // false
isPositiveInteger(10.1) // false
isPositiveInteger(100.1) // false
isPositiveInteger(1000.1) // false
isPositiveInteger(-1.1) // false
isPositiveInteger(-10.1) // false
isPositiveInteger(-100.1) // false
isPositiveInteger(-1000.1) // false
isPositiveInteger(Infinity) // false
isPositiveInteger({}) // false
isPositiveInteger([]) // false
isPositiveInteger('10') // false
isPositiveInteger('what') // false
isPositiveInteger(/what/) // false
isPositiveInteger(null) // false
// ...
```

### isSafePositiveInteger
Ensure positive integer less than `Number.MAX_SAFE_INTEGER`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
```js
var isSafePositiveInteger = require('is-positive-integer').isSafePositiveInteger
// max safe integer doesn't exist in older engines
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991

isSafePositiveInteger(MAX_SAFE_INTEGER) // true
isSafePositiveInteger(MAX_SAFE_INTEGER + 1) // false
isSafePositiveInteger(Number.MAX_VALUE) // false
// ...
```

# License
MIT
