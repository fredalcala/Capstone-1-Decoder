// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Team Four Caesar tests", () => {
    describe("Error handling", () => {
        it("Should return false if the shift is 0 or not present", () => {
          const input = "team four";
          const shift = 0;
          const actual = caesar(input, shift, encode = true);
    
          expect(actual).to.be.false;
        });
        it("Should return false if the shift is above 25", () => {
            const input = "team four";
            const shift = 26;
            const actual = caesar(input, shift, encode = true);
      
            expect(actual).to.be.false;
          });
          it("Should return false if the shift is less than -25", () => {
            const input = "team four";
            const shift = -26;
            const actual = caesar(input, shift, encode = true);
      
            expect(actual).to.be.false;
          });
});
    describe("Encoding", () => {
        it("Should maintain spaces throughout", () => {
            const shift = 2;
            const input = "team four";
            const expected = "vgco hqwt";
            const actual = caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
        it("Should handle nonalphabetical symbols", () => {
            const shift = 2;
            const input = "team four!";
            const expected = "vgco hqwt!";
            const actual = caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
        it("Should ignore capital letters", () => {
            const shift = 2;
            const input = "Team Four";
            const expected = "vgco hqwt";
            const actual = caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
        it("Should handle shifts that go off of the alphabet and loop back around", () => {
            const shift = 2;
            const input = "zebra";
            const expected = "bgdtc";
            const actual = caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
        it("Should handle a shift to the left", () => {
            const shift = -2;
            const input = "team four";
            const expected = "rcyk dmsp";
            const actual = caesar(input, shift, endoce = true);
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding", () => {
        it("Should maintain spaces throughout", () => {
            const shift = 2;
            const expected = "team four";
            const input = "vgco hqwt";
            const actual = caesar(input, shift, encode = false);
            expect(actual).to.equal(expected);
        });
        it("Should handle nonalphabetical symbols", () => {
            const shift = 2;
            const expected = "team four!";
            const input = "vgco hqwt!";
            const actual = caesar(input, shift, encode = false);
            expect(actual).to.equal(expected);
        });
        it("Should ignore capital letters", () => {
            const shift = 2;
            const expected = "team four";
            const input = "Vgco Hqwt";
            const actual = caesar(input, shift, encode = false);
            expect(actual).to.equal(expected);
        });
        it("Should handle shifts that go off of the alphabet and loop back around", () => {
            const shift = 2;
            const expected = "zebra";
            const input = "bgdtc";
            const actual = caesar(input, shift, encode = false);
            expect(actual).to.equal(expected);
        });
        it("Should handle a shift to the left", () => {
            const shift = -2;
            const expected = "team four";
            const input = "rcyk dmsp";
            const actual = caesar(input, shift, endoce = false);
            expect(actual).to.equal(expected);
        });
    });
});