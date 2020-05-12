import Calculator from './calculator';
import Operator from './operator';

export default class Simple extends Calculator {
    /*private*/
    operator = {};
    result = 0.0;

    constructor(){       
        super();
        this.operator = new Operator();
    }

    operate(op, firts, second){
        super.operate();
        
    }




}