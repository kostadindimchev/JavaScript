const isOddOrEven = require('./evenOrOdd.js');
const { assert } = require('chai');

describe('isOddOrEven', () => {
    it('should return undefined if param is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('should return undefined if param is arrary', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it('should return undefined if param is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it('should return even if param is string with even length', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });

    it('should return odd if param is string with odd length', () => {
        assert.equal(isOddOrEven('hello'), 'odd');
    });
});