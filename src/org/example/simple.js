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
    params = {};

    /**
     * 
     */
    constructor(params) {
        super(params);        
        this.params = Object.assign({}, this.defaultParams, params);
        this.init();
    }

    static create(params) {
        super.create(params);
        const _calculator = new Simple(params);
        return _calculator;
    }

    /**
     * 
     * @param {*} op 
     * @param {*} first 
     * @param {*} second 
     */
    operate(op, first, second=0) {
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
                this.result = this.operator.sqr(first);

        }
        return this.result;
    }

    init() {
        this.operator = new Operator();
    }

    destroy() {

    }

}