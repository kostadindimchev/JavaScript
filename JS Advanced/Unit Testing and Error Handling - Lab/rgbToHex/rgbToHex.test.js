const expect = require('chai').expect;
const rgbToHexColor = require('./rgbToHex');

describe('rgb to hex', () => {
    it('converts to black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it('converts to white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it('is out of upper range', () => {
        expect(rgbToHexColor(256,257,258)).to.be.undefined;
    });

    it('is out of bottom range', () => {
        expect(rgbToHexColor(-1, -2, -3)).to.be.undefined;
    });
    
    it('have invalid inputs', () => {
        expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
    });
    
    it('contains floating numbers', () => {
        expect(rgbToHexColor(1.1, 1.2, 2.2)).to.be.undefined;
    });
    
    it('return undefined for missing inputs', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
})
