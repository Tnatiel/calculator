var Calculator111 = /** @class */ (function () {
    function Calculator111() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = '';
        this.state = 'Reg';
    }
    Calculator111.prototype.updateScreen = function (key) {
        var temp = byId('screen');
        console.log("UpScr given key: ".concat(key));
        temp.innerHTML += "".concat(key);
    };
    Calculator111.prototype.parseNum = function (num) {
        if (this.state === 'Reg') {
            var lastChar = byId('screen').innerHTML.slice(-1);
            var numStr = '1234567890';
            if (this.lastCalculated == byId('screen').innerHTML) {
                this.clearData();
                this.firstOperand += num;
                this.updateScreen(num);
            }
            else if (num === '.' && numStr.includes(lastChar)) {
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
    Calculator111.prototype.parseAction = function (oper) {
        if (this.state === 'Reg') {
            var lastChar = byId('screen').innerHTML.slice(-1);
            if (lastChar === '' || lastChar == '.') {
                return;
            }
            else if ('+-/*'.includes(lastChar)) {
                byId('screen').innerHTML = byId('screen').innerHTML.slice(0, -1);
                this.action = oper;
                this.updateScreen(this.action);
            }
            else if (this.firstOperand !== '' && this.secondOperand !== '') {
                this.calculate();
                this.action = oper;
                byId('screen').innerHTML = this.lastCalculated;
            }
            else {
                this.action = oper;
                this.updateScreen(this.action);
            }
        }
    };
    Calculator111.prototype.calculate = function () {
        if (this.state === 'Reg') {
            // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
            var res = eval(this.firstOperand + this.action + this.secondOperand);
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res;
            // console.log(`fir op: ${this.firstOperand}`)
            // this.action = res;
        }
    };
    Calculator111.prototype.clearData = function () {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = '';
        byId('screen').innerHTML = '';
    };
    Calculator111.prototype.deleteLastKey = function () {
        // console.log(`inner: ${(byId('screen').innerHTML)}`);
        // console.log(`last cal: ${this.lastCalculated}`);
        // console.log(`bool: ${byId('screen').innerHTML == this.lastCalculated}`);
        var lastKey = byId('screen').innerHTML.slice(-1);
        if (byId('screen').innerHTML.length < 1 || byId('screen').innerHTML == this.lastCalculated) {
            return;
        }
        else if (this.secondOperand !== '') {
            // console.log(`fir op type: ${typeof(this.firstOperand)}`)
            // console.log(`fir op: ${this.firstOperand}`)
            this.secondOperand = this.secondOperand.slice(0, -1);
        }
        else if ('+-/*'.includes(lastKey)) {
            this.action = '';
        }
        else {
            this.firstOperand = this.firstOperand.slice(0, -1);
        }
        byId('screen').innerHTML = byId('screen').innerHTML.slice(0, -1);
    };
    return Calculator111;
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
var cal = new Calculator111();
// INFO FUCNTION
var infoBtn = byId('info');
byId('info').addEventListener('click', function () {
    alert("        Developers name: Natiel\n        Calculator version: 1\n        Description: A web calculator based on javascript, scss and html\n    ");
});
//  LIGHTS 
byId('mode').addEventListener('click', function () {
    var screen = byId('screen');
    console.log('togg');
    byId('screen').classList.toggle('light-on-screen');
    byId('mode').classList.toggle('light-on-btn');
});
// CONFIGUE PAGE
// function getParams(url: string): any {
//     let params = new searc (url).searchParams;
//     let relvantData = [params.get('font'), params.get('color'), params.get('mode')] ;
//     console.log(relvantData);
// }
// POPUP PAGE
// const dBase = localStorage.setItem('color', 'font')
byId('settings').addEventListener('click', function () {
    var params = 'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200';
    // window.open('http://127.0.0.1:5501/config.html', 'config', params)
    window.open('/config.html', 'config', params);
    ;
});
// // GET FORM DATA
// // console.log(document.querySelector('.sub-btn'));
//     // const dataUrl: string = window.location.href;
//     // console.log(dataUrl);
// let params = new URLSearchParams('/config.html')
// console.log(params)
// const daForm: HTMLFormElement | null = document.getElementById('config-form');
// const configData: FormData = new FormData(daForm);
//   HANDLAING KEYBOARD
// NUMBER PAD
document.addEventListener('keyup', function (evt) {
    console.log('hello');
    console.log(evt.code);
    if (evt.code >= 'Numpad0' || evt.code >= 'Numpad0') {
        // if ('1234567890'.includes(evt.code.slice(-1))) 
        cal.parseNum(evt.code.slice(-1));
    }
    evt.stopPropagation();
    return evt;
});
var _loop_1 = function (i) {
    var numBtn = numBtns[i];
    numBtn.addEventListener('click', function () {
        if (byId('screen').innerHTML == cal.lastCalculated) {
            byId('screen').innerHTML = '';
        }
        cal.parseNum(numBtn.id);
    });
};
// HANDLE BTNS CLICKS
// NUMBER BUTTONS
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
// EQUAL BUTTON
byId("=").addEventListener('click', function () {
    console.log("fir op: ".concat(cal.firstOperand, " sec op: ").concat(cal.secondOperand));
    if (cal.firstOperand !== '' && cal.action !== '' && cal.secondOperand !== '') {
        cal.calculate();
        byId('screen').innerHTML = cal.lastCalculated;
    }
});
// C BUTTON
byId('c').addEventListener('click', cal.clearData);
// RETURN BUTTON
byId('return').addEventListener('click', function () {
    console.log("fir op: ".concat(cal.firstOperand, ", sec op: ").concat(cal.secondOperand));
    cal.deleteLastKey();
});
// SCIENCE
function displayScienceSec() {
    if (byId('scientific-sec').style.display === 'none' || byId('scientific-sec').style.display === '') {
        byId('scientific-sec').style.display = 'grid';
        if (window.screen.width < 810) {
            byId('main-c').style.borderRight = 'none';
        }
        // cal.state = 'Sci'
    }
    else {
        byId('scientific-sec').style.display = 'none';
        if (window.screen.width < 810) {
            byId('main-c').style.borderRight = 'solid 0.1rem';
        }
        // cal.state = 'Reg'
    }
    return;
}
byId('sci').addEventListener('click', displayScienceSec);
// HISTORY
function displayHistorySec() {
    if (byId('history-sec').style.display === 'none' || byId('history-sec').style.display === '') {
        byId('history-sec').style.display = 'grid';
        if (screen.width < 810) {
            byId('main-c').style.borderLeft = 'none';
        }
    }
    else {
        byId('history-sec').style.display = 'none';
        if (screen.width < 810) {
            byId('main-c').style.borderLeft = 'solid 0.1rem';
        }
    }
}
byId('history-btn').addEventListener('click', displayHistorySec);
