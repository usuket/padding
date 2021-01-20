const assert = require('assert');
const padding = require('./padding');
describe('padding', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            console.info(padding(100, 10, "a"))
            console.info(padding(-100, 10, "0"))
            console.info(padding(0, 10))
            console.info(padding(1_000_000_000, 10))
            console.info(padding("aaa", 10))

            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});