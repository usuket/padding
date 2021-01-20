const assert = require('assert');
const padding = require('../index');
describe('padding', function () {
	it('should be ok', function () {
		assert.equal(padding(100, 10, "a"), "aaaaaaa100")
		assert.equal(padding(-100, 10, "0"), "000000-100")
		assert.equal(padding(0, 10), "0000000000")
		assert.equal(padding(1_000_000_000, 10), "1000000000")
		assert.equal(padding("aaa", 10), "0000000aaa")
	});

	it('should be ok', function () {
		assert.equal(padding("100", 10, " "), "       100")
		assert.equal(padding("100", 10, "-"), "-------100")
		assert.equal(padding("999", 10, "0"), "0000000999")
		assert.equal(padding(-100, 10, "+|"), "+|+|+|-100")

		assert.equal(padding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length, " "), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
		assert.equal(padding("cdf", 10, " "), "       cdf")

		assert.equal(padding("マルチバイト", 10), "0000マルチバイト")
		assert.equal(padding("999999999999999", 100, "0"), "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000999999999999999")
	});

	it("Error", function () {
		assert.throws(function () {
			padding("abc", 10, "")
		}, Error)

		assert.throws(function () {
			padding("abc", 10, "")
		}, Error)
		assert.throws(function () {
			padding("aaa", 0)
		}, Error)
		assert.throws(function () {
			padding("aaa", -1)
		}, Error)
		assert.throws(function () {
			padding("aaa", 0.1)
		}, Error)
		assert.throws(function () {
			padding("aaa", null)
		}, Error)
		assert.throws(function () {
			padding("aaa", undefined)
		}, Error)
		assert.throws(function () {
			padding("aaa", NaN)
		}, Error)
		assert.throws(function () {
			padding(10_000_000_000, 10)
		}, Error)
		assert.throws(function () {
			padding(null, 10)
		}, Error)
		assert.throws(function () {
			padding(undefined, 10)
		}, Error)
	});
});
