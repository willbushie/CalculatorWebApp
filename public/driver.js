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
        let left_operand = '';
        let right_operand = '';
        let screen_output = '';
        /* setting up all calculator buttons */
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
        const btn_numpad_div = new OperatorButton('operation-div','division');
        const btn_numpad_mul = new OperatorButton('operation-mul','multiplication');
        const btn_numpad_sub = new OperatorButton('operation-min','subtraction');
        const btn_numpad_add = new OperatorButton('operation-add','addition');
    }


}


class Button {
    /**
     * ## Button Class
     * 
     * This class is inherited by all calculator buttons.
     * 
     * @param {string} element_id 
     */
    constructor(element_id) {
        this.btn = document.getElementById(element_id);
    }
}


class NumberButton extends Button {
    /**
     * ## Number Button Class
     * 
     * This class is for all number buttons. 
     * 
     * @param {string} element_id
     * @param {int} val
     */
    constructor(element_id,val) {
        super(element_id);
        this.val = val;
    }
}


class OperatorButton extends Button {
    /**
     * ## Operator Button Class
     * 
     * This class is for the operators ('÷', 'x', '-', '+').
     * 
     * @param {string} element_id
     * @param {string} operation
     */
    constructor(element_id,operation) {
        super(element_id);
        this.operation = operation;
    }

    buttonPress() {
        this.highlightButton();
        return this.operation;
    }

    highlightButton() {
        this.btn.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
    }

    unhighlight() {
        this.btn.style.backgroundColor = 'rgb(243, 164, 28)'
    }
}

/* create new calculator instance */
const calc = new Calculator();