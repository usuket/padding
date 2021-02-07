const assert = require('assert');
const simplePadding = require('../index');
describe('padding', function () {
	it('should be ok', function () {
		assert.equal(simplePadding(1, 10), "0000000001")
		assert.equal(simplePadding(100, 10, "a"), "aaaaaaa100")
		assert.equal(simplePadding(-100, 10, "0"), "000000-100")
		assert.equal(simplePadding(2147483647, 11), "02147483647")
		assert.equal(simplePadding("aaa", 10), "0000000aaa")
	});

	it('should be ok', function () {
		assert.equal(simplePadding("100", 10, " "), "       100")
		assert.equal(simplePadding("100", 10, "-"), "-------100")
		assert.equal(simplePadding("999", 10, "0"), "0000000999")
		assert.equal(simplePadding(-100, 10, "+|"), "+|+|+|-100")

		assert.equal(simplePadding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length, " "), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
		assert.equal(simplePadding("cdf", 10, " "), "       cdf")

		assert.equal(simplePadding("マルチバイト", 10), "0000マルチバイト")
		assert.equal(simplePadding("999999999999999", 100, "0"), "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000999999999999999")
	});

	it("Error", function () {
		assert.throws(function () {
			simplePadding("abc", 10, "")
		}, Error)

		assert.throws(function () {
			simplePadding("abc", 10, "")
		}, Error)
		assert.throws(function () {
			simplePadding("aaa", 0)
		}, Error)
		assert.throws(function () {
			simplePadding("aaa", -1)
		}, Error)
		assert.throws(function () {
			simplePadding("aaa", 0.1)
		}, Error)
		assert.throws(function () {
			simplePadding("aaa", null)
		}, Error)
		assert.throws(function () {
			simplePadding("aaa", undefined)
		}, Error)
		assert.throws(function () {
			simplePadding("aaa", NaN)
		}, Error)
		assert.throws(function () {
			simplePadding(10000000000, 10)
		}, Error)
		assert.throws(function () {
			simplePadding(null, 10)
		}, Error)
		assert.throws(function () {
			simplePadding(undefined, 10)
		}, Error)
	});
});
