const expect = require('chai').expect;
const isSymmetric = require('./checkForSymmetry');

describe('Check For Symmetry', () => {
    it('shoud return false with empty array', () => {
        let arr = [];
        let expectOutput = false;

        let actual = isSymmetric(arr);

        expect(actual).to.equal(expectOutput);
    });

    it('shoud return true, if array with strings is symmetric', () => {
        let arr = ['bmw', 'audi', 'audi', 'bmw'];
        let expectOutput = true;

        let actual = isSymmetric(arr);

        expect(actual).to.equal(expectOutput);
    });

    it('shoud return false, if array with strings is not symmetric', () => {
        let arr = ['bmw', 'audy', 'audi', 'bmw'];
        let expectOutput = false;

        let actual = isSymmetric(arr);

        expect(actual).to.equal(expectOutput);
    });

    it('shoud return true, if array with odd count of elements is symmetric', () => {
        let arr = ['bmw', 'audi', 'opel', 'audi', 'bmw'];
        let expectOutput = true;

        let actual = isSymmetric(arr);

        expect(actual).to.equal(expectOutput);
    });

    it('shoud return false, if the input is not array', () => {
        let arr = 'mercedes';
        let expectOutput = false;

        let actual = isSymmetric(arr);

        expect(actual).to.equal(expectOutput);
    });

    it('shoud return false with mixed elements', () => {
        let arr = ['1', '2', '2', 1];
        let expectOutput = false;

        let actual = isSymmetric(arr);

        expect(actual).to.equal(expectOutput);
    });
})