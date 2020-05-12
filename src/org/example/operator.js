import Exception from './exception';


export default class Operator { 
    /*
    const PLUS = '+';
    const MINUS = '-';    
    const MULTIPLE = '*';
    const DIVIDE = '/';
    */

    constructor(){

    }

    add(num1,num2) {
        return (num1 + num2);
    }

    minus(num1,num2) { 
        return (num1-num2);
    }

    multiple(num1, num2) {
        return (num1*num2);
    }

    divide(num1, num2) {
        if( 0 == num2 ) {
            throw new Exception('Division By Zero');
        }
        return (num1/num2);
    }

    
}