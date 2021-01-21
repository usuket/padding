/**
 * Use ./index for internal test.
 * It will be below in actual use-case.
 * const padding = require("simple-padding")
 */
const padding = require("./index")

// "0000000001"
console.info(padding(1, 10))

// "      0.01"
console.info(padding(0.01, 10, " "))

// "aaaaaaa100"
console.info(padding(100, 10, "a"))

// "000000-100"
console.info(padding(-100, 10, "0"))

// "02147483647"
console.info(padding(2147483647, 11))

// "0000000aaa"
console.info(padding("aaa", 10))

// "       100"
console.info(padding("100", 10, " "))

// "-------100"
console.info(padding("100", 10, "-"))

// "0000000999"
console.info(padding("999", 10, "0"))

// "+|+|+|-100"
console.info(padding(-100, 10, "+|"))

// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
console.info(padding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length, " "))

// "       cdf"
console.info(padding("cdf", 10, " "))

// "0000マルチバイト"
console.info(padding("マルチバイト", 10))

// "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000999999999999999"
console.info(padding("999999999999999", 100, "0"))

/*
 * Errors
 */
// Error: empty char
// console.info(padding("abc", 10, ""))

// Error: param length < 0
// console.info(padding("aaa", 0))

// Error: param length < 0
// console.info(padding("aaa", -1))

// Error: non integer param length
// console.info(padding("aaa", 0.1))

// Error: invalid length
// console.info(padding("aaa", null))

// Error: invalid length
// console.info(padding("aaa", undefined))

// Error: invalid length
// console.info(padding("aaa", NaN))

// Error: too large length
// console.info(padding(10_000_000_000, 10))

// Error: invalid target
// console.info(padding(null, 10))

// Error: invalid target
// console.info(padding(undefined, 10))
