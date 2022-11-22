var Calculator1 = /** @class */ (function () {
    function Calculator1() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = '';
        this.state = 'Reg';
        this.screen = byId('screen');
    }
    Calculator1.prototype.updateScreen = function (key) {
        var temp = byId('screen');
        temp.innerHTML += "".concat(key);
    };
    Calculator1.prototype.parseNum = function (num) {
        if (this.state === 'Reg') {
            var lastChar = this.screen.innerHTML.slice(-1);
            var numStr = '1234567890';
            if (num === '.' && numStr.includes(lastChar)) {
                if (this.firstOperand !== '' && this.firstOperand.includes(num) === false) {
                    this.firstOperand += num;
                    this.updateScreen(num);
                }
                else if (this.secondOperand !== '' && this.secondOperand.includes(num) === false) {
                    this.secondOperand += num;
                    this.updateScreen(num);
                }
                else {
                    return;
                }
            }
            else if (this.action === '' && num !== '.') {
                this.firstOperand += num;
                this.updateScreen(num);
            }
            else if (num !== '.') {
                this.secondOperand += num;
                this.updateScreen(num);
            }
        }
    };
    Calculator1.prototype.parseAction = function (oper) {
        if (this.state === 'Reg') {
            var lastChar = this.screen.innerHTML.slice(-1);
            if (lastChar === '' || lastChar == '.') {
                return;
            }
            else if ('+-/*'.includes(lastChar)) {
                this.screen.innerHTML = this.screen.innerHTML.slice(0, -1);
                this.updateScreen(oper);
            }
            else if (this.firstOperand !== '' && this.secondOperand !== '') {
                console.log("first op: ".concat(this.firstOperand, " sec op: ").concat(this.secondOperand));
                this.calculate();
                byId('screen').innerHTML = this.lastCalculated;
            }
            else {
                this.action = oper;
                this.updateScreen(this.action);
            }
        }
    };
    Calculator1.prototype.calculate = function () {
        if (this.state === 'Reg') {
            var res = eval(this.firstOperand + this.action + this.secondOperand);
            this.lastCalculated = res;
            this.firstOperand = res;
            this.action = res;
        }
    };
    return Calculator1;
}());
// SHORTCUTS
var byId = document.getElementById.bind(document);
var byClass = document.getElementsByClassName.bind(document);
// MY BUTTONS
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// NUMBER BUTTONS
var numBtns = byClass('btn-num');
var values = [];
var operBtns = byClass('opers');
var cal = new Calculator1();
// INFO FUCNTION
// const infoBtn: HTMLButtonElement = byId('info')
byId('info').addEventListener('click', function () {
    alert("        Developers name: Natiel\n        Calculator version: 1\n        Description: A web calculator based on javascript, scss and html\n    ");
});
//  LIGHTS 
byId('mode').addEventListener('click', function () {
    var screen = byId('screen');
    if (screen.style.backgroundColor !== 'white') {
        // console.log(typeof(byId('wrap').classList))
        screen.style.backgroundColor = 'white';
        byId('mode').classList.remove('light-on');
    }
    else {
        if (byId('body').classList.contains('dark-body')) {
            screen.style.backgroundColor = '#3a5137';
        }
        else {
            screen.style.backgroundColor = '#c0ffb8';
            byId('mode').classList.add('light-on');
        }
    }
});
var _loop_1 = function (i) {
    var numBtn = numBtns[i];
    numBtn.addEventListener('click', function () {
        console.log("screen text: ".concat(byId('screen').innerHTML));
        console.log("last val: ".concat(cal.lastCalculated));
        if (byId('screen').innerHTML == cal.lastCalculated) {
            byId('screen').innerHTML = '';
        }
        cal.parseNum(numBtn.id);
    });
};
// CONFIGUE PAGE
// function getParams(url: string): any {
//     let params = new searc (url).searchParams;
//     let relvantData = [params.get('font'), params.get('color'), params.get('mode')] ;
//     console.log(relvantData);
// }
// POPUP PAGE
// const dBase = localStorage.setItem('color', 'font')
// byId('settings').addEventListener('click', getParams, () => {
//     // let params: string =  'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200'
//     // window.open('http://127.0.0.1:5501/config.html', 'config', params)
//     // window.open('/config.html');
//     // getParams(window.location.href);
// // GET FORM DATA
// // console.log(document.querySelector('.sub-btn'));
//     // const dataUrl: string = window.location.href;
//     // console.log(dataUrl);
// let params = new URLSearchParams('/config.html')
// console.log(params)
// const daForm: HTMLFormElement | null = document.getElementById('config-form');
// const configData: FormData = new FormData(daForm);
// push values listener
for (var i = 0; i < numBtns.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (j) {
    var operBtn = operBtns[j];
    operBtn.addEventListener('click', function () {
        cal.parseAction(operBtn.id);
    });
};
for (var j = 0; j < operBtns.length; j++) {
    _loop_2(j);
}
byId("=").addEventListener('click', function () {
    if (cal.firstOperand !== '' && cal.action !== '' && cal.secondOperand !== '') {
        cal.calculate();
        byId('screen').innerHTML = cal.lastCalculated;
    }
});
// SCIENCE
byId('sci').addEventListener('click', displayScienceSec);
function displayScienceSec() {
    if (byId('scientific-sec').style.display === 'none' || byId('scientific-sec').style.display === '') {
        byId('scientific-sec').style.display = 'grid';
        byId('main-c').style.borderRight = 'none';
        // cal.state = 'Sci'
    }
    else {
        byId('scientific-sec').style.display = 'none';
        byId('main-c').style.borderRight = 'solid';
        // cal.state = 'Reg'
    }
    return;
}
// HISTORY
byId('history-btn').addEventListener('click', displayHistorySec);
function displayHistorySec() {
    if (byId('history-sec').style.display === 'none' || byId('history-sec').style.display === '') {
        byId('history-sec').style.display = 'grid';
        byId('main-c').style.borderLeft = 'none';
        // cal.state = 'Sci'
    }
    else {
        byId('history-sec').style.display = 'none';
        byId('main-c').style.borderLeft = 'solid';
        // cal.state = 'Reg'
    }
}
