var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var numerosPrimos = require('../numerosPrimos');

describe('testin assert function', function(){
    describe('Chech numerosPrimos function', function(){
        it('Check return value : 7  : ', function(){
            result = numerosPrimos.addTest(7);
             assert.equal(result, [7, 5, 3, 2]); 
            //assert.isAtLeast(7, 5, 3, 2); 
            //expect(result).to.equal([7, 5, 3, 2]);
            assert.isOk(result, result);

            //assert(result !== [7, 5, 3, 2], result);

        });
    });
})

describe('testin assert function', function(){
    describe('Chech numerosPrimos function', function(){
        it('Check return value : 15 : ', function(){
            result = numerosPrimos.addTest(15);
             assert.equal(result, [ 13, 11, 7, 5, 3, 2 ]); 
            //assert.isAtLeast(7, 5, 3, 2); 
            //expect(result).to.equal([7, 5, 3, 2]);
            assert.isOk(result, result);

            //assert(result !== [7, 5, 3, 2], result);

        });
    });
})