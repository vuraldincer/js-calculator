'use strict';

const assert = chai.assert;
const expect = chai.const;
const should = chai.should;
const notEqual = assert.notEqual;
const equal = assert.equal;
const calculator = new Simple();

let container = document.getElementById("container");

before('Setting up Once', function () {
    container.style.width = '100%';
    container.style.verticalAlign = 'top';
    container.style.textAlign = 'center';
    container.innerHTML = '<h1>HELLO</h1>';
    console.log('Setting up....');
});

after('Teardown Once', function () {
    // runs once after the last test in this block
    console.log('Teardown');
});

/**
 * 
 */
describe('Dummy String Test', () => {
    it('should return number of charachters in a string', () => {
        notEqual("Hello".length, 4);
    });

    it('should return first charachter of the string', () => {
        equal("Hello".charAt(0), 'H');
    });
});

describe('Simple Calculator Operation Test', () => {

    //const calculator = Simple();
    it('the sum of 1 and 2 must be 3', () => {
        let result = calculator.operate('+', 1, 2);
        equal(result, 1 + 2);
    });

    it('the sum of 2 and 1 must be 3', () => {
        let result = calculator.operate('+', 2, 1);
        equal(result, 2 + 1);
    });

    it('the difference of 10 and 7 must be 3', () => {
        let result = calculator.operate('-', 10, 7);
        equal(result, 10 - 7);
        notEqual(result, -3);
    });

    it('the difference of 7 and -10 must be -3', () => {
        let result = calculator.operate('-', 7, 10);
        equal(result, 7 - 10);
        notEqual(result, 3);
    });

    it('the difference of -7 and -10 must be -17', () => {
        let result = calculator.operate('-', -7, -10);
        equal(result, -17);
    });

    /**
     * TODO nasil Test Edebiliriz Ogren!    
    it('catching thrown errors', () => {
        expect(() => calculator.operate(Operator.DIVIDE, 0, 1)).to.throw();
    });
    */
});