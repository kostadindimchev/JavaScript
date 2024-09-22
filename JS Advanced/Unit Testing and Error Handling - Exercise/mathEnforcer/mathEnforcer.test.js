const mathEnforcer = require('./mathEnforcer.js');
const { assert } = require('chai');

describe('Math Enforcer', () => {
    describe('addFive', () => {
        it('should return undefined if param is not a numbers', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
        });

        it('should work correct with number param', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('should work correct with negative number', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('should work correct with floating-point numbers', () => {
            assert.equal(mathEnforcer.addFive(5.01), 10.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined if param is not a numbers', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
        });

        it('should work correct with number param', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });

        it('should work correct with negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });

        it('should work correct with floating-point numbers', () => {
            assert.equal(mathEnforcer.subtractTen(15.01), 5.01);
        });
    });

    describe('sum', () => {
        it('should work correct with numbers params', () => {
            assert.equal(mathEnforcer.sum(5, 10), 15);
        });

        it('should work correct with negative numbers params', () => {
            assert.equal(mathEnforcer.sum(-5, -10), -15);
        });

        it('should work correct with floating-point numbers', () => {
            assert.equal(mathEnforcer.sum(5.01, 10.01), 15.02);
        });

        it('should return undefined if first param is not a number', () => {
            assert.equal(mathEnforcer.sum('5', 10), undefined);
        });

        it('should return undefined if second param is not a number', () => {
            assert.equal(mathEnforcer.sum(5, '10'), undefined);
        });

        it('should return undefined if both params are not a numbers', () => {
            assert.equal(mathEnforcer.sum('5', '10'), undefined);
        });
    });
})