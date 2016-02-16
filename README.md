# is-positive-integer
check if a number is a positive integer

# Installation
```bash
npm --save i is-positive-integer
```

# Usage
```js
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
// ...
```

# License
MIT