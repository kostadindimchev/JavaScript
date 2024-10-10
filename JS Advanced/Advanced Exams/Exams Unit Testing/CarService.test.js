let carService = require('./CarService.js');
const {expect} = require('chai');

describe("carService", () => {
    describe("isItExpensive", () => {
        it("it is expensive with engine", () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
        });
        it("it is expensive with transmission", () => {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
        });
        it("its not expensive", () => {
            expect(carService.isItExpensive('Filters')).to.equal(`The overall price will be a bit cheaper`)
        })
     });

     describe("discount", () => {
        it("with 2 parts only", () => {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount')
            expect(carService.discount(0, 10)).to.equal('You cannot apply a discount');
            expect(carService.discount(-1, 10)).to.equal('You cannot apply a discount');
        })
        it("15% when numberOfParts is higher than 2 and smaller or equal to 7", () => {
            expect(carService.discount(5, 50)).to.equal(`Discount applied! You saved 7.5$`)
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
        })
        it("30% when numberOfParts is higher than 7", () => {
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`)
        })
        it("Invalid input both", () => {
            expect(()=>carService.discount('1', '1')).to.throw("Invalid input")
        })
        it("Invalid input first", () => {
            expect(()=>carService.discount('1', 1)).to.throw("Invalid input")
            expect(()=>carService.discount([], 1)).to.throw("Invalid input")
            expect(()=>carService.discount(undefined, 1)).to.throw("Invalid input")
        })
        it("Invalid input second", () => {
            expect(()=>carService.discount(1, '1')).to.throw("Invalid input")
            expect(()=>carService.discount(1, [])).to.throw("Invalid input")
            expect(()=>carService.discount(1, undefined)).to.throw("Invalid input")
        })
     })

     describe("partsToBuy", () => {
        it("both invalid inputs", () => {
            expect(()=>carService.partsToBuy(1, '1')).to.throw("Invalid input")
        })
        it("first invalid input", () => {
            expect(()=>carService.partsToBuy(1, [])).to.throw("Invalid input")
            expect(()=>carService.partsToBuy('test', [])).to.throw("Invalid input")
            expect(()=>carService.partsToBuy(undefined, [])).to.throw("Invalid input")
        })
        it("second invalid input", () => {
            expect(()=>carService.partsToBuy([], 1)).to.throw("Invalid input")
            expect(()=>carService.partsToBuy([], 'test')).to.throw("Invalid input")
            expect(()=>carService.partsToBuy([], undefined)).to.throw("Invalid input")
        })
        it("parts catalog is empty", () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0)
        })
        it("works", () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve", "injectors" ])).to.equal(145)
        })
        it('works with two needed parts', () => {
            expect(carService.partsToBuy(
              [
                { part: 'Test1', price: 1 },
                { part: 'Test2', price: 2 },
                { part: 'Test3', price: 3 }
              ],
              ['Test1', 'Test2'])
            ).to.equal(3);
          });

     })
});
