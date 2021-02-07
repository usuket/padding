![Node.js CI](https://github.com/usuket/simple-padding/workflows/Node.js%20CI/badge.svg?branch=main)
[![npm version](https://badge.fury.io/js/simple-padding.svg)](https://badge.fury.io/js/simple-padding)

# Simple padding lib for nodejs

Nothing more than simple padding function for Node.js  
It created by personal demand for reusing function for common use-case.

## Install

``npm install --save simple-padding``

## Usage

```javascript
var simplePadding = require("simple-padding")

// "0000000001"
var integerPaddingBy0 = simplePadding(1, 10)
console.info(integerPaddingBy0)

// "      0.01"
var floatNum = simplePadding(0.01, 10, " ")
console.info(floatNum)

// "0000000abc"
var defaultPaddingBy0 = simplePadding("abc", 10)
console.info(defaultPaddingBy0)

// "aaaaaaa100"
var charPadding = simplePadding(100, 10, "a")
console.info(charPadding)

// "000000-100"
var minusInt = simplePadding(-100, 10, "0")
console.info(minusInt)

// "02147483647"
var intMaxPlusPad = simplePadding(2147483647, 11)
console.info(intMaxPlusPad)

// And you can take a look into various usecase in example.js ...
```

## Interface

```javascript
/**
 *
 * @param value input value
 * @param length index length
 * @param char [optional] char will be 0 when it is null or undefined.
 * @returns {string}
 */
function padding(value, length, char) {
    return String
}
```

## Error handling

```javascript
try {
    // Missing char
    simplePadding("abc", 10, "")
    // Invalid 2nd param (padded length)
    simplePadding("aaa", 0)
    // etc ..
} catch (e) {
    console.error(e);
}
```

## Contribution

- npm test
- npm test -- --watch
- Please create PR or Issue.

## Publish

```
git tag -a v1.0.0 -m "v1.0.0"
git push origin tags/v1.0.0
git tag
npm publish --access public .
```

## Update

npm version patch npm publish ./ 
