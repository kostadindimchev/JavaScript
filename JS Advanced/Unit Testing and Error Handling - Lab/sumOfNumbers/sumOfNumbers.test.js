const expect = require('chai').expect;
const sum = require('./sumOfNumbers');

describe('Sum Of Numbers', () => {
    it('should return the sum of the array', () => {
        let numbers = [1, 2, 3, 4];
        let exprectedSum = 10;

        let actual = sum(numbers);

        expect(actual).to.equal(exprectedSum);
    });

    it('should return the sum of the array with negative number', () => {
        let numbers = [1, 2, 3, 4, -5];
        let exprectedSum = 5;

        let actual = sum(numbers);

        expect(actual).to.equal(exprectedSum);
    });

    it('should return the sum of the array with zero', () => {
        let numbers = [1, 2, 3, 4, 0];
        let exprectedSum = 10;

        let actual = sum(numbers);

        expect(actual).to.equal(exprectedSum);
    }); 
});