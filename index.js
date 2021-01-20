/**
 *
 * @param value input value
 * @param length index length
 * @param char char will be 0 when it is null or undefined.
 * @returns {string}
 */
function index(value, length, char) {
	if (char === null || char === undefined) char = "0"
	if (char.length === 0) throw Error(`Input char should be more than 0.`)

	if (value === null || value === undefined) throw Error(`Input value should NOT be null or undefined.`)

	if (length !== 0 && length == null) throw Error(`Length should NOT be null or undefined.`)
	if (!Number.isSafeInteger(length)) throw Error(`Length should be safe integer.`)
	if (length <= 0) throw Error(`Length should be positive integer. the actual value is ${length}.`)


	const str = String(value)
	if (str.length > length) throw Error(`${str} Too much ${length}`)
	return str.padStart(length, char)
}

module.exports = index;
