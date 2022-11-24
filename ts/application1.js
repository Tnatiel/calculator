var _a;
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
        else if (this.state === 'Sci') {
            var highOpers = '*/';
            var lowOpers = '-+';
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
var version = '1';
var pageDiv = document.createElement('div');
var infoDiv = document.createElement('div');
var nameP = document.createElement('p');
var verP = document.createElement('p');
var decP = document.createElement('p');
var pageStyle = document.createElement('style');
var okBtn = document.createElement('button');
okBtn.setAttribute('id', 'info-ok-btn');
pageStyle.innerHTML = '.page-wraper {display: none;}';
pageDiv.setAttribute('id', 'page-wraper');
pageDiv.className = 'page-wraper';
infoDiv.setAttribute('id', 'info-wraper');
infoDiv.className = 'info-wraper';
okBtn.innerHTML = 'OK';
nameP.innerHTML = 'Developer name: Natiel';
verP.innerHTML = "Version: ".concat(version);
decP.innerHTML = 'Description: A web calculator based on javascript, scss and html';
infoDiv.appendChild(nameP);
infoDiv.appendChild(verP);
infoDiv.appendChild(decP);
pageDiv.appendChild(infoDiv);
pageDiv.appendChild(okBtn);
byId('body').appendChild(pageDiv);
(_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(pageStyle);
byId('info').addEventListener('click', function () {
    if (!byId('page-wraper').classList.contains('info-page-shown')) {
        byId('page-wraper').classList.remove('page-wraper');
        byId('page-wraper').classList.add('info-page-shown');
    }
    else {
        byId('page-wraper').classList.remove('info-page-shown');
        byId('page-wraper').classList.add('page-wraper');
    }
});
byId('info-ok-btn').addEventListener('click', function () {
    byId('page-wraper').classList.remove('info-page-shown');
    byId('page-wraper').classList.add('page-wraper');
});
//  LIGHTS 
byId('screen-light-btn').addEventListener('click', function () {
    byId('screen').classList.toggle('light-on-screen');
    byId('screen-light-btn').classList.toggle('light-on-btn');
});
// CONFIGUE PAGE
// POPUP 
byId('settings').addEventListener('click', function () {
    var params = 'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200';
    window.open('/config.html', 'config', params);
    ;
});
// // GET FORM DATA
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
byId('sci-btn').addEventListener('click', function () {
    byId('scientific-sec').classList.toggle('sci-shown-r');
    byId('sci-btn').classList.toggle('light-on-btn');
});
// HISTORY
byId('history-btn').addEventListener('click', function () {
    byId('history-sec').classList.toggle('history-shown-r');
    byId('history-btn').classList.toggle('light-on-btn');
});
