/**
 * 
 */
import { notEqual, equal } from 'assert';
import { expect } from 'chai';
import { should } from 'chai';

import Simple from '../src/org/example/simple';
import Operator from '../src/org/example/operator';
import Exception from '../src/org/example/exception';

//const should = require('chai').should();


before('Setting up Once', function () {
    // runs once before the first test in this block
});

after('Teardown Once', function () {
    // runs once after the last test in this block
});


/**
 * 
 */
beforeEach('Setting up', () => {
    // runs before each test in this block    
});

/**
 * 
 */
afterEach('Teardown', () => {
    // runs after each test in this block

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

/**
 * 
 */
describe('Simple Calculator Operation Test', () => {

    const calculator = new Simple();
    it('the sum of 1 and 2 must be 3', () => {
        let result = calculator.operate(Operator.ADD, 1, 2);
        equal(result, 1 + 2);
    });

    it('the sum of 2 and 1 must be 3', () => {
        let result = calculator.operate(Operator.ADD, 2, 1);
        equal(result, 2 + 1);
    });

    it('the difference of 10 and 7 must be 3', () => {
        let result = calculator.operate(Operator.MINUS, 10, 7);
        equal(result, 10 - 7);
        notEqual(result, -3);
    });

    it('the difference of 7 and -10 must be -3', () => {
        let result = calculator.operate(Operator.MINUS, 7, 10);
        equal(result, 7 - 10);
        notEqual(result, 3);
    });

    it('the difference of -7 and -10 must be -17', () => {
        let result = calculator.operate(Operator.MINUS, -7, -10);
        equal(result, -17);
    });

    /**
     * TODO nasil Test Edebiliriz Ogren!    
    it('catching thrown errors', () => {
        expect(() => calculator.operate(Operator.DIVIDE, 0, 1)).to.throw();
    });
    */
});