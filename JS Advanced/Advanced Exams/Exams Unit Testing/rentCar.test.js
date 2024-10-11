let rentCar = require('./rentCar.js');
const {expect} = require('chai');

describe('rentCar', () => {
    describe('searchCar', () => {
        it('Invalid shop input!', () => {
            expect(()=>rentCar.searchCar('bmw', 'bmw')).to.throw('Invalid input!');
            expect(()=>rentCar.searchCar(1, 'bmw')).to.throw('Invalid input!');
            expect(()=>rentCar.searchCar(undefined, 'bmw')).to.throw('Invalid input!');
        })

        it('Invalid model input!', () => {
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], [])).to.throw('Invalid input!');
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1)).to.throw('Invalid input!');
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)).to.throw('Invalid input!');
        })

        it('There are no such models in the catalog!', () => {
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Opel')).to.throw('There are no such models in the catalog!');
            expect(()=>rentCar.searchCar([], 'Mazda')).to.throw('There are no such models in the catalog!');
        })

        it('Perfect case', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`)
        })
    })

    describe('calculatePriceOfCar', () => {
        it('Invalid model input', () => {
            expect(()=>rentCar.calculatePriceOfCar(1, 1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar([], 1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(undefined, 1)).to.throw('Invalid input!');
        })

        it('Invalid days input', () => {
            expect(()=>rentCar.calculatePriceOfCar('Opel', '1')).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('Opel', [])).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('Opel', undefined)).to.throw('Invalid input!');
        })

        it('Perfect case', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal(`You choose Audi and it will cost $72!`)
        })

        it('No such model in the catalog!', () => {
            expect(()=>rentCar.calculatePriceOfCar('Lada', 1)).to.throw('No such model in the catalog!')
        })
    })

    describe('checkBudget', () => {
        it('Invalid costPerDay input', () => {
            expect(()=>rentCar.checkBudget('1', 1, 1)).to.throw('Invalid input!');
            expect(()=>rentCar.checkBudget(undefined, 1, 1)).to.throw('Invalid input!');
            expect(()=>rentCar.checkBudget([], 1, 1)).to.throw('Invalid input!');
        })

        it('Invalid days input', () => {
            expect(()=>rentCar.checkBudget(1, '1', 1)).to.throw('Invalid input!');
            expect(()=>rentCar.checkBudget(1, [], 1)).to.throw('Invalid input!');
            expect(()=>rentCar.checkBudget(1, undefined, 1)).to.throw('Invalid input!');
        })

        it('Invalid budget input', () => {
            expect(()=>rentCar.checkBudget(1, 1, '1')).to.throw('Invalid input!');
            expect(()=>rentCar.checkBudget(1, 1, [])).to.throw('Invalid input!');
            expect(()=>rentCar.checkBudget(1, 1, undefined)).to.throw('Invalid input!');
        })

        it('You rent a car!', () => {
            expect(rentCar.checkBudget(20, 3, 75)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(20, 3, 60)).to.equal(`You rent a car!`);
        })

        it('You need a bigger budget!', () => {
            expect(rentCar.checkBudget(20, 3, 50)).to.equal('You need a bigger budget!');
        })
    })
})