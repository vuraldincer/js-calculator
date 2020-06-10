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
    _operator = {};
    _result = 0.0;
    _params = {};

    /**
     * 
     */
    constructor(params) {
        super(params);
        this._params = Object.assign({}, this.defaultParams, params);
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
    operate(op, first, second = 0) {
        super.operate(op, first, second);
        switch (op) {
            case '+':
                this._result = this._operator.add(first, second);
                break;
            case '-':
                this._result = this._operator.minus(first, second);
                break;
            case '*':
                this._result = this._operator.multiple(first, second);
                break;
            case '/':
                this._result = this._operator.divide(first, second);
                break;
            case '^2':
                this._result = this._operator.sqr(first);

        }
        return this._result;
    }

    /**
     * 
     */
    init() {
        this._operator = new Operator();
    }

    /**
     * 
     */
    destroy() {

    }
    /**
     * 
     */
    operator(){
        return this._operator;
    }
    
}