// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Tests written by Team Four", () => {
    describe("Error Handling", () => {
        it("Should return false if the alphabet is not exactly 26 characters long", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnt";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
        it("Should return false if the substitution alphabet is missing", () => {
            const input = "thinkful";
            const actual = substitution(input);
            expect(actual).to.be.false;
        });
        it("Returns false if there are any duplicate characters in the given alphabet", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibee";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("Encoding Tests", () => {
        it("Correctly encodes the given phrase, based on the alphabet given to the function", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "jrufscpw";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Maintains spaces in the message", () => {
            const input = "think ful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "jrufs cpw";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Ignores capital letters", () => {
            const input = "Thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "jrufscpw";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should work with any kind of key with unique characters", () => {
            const input = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "y&ii$r&";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding Tests", () => {
        it("Correctly decodes the given phrase, based on the alphabet given to the function", () => {
            const expected = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const input = "jrufscpw";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Maintains spaces in the message", () => {
            const expected = "think ful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const input = "jrufs cpw";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Ignores capital letters", () => {
            const expected = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const input = "Jrufscpw";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Should work with any kind of key with unique characters", () => {
            const expected = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const input = "y&ii$r&";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
    });
});