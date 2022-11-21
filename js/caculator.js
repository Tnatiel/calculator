



// const calState = {
//     currentValue: 0,
//     firstOperand: '',
//     secondOperand: '',
//     secondOperand: '',
// }

// class Calculator {
//     constructor(dataStr){
//         this.firstOperand = '';
//         this.secondOperand = '';
//         this.action = '';
//         this.currentValue = 0;
//     }

//     cType(key) {
//         let opers = '+-/x';
//         if (opers.indexOf(key) > -1) {
//             return 'operator';
//         } else if (key == '=') {
//             return 'eval';
//         } else {
//             return 'number';
//         }
//     }

//     cParseKey(dataStr) {
//         for (let i = 0; i < dataStr.length; i++) {
//             if (this.cType(dataStr[i]) == 'number') {
//                 if (this.currentOperator == '') {
//                     this.firstOperand += dataStr[i];
//                 } else {
//                     this.secondOperand += dataStr[i];
//                 } 
//             } else {
//                 if (this.firstOperand !== '' && this.secondOperand !== '') {
//                     const res = eval(this.firstOperand + this.action + this.secondOperand);
//                     this.firstOperand = res;
//                     this.action = dataStr[i];
//                 } else if (i - 1 >= 0 && cType(dataStr[i - 1]) == 'operator') {
//                     this.action = dataStr[i];
//                 } else {
//                     this.action = dataStr[i]
//                 }
//             }
//         }
//     }
// }


const byId = document.getElementById.bind(document);
const byClass = document.getElementsByClassName.bind(document);

let currentValue = 0;
let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let evalMode = 'Reg';

// const btns = document.getElementsByClassName('btns');

// for (let i = 0; i < btns.length; i++) {
//     const btn = btns[i];
//     btn.addEventListener('click', parseKey)
// }


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
                const res = eval(this.firstOperand + this.action + this.secondOperand);
                console.log(res);
                firstOperand = res;
                currentValue = res;
                currentOperator = vals[i]
            } else {
                currentOperator = vals[i]
            }
        }
    }
    console.log('first op:', firstOperand)
    console.log('second op',secondOperand)
    console.log('cur oper:', currentOperator)
    console.log('cur val:', currentValue)
}

function clearData() {
    currentValue = 0
    firstOperand = ''
    secondOperand = ''
    currentOperator = ''
    values = []
}

function updateData() {
    
}

// attach events

// OPER BTNS

const operatorBtns = byClass('opers')

for (let i = 0; i < operatorBtns.length; i++) {
    const operBtn = operatorBtns[i];
    operBtn.addEventListener('click', () => {
        parseKey(values);
        values = []
    })
}


// equal

let equalBtn = document.querySelector(".eq")
equalBtn.addEventListener('click', () => {
    parseKey(values);
    let res = eval(firstOperand + currentOperator + secondOperand);
    alert(eval(firstOperand + currentOperator + secondOperand));
    alert(typeof(res))
    clearData();
})

//  all clear
byId('c').addEventListener('click', clearData);

//  return 
byId('return').addEventListener('click', () => {
    values.pop()
    console.log(values)
})





