const expect = require('chai').expect;
const createCalculator = require('./addSubtract');

describe('add and subtract', () => {
    it('function get works', () => {
        const calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it('function add works', () => {
        const calculator = createCalculator();
        calculator.add(5)
        expect(calculator.get()).to.equal(5);
    });

    it('function subtract works', () => {
        const calculator = createCalculator();
        calculator.subtract(10)
        expect(calculator.get()).to.equal(-10);
    });

    it('add with invalid param', () => {
        const calculator = createCalculator();
        calculator.add('one')
        expect(calculator.get()).to.be.NaN;
    });

    it('subtract with invalid param', () => {
        const calculator = createCalculator();
        calculator.add('two')
        expect(calculator.get()).to.be.NaN;
    });
});
