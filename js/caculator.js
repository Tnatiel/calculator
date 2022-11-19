

let currentValue = 0
let firstOperand = ''
let secondOperand = ''
let currentOperator = ''

const btns = document.getElementsByClassName('btns');

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener('click', parseKey)
}


// CHECKS INPUT TYPE

function type(input_key) {
    let opers = '+-/x';
    if (opers.indexOf(input_key) > -1) {
        return 'operator';
    } else if (input_key == '=') {
        return 'eval';
    } else {
        return 'number';
    }
    
}

function parseKey(vals) {
    let l = vals.length;
    for (let i = 0; i < l; i++) {
        if (type(vals[i]) == 'number') {
            if (currentOperator == '') {
                firstOperand += vals[i];
            } else {
                secondOperand += vals[i];
            } 
        } else {
            if (firstOperand !== '' && secondOperand !== '') {
                cal();
                currentOperator = vals[i]
            } else {
                currentOperator = vals[i]
            }
        }
    }
}

let a = document.querySelector(".eq")
a.addEventListener('click', () => {
    let curRes = values.join();
    parseKey(values)
    cal()
    console.log(firstOperand)
    console.log(secondOperand)
    console.log(currentOperator)
    alert(eval(firstOperand + currentOperator + secondOperand));


function cal(o1, o2, a) {

    if (a == '+') {
        return eval(o1) + eval(o2)
    }

    else if (a == '-') {
        return eval(o1) - eval(o2)
    }

    else if (a =='*') {
        return eval(o1) * eval(o2)
    }

    else if (a == '/') {
        return eval(o1) / eval(o2)
    }    
}

// const CalState = {
//     cur_val: 0,
//     first_op: '',
//     second_op: '',
//     action: '',
    
//     parseKey: 


