const lookupChar = require('./charLookup.js');
const { assert } = require('chai');

describe('Lookup Char', () => {
    it('returns undefined if the first param is number', () => {
        assert.equal(lookupChar(20, 1), undefined);
    });

    it('returns undefined if the second param is string', () => {
        assert.equal(lookupChar('string', '2'), undefined);
    });

    it('returns undefined if the second param is floating number', () => {
        assert.equal(lookupChar('dog', 1.1), undefined);
    });

    it('returns incorrect index if the index is bigger than the string length', () => {
        assert.equal(lookupChar('cat', 5), 'Incorrect index');
    });

    it('returns undefined if the index is negative number', () => {
        assert.equal(lookupChar('cat', -1), 'Incorrect index');
    });

    it('returns incorrect index if the string is empty', () => {
        assert.equal(lookupChar('', 0), 'Incorrect index');
    });

    it('return the character at the specified index', () => {
        assert.equal(lookupChar('cat', 1), 'a');
    });

    it('the string is only one letter', () => {
        assert.equal(lookupChar('c', 0), 'c');
    });
})