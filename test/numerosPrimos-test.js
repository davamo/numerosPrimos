var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var numerosPrimos = require("../numerosPrimos");

describe("testing", () => {
  describe("Check numerosPrimos(7) ", () => {
    it("return value : 7, 5, 3, 2", () => {
      result = numerosPrimos.addTest(7);
      expect(result).to.eql([7, 5, 3, 2]); 
    });
  });
});

describe("testing", () => {
  describe("Check numerosPrimos(15)", () => {
    it("return value :  13, 11, 7, 5, 3, 2", () => {
      result = numerosPrimos.addTest(15);
      expect(result).to.eql([13, 11, 7, 5, 3, 2]); 
    });
  });
});
