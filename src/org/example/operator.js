/**
 * 
 */
import Exception from './exception';

export default class Operator {


    constructor() {

    }

    static get ADD() {
        return '+';
    }

    static get MINUS() {
        return '-';
    }

    static get MULTIPLE() {
        return '*';
    }

    static get DIVIDE() {
        return '/';
    }

    static get SQR() {
        return '^2';
    }

    add(num1, num2) {
        return ((num1) + (num2));
    }

    minus(num1, num2) {
        if (num1 < 0 && num2 < 0) {
            return ((num1) + (num2));
        } else if (num2 < 0) {
            return ((num1) + (-1 * num2));
        } else {
            return ((num1) - (num2));
        }
    }

    multiple(num1, num2) {
        return ((num1) * (num2));
    }

    divide(num1, num2) {
        if (0 == num2) {
            throw new Exception('Division By Zero');
        }
        return ((num1) / (num2));
    }

    sqr(num1) {
        return Math.pow(num1, 2);
    }

}