/* Hold the numbers to operate on */
let first_num = '';
let last_num = '';
/* Hold the currently highlighted operator */
let highlighted_operation = 'none';

/* Select the calc-screen div */
const calc_screen = document.getElementById('calc-screen');

/* Get all button references */
const btn_numpad_0 = document.getElementById('numpad-0');
const btn_numpad_1 = document.getElementById('numpad-1');
const btn_numpad_2 = document.getElementById('numpad-2');
const btn_numpad_3 = document.getElementById('numpad-3');
const btn_numpad_4 = document.getElementById('numpad-4');
const btn_numpad_5 = document.getElementById('numpad-5');
const btn_numpad_6 = document.getElementById('numpad-6');
const btn_numpad_7 = document.getElementById('numpad-7');
const btn_numpad_8 = document.getElementById('numpad-8');
const btn_numpad_9 = document.getElementById('numpad-9');
const btn_numpad_clear = document.getElementById('clear');
const btn_numpad_backspace = document.getElementById('backspace');
const btn_numpad_div = document.getElementById('operation-div');
const btn_numpad_mul = document.getElementById('operation-mul');
const btn_numpad_min = document.getElementById('operation-min');
const btn_numpad_add = document.getElementById('operation-add');
const btn_numpad_equ = document.getElementById('operation-equ');

/* Adding event listeners & functionality to every calulator button */
/* number buttons */
btn_numpad_0.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '0';
});
btn_numpad_1.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '1';
});
btn_numpad_2.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '2';
});
btn_numpad_3.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '3';
});
btn_numpad_4.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '4';
});
btn_numpad_5.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '5';
});
btn_numpad_6.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '6';
});
btn_numpad_7.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '7';
});
btn_numpad_8.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '8';
});
btn_numpad_9.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    calc_screen.textContent = curr_str + '9';
});

/* clear & backspace buttons */
btn_numpad_clear.addEventListener('click', function() {
    update_highlighted_modifier('none');
    calc_screen.textContent = '';
    first_num = '';
    last_num = '';
});
btn_numpad_backspace.addEventListener('click', function() {
    let curr_str = calc_screen.textContent;
    let new_str = curr_str.slice(0,-1);
    calc_screen.textContent = new_str;
    if (last_num === '' && curr_str != '') {}
});

/* operation buttons */
btn_numpad_div.addEventListener('click', function() {
    update_highlighted_modifier('div');
    if (first_num === '') {
        let curr_str = calc_screen.textContent;
    }
    else if (first_num != '') {}
});
btn_numpad_mul.addEventListener('click', function() {
    update_highlighted_modifier('mul');
    let curr_str = calc_screen.textContent;
    
});
btn_numpad_min.addEventListener('click', function() {
    update_highlighted_modifier('min');
    let curr_str = calc_screen.textContent;
    
});
btn_numpad_add.addEventListener('click', function() {
    update_highlighted_modifier('add');
    let curr_str = calc_screen.textContent;
    
});

/* equal button - lots of error checking here */
btn_numpad_equ.addEventListener('click', function() {
    update_highlighted_modifier('none');
});

/**
 * correct the highlighted operator button
 * none     => 'none'
 * divide   => 'div'
 * multiply => 'mul'
 * subtract => 'min'
 * addition => 'add'
 */
function update_highlighted_modifier(new_modifier) {
    /* nothing highlited */
    if (highlighted_operation === 'none') {
        if (new_modifier === 'div') {
            btn_numpad_div.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
        else if (new_modifier === 'mul') {
            btn_numpad_mul.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
        else if (new_modifier === 'min') {
            btn_numpad_min.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
        else if (new_modifier === 'add') {
            btn_numpad_add.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
    }
    /* something highlighted */
    else {
        /* un highlight old button */
        if (highlighted_operation === 'div') {
            btn_numpad_div.style.backgroundColor = 'rgb(243, 164, 28)';
        }
        else if (highlighted_operation === 'mul') {
            btn_numpad_mul.style.backgroundColor = 'rgb(243, 164, 28)';
        }
        else if (highlighted_operation === 'min') {
            btn_numpad_min.style.backgroundColor = 'rgb(243, 164, 28)';
        }
        else if (highlighted_operation === 'add') {
            btn_numpad_add.style.backgroundColor = 'rgb(243, 164, 28)';
        }
        /* highlight new button */
        if (new_modifier === 'div') {
            btn_numpad_div.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
        else if (new_modifier === 'mul') {
            btn_numpad_mul.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
        else if (new_modifier === 'min') {
            btn_numpad_min.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
        else if (new_modifier === 'add') {
            btn_numpad_add.style.backgroundColor = 'rgba(243, 164, 28, 0.765)';
        }
    }
    highlighted_operation = new_modifier;
}

/* button.addEventListener('click', function() {
    button.style.backgroundColor = rgb(225, 142, 0);
    // Change the color when clicked
    // Add other JavaScript logic here if needed
  }); */