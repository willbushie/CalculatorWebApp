/**
 * ## Calculator Class
 * 
 * The calculator functions from this class.
 * 
 */
class Calculator {  
    constructor() {
        /* setting class variables */
        let curr_highlighted_operator = null;
        
        /* number & function buttons */
        const btn_numpad_0 = new NumberButton('btn_numpad_0',0);
        const btn_numpad_1 = new NumberButton('btn_numpad_1',1);
        const btn_numpad_2 = new NumberButton('btn_numpad_2',2);
        const btn_numpad_3 = new NumberButton('btn_numpad_3',3);
        const btn_numpad_4 = new NumberButton('btn_numpad_4',4);
        const btn_numpad_5 = new NumberButton('btn_numpad_5',5);
        const btn_numpad_6 = new NumberButton('btn_numpad_6',6);
        const btn_numpad_7 = new NumberButton('btn_numpad_7',7);
        const btn_numpad_8 = new NumberButton('btn_numpad_8',8);
        const btn_numpad_9 = new NumberButton('btn_numpad_9',9);
        const btn_numpad_div = new FunctionButton('function-div','division');
        const btn_numpad_mul = new FunctionButton('function-mul','multiplication');
        const btn_numpad_sub = new FunctionButton('function-min','subtraction');
        const btn_numpad_add = new FunctionButton('function-add','addition');
        const btn_numpad_equ = new FunctionButton('function-equ','equals');
        /* operation buttons */
        const btn_numpad_back = new OperationButton('operation-backspace');
        const btn_numpad_clear = new OperationButton('operation-clear');
    }


}

/**
 * ## Screen Class
 * 
 * This class shows the screen of the calculator. 
 */
class Screen {
    constructor() {
        this.pieces = [];
        this.operations = [];
    }

    addPiece(piece, operation) {
        this.pieces.push(piece);
        this.operations.push(operation);
    }

    clear() {
        this.pieces = [];
        this.operations = [];
    }

    getAll() {
        return {'pieces':this.pieces,'operations':this.operations};
    }

    operate() {}
}


/**
 * ## Button Class
 * 
 * This class is inherited by all calculator buttons.
 * 
 * @param {string} element_id 
 */
class Button {
    constructor(element_id) {
        this.btn = document.getElementById(element_id);
    }
}


/**
 * ## Number Button Class
 * 
 * This class is for all number buttons. 
 * 
 * @param {string} element_id
 * @param {int} val
 */
class NumberButton extends Button {
    constructor(element_id,val) {
        super(element_id);
        this.val = val;
    }
}


/**
 * ## Function Button Class
 * 
 * This class is for the operators ('÷', 'x', '-', '+', '=').
 * 
 * @param {string} element_id
 * @param {string} funct
 */
class FunctionButton extends Button {
    constructor(element_id,funct) {
        super(element_id);
        this.funct = funct;
    }

    buttonPress() {
        this.highlightButton();
        return this.funct;
    }

    highlightButton() {
        this.btn.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
    }

    unhighlight() {
        this.btn.style.backgroundColor = 'rgb(243, 164, 28)'
    }
}


/**
 * ## Operation Button Class
 * 
 * This class is for other operations ('C', 'del')
 * 
 * @param {string} element_id
 * @param {string} operation
 */
class OperationButton extends Button {
    constructor(element_id,operation) {
        super(element_id);
        this.operation = operation;
    }
}


/* create new calculator instance */
const calc = new Calculator();