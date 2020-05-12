

export default class Exception {


    constructor(message) {
        this.prototype = Object.create(Error.prototype);
        const error = new Error(message);
        return error;
    }
}
