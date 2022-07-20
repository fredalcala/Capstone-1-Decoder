// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Function tests written by Team 4", () => {
    describe("Encoding Handling", () => {
        it("Output should be a string", () => {
            const input = "thinkful";
            const actual = polybius(input);
            expect(actual).to.be.a("string");
        });
        it("Should maintain spaces thorughout", () => {
            const input = "hello world";
            const expected = "3251131343 2543241341";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        it("Should ignore capital letters", () => {
            const input = "Hello";
            const expected = "3251131343";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        it("Should have letters I and J sharing a space and both convert to 42", () => {
            const input = "thinkful";
            const expected = "4432423352125413";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding Handling", () => {
        it("Should decode a message by translating each pair of numbers into a letter", () => {
            const input = "23513434112251";
            const actual = polybius(input, false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it("Should have letters I and J share a space and should both result from input 42", () => {
            const input = "443242423352125413";
            const actual = polybius(input, false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("Should return false if the number of characters in the input is not an even number", () => {
            const input = "22334455 112";
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        });
        it("Should maintain spaces throughout", () => {
            const expected = "hello world";
            const input = "3251131343 2543241341";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });
    });
});