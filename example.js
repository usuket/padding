/**
 * Use ./index for internal test.
 * It will be below in actual use-case.
 * const simplePadding = require("simple-padding")
 */
const simplePadding = require("./index")

// "0000000001"
console.info(simplePadding(1, 10))

// "      0.01"
console.info(simplePadding(0.01, 10, " "))

// "aaaaaaa100"
console.info(simplePadding(100, 10, "a"))

// "000000-100"
console.info(simplePadding(-100, 10, "0"))

// "02147483647"
console.info(simplePadding(2147483647, 11))

// "0000000aaa"
console.info(simplePadding("aaa", 10))

// "       100"
console.info(simplePadding("100", 10, " "))

// "-------100"
console.info(simplePadding("100", 10, "-"))

// "0000000999"
console.info(simplePadding("999", 10, "0"))

// "+|+|+|-100"
console.info(simplePadding(-100, 10, "+|"))

// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
console.info(simplePadding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length, " "))

// "       cdf"
console.info(simplePadding("cdf", 10, " "))

// "0000マルチバイト"
console.info(simplePadding("マルチバイト", 10))

// "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000999999999999999"
console.info(simplePadding("999999999999999", 100, "0"))

/*
 * Errors
 */
// Error: empty char
// console.info(simplePadding("abc", 10, ""))

// Error: param length < 0
// console.info(simplePadding("aaa", 0))

// Error: param length < 0
// console.info(simplePadding("aaa", -1))

// Error: non integer param length
// console.info(simplePadding("aaa", 0.1))

// Error: invalid length
// console.info(simplePadding("aaa", null))

// Error: invalid length
// console.info(simplePadding("aaa", undefined))

// Error: invalid length
// console.info(simplePadding("aaa", NaN))

// Error: too large length
// console.info(simplePadding(10_000_000_000, 10))

// Error: invalid target
// console.info(simplePadding(null, 10))

// Error: invalid target
// console.info(simplePadding(undefined, 10))
