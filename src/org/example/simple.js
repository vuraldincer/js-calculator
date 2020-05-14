/**
 * 
 */
import Calculator from './calculator';
import Operator from './operator';

/**
 * Simple Operation
 */
export default class Simple extends Calculator {
    /*private*/
    operator = {};
    result = 0.0;


    /**
     * 
     */
    constructor() {
        super();
        this.operator = new Operator();
    }

    /**
     * 
     * @param {*} op 
     * @param {*} first 
     * @param {*} second 
     */
    operate(op, first=0, second=0) {
        super.operate(op, first, second);
        switch (op) {
            case '+':
                this.result = this.operator.add(first, second);
                break;
            case '-':
                this.result = this.operator.minus(first, second);
                break;
            case '*':
                this.result = this.operator.multiple(first, second);
                break;
            case '/':
                this.result = this.operator.divide(first, second);
                break;       
            case '^2':
                this.result = this.operator.sqr(first)

        }
        return this.result;
    }

}