const padding = require("./padding")

console.info(padding(100, 10, "a"))
console.info(padding(-100, 10, "0"))
console.info(padding(0, 10))
console.info(padding(1_000_000_000, 10))
console.info(padding("aaa", 10))

console.info(padding("100", 10, " "))
console.info(padding("100", 10, "-"))
console.info(padding("999", 10, "0"))
console.info(padding(-100, 10, "+|")) // +|+|+|-100

console.info(padding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length, " "))
console.info(padding("abc", 10, ""))
console.info(padding("cdf", 10, " "))

// case
console.info(padding("マルチバイト", 10))
console.info(padding("999999999999999", 100, "0"))

// Errors
// console.info(padding("aaa", 0))
// console.info(padding("aaa", -1))
// console.info(padding("aaa", 0.1))
// console.info(padding("aaa", null))
// console.info(padding("aaa", undefined))
// console.info(padding("aaa", NaN))
// console.info(padding(10_000_000_000, 10))
// console.info(padding(null, 10))
// console.info(padding(undefined, 10))
