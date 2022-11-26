var _a;
var Calculator111 = /** @class */ (function () {
    function Calculator111() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action1 = '';
        this.lastCalculated = 0;
        this.scietificModeState = false;
        this.historyModeState = false;
        this.expressionStorage = [];
    }
    Calculator111.prototype.updateScreen = function (key) {
        var temp = byId('screen');
        temp.innerHTML += "".concat(key);
    };
    Calculator111.prototype.parseNum = function (num) {
        var lastChar = byId('screen').innerHTML.slice(-1);
        if (byId('screen').innerHTML.length === 1 && byId('screen').innerHTML == '0') {
            if (this.firstOperand = '') {
                this.firstOperand = num;
                byId('screen').innerHTML = num;
            }
            else if (this.secondOperand = '') {
                this.secondOperand = num;
                byId('screen').innerHTML = num;
            }
            else {
                this.thirdOperand = num;
                byId('screen').innerHTML = num;
            }
        }
        else if (this.lastCalculated !== 0 && this.action1 === '') {
            this.clearData();
            this.firstOperand += num;
            this.updateScreen(num);
            return;
        }
        if (this.scietificModeState === false) {
            // DOT CASES
            if (num === '.' && '1234567890'.includes(lastChar)) {
                console.log(this.firstOperand);
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
                // FILL OPERANDS
            }
            else if (this.action1 === '' && num !== '.') {
                this.firstOperand += num;
                this.updateScreen(num);
            }
            else if (num !== '.') {
                this.secondOperand += num;
                this.updateScreen(num);
            }
        }
        else if (this.scietificModeState === true) {
            //  DOT CASES
            if (num === '.' && '1234567890'.includes(lastChar)) {
                if (this.firstOperand !== '' && this.firstOperand.includes(num) === false) {
                    this.firstOperand += num;
                    this.updateScreen(num);
                }
                else if (this.secondOperand !== '' && this.secondOperand.includes(num) === false) {
                    this.secondOperand += num;
                    this.updateScreen(num);
                }
                else if (this.thirdOperand !== '' && this.thirdOperand.includes(num) === false) {
                    this.thirdOperand += num;
                    this.updateScreen(num);
                }
                else {
                    return;
                }
                // FILL OPERANDS
            }
            else if (this.action1 === '' && num !== '.') {
                this.firstOperand += num;
                this.updateScreen(num);
            }
            else if (this.action2 === '' && num !== '.') {
                this.secondOperand += num;
                this.updateScreen(num);
            }
            else if (num !== '.') {
                this.thirdOperand += num;
                this.updateScreen(num);
            }
        }
        else {
            alert("The state ".concat(this.scietificModeState, "isn't defined.\nPlease check calculator's state"));
        }
        // console.log(`fr-op: ${this.firstOperand} sc-op: ${this.secondOperand}`)
        // console.log()
    };
    Calculator111.prototype.parseAction = function (oper) {
        var lastChar = byId('screen').innerHTML.slice(-1);
        if (lastChar === '' || lastChar == '.') {
            return;
        }
        if ('+-/*'.includes(lastChar)) {
            byId('screen').innerHTML = byId('screen').innerHTML.slice(0, -1);
            this.action1 = oper;
            this.updateScreen(oper);
        }
        else if (this.scietificModeState === false) {
            if (this.firstOperand !== '' && this.secondOperand !== '') {
                this.calculate();
                this.action1 = oper;
                byId('screen').innerHTML = this.lastCalculated + oper;
            }
            else {
                this.action1 = oper;
                this.updateScreen(oper);
            }
        }
        else if (this.scietificModeState === true) {
            // console.log(`this: ${cal} act1: ${this.action1} act2: ${this.action2}`);
            if (cal.action1 === '') {
                cal.action1 = oper;
                cal.updateScreen(oper);
            }
            else if (cal.action2 === '') {
                cal.action2 = oper;
                cal.updateScreen(oper);
            }
            if (this.firstOperand !== '' && this.secondOperand !== '' && this.thirdOperand !== '') {
                this.calculate();
                this.action1 = oper;
                byId('screen').innerHTML = this.lastCalculated + oper;
            }
        }
        else {
            alert("The state ".concat(this.scietificModeState, "isn't defined.\nPlease check calculator's state"));
        }
    };
    Calculator111.prototype.calculate = function () {
        if (this.scietificModeState === false) {
            // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
            var res = (eval(this.firstOperand + this.action1 + this.secondOperand));
            if (res.toString().length >= 6) {
                res = Number(res.toString().slice(0, 6));
                console.log(res);
            }
            var curData = "".concat(this.firstOperand, " ").concat(this.action1, " ").concat(this.secondOperand, " = ").concat(res);
            this.expressionStorage.push(curData);
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();
            this.updateScreen(res.toString());
            if (this.historyModeState) {
                this.updateHistory();
            }
        }
        else if (this.scietificModeState === true) {
            var res = (eval(this.firstOperand + this.action1 + this.secondOperand + this.action2 + this.thirdOperand));
            if (res.toString().length >= 6) {
                res = Number(res.toString().slice(0, 6));
            }
            var curData = "".concat(this.firstOperand, " ").concat(this.action1, " ").concat(this.secondOperand, " ").concat(this.action2, " ").concat(this.thirdOperand, " = ").concat(res);
            this.expressionStorage.push(curData);
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();
            this.updateScreen(res.toString());
            if (this.historyModeState) {
                this.updateHistory();
            }
        }
        else {
            alert("The state ".concat(this.scietificModeState, " isn't defined.\nPlease check calculator's state"));
        }
    };
    Calculator111.prototype.clearData = function () {
        cal.firstOperand = '';
        cal.secondOperand = '';
        cal.action1 = '';
        cal.lastCalculated = 0;
        byId('screen').innerHTML = '';
        if (this.scietificModeState === true) {
            this.action2 = '';
            this.thirdOperand = '';
        }
    };
    Calculator111.prototype.deleteLastKey = function () {
        var lastKey = byId('screen').innerHTML.slice(-1);
        if (byId('screen').innerHTML.length < 1) {
            return;
        }
        if (this.scietificModeState === false) {
            if ('+-/*'.includes(lastKey)) {
                this.action1 = '';
            }
            else if (this.secondOperand !== '') {
                this.secondOperand = this.secondOperand.slice(0, -1);
            }
            else if ('+-/*'.includes(lastKey)) {
                this.action1 = '';
            }
            else {
                this.firstOperand = this.firstOperand.slice(0, -1);
            }
        }
        else if (this.scietificModeState === true) {
            if ('+-/*'.includes(lastKey)) {
                if (this.action2 !== '') {
                    this.action2 = '';
                }
                else {
                    this.action1 = '';
                }
            }
            else if (this.thirdOperand !== '') {
                this.thirdOperand = this.thirdOperand.slice(0, -1);
            }
            else if (this.secondOperand !== '') {
                this.secondOperand = this.secondOperand.slice(0, -1);
            }
            else {
                this.firstOperand = this.firstOperand.slice(0, -1);
            }
        }
        else {
            alert("The state ".concat(this.scietificModeState, " isn't defined.\nPlease check calculator's state"));
        }
        byId('screen').innerHTML = byId('screen').innerHTML.slice(0, -1);
    };
    Calculator111.prototype.updateHistory = function () {
        var curLi = document.createElement('li');
        curLi.innerHTML = this.expressionStorage.slice(-1).toString();
        byId('express-list').appendChild(curLi);
    };
    return Calculator111;
}());
// When i worked with the calculator.ts file sometimes, randomly application.ts didn't recognized the Calculator class
// APP PART 
// SHORTCUTS
var byId = document.getElementById.bind(document);
var byClass = document.getElementsByClassName.bind(document);
var cal = new Calculator111();
document.addEventListener('DOMContentLoaded', function () {
    localStorage.clear();
});
// CREATING MESSAGE DIV
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
// INFO FUCNTION
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
// INFO OK BUTTON
byId('info-ok-btn').addEventListener('click', function () {
    byId('page-wraper').classList.remove('info-page-shown');
    byId('page-wraper').classList.add('page-wraper');
});
//  EXPRESSION SCREEN LIGHTS 
byId('screen-light-btn').addEventListener('click', function () {
    byId('screen').classList.toggle('light-on-screen');
    byId('screen-light-btn').classList.toggle('light-on-btn');
});
// CONFIGUE PAGE
// POPUP 
byId('settings').addEventListener('click', function () {
    var params = 'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200';
    var myWind = window.open('/config.html', 'config', params);
});
// I tried in various ways to listen when localStorage.lenght === 3 
//  Couldn't find the way in time..
// The function to apply the changes
// I know the font setting probably wouldn't work but because i couldn't complete the previous part
// i just worte a general idea
function changeSettings() {
    var font = localStorage.getItem('font');
    var color = localStorage.getItem('color');
    var mode = localStorage.getItem('mode');
    byId('body').style.fontFamily = font;
    byId('body').style.backgroundColor = color;
    if (mode === 'dark') {
        byId('body').classList.add('dark-mode');
    }
    else {
        byId('body').classList.remove('dark-mode');
    }
}
// ******************HANDLE BTNS CLICKS********************
// NUMBER BUTTONS
var numBtns = byClass('btn-num');
var _loop_1 = function (i) {
    var numBtn = numBtns[i];
    numBtn.addEventListener('click', function () {
        cal.parseNum(numBtn.id);
    });
};
for (var i = 0; i < numBtns.length; i++) {
    _loop_1(i);
}
// OPER BUTTONS
var operBtns = byClass('opers');
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
    if (cal.firstOperand !== '' && cal.action1 !== '' && cal.secondOperand !== '') {
        cal.calculate();
    }
});
// C BUTTON
byId('c').addEventListener('click', function () {
    cal.clearData();
    deleteHistory();
});
// RETURN BUTTON
byId('return').addEventListener('click', function () {
    cal.deleteLastKey();
});
// SCIENCE
byId('sci-btn').addEventListener('click', function () {
    if (byId('scientific-sec').classList.contains('sci-shown-r')) {
        byId('scientific-sec').classList.remove('sci-shown-r');
        byId('sci-btn').classList.remove('light-on-btn');
        cal.scietificModeState = false;
    }
    else {
        byId('scientific-sec').classList.add('sci-shown-r');
        byId('sci-btn').classList.add('light-on-btn');
        cal.clearData();
        cal.scietificModeState = true;
        cal.thirdOperand = '';
        cal.action2 = '';
    }
});
// HISTORY
byId('history-btn').addEventListener('click', function () {
    byId('history-btn').classList.toggle('light-on-btn');
    if (byId('history-btn').classList.contains('light-on-btn')) {
        deleteHistory();
        createInitialList();
        byId('history-sec').classList.add('history-shown-r');
        cal.historyModeState = true;
    }
    else {
        byId('history-sec').classList.remove('history-shown-r');
        cal.historyModeState = false;
    }
});
function createInitialList() {
    var expressionDiv = byId('cal-history');
    var expressionList = document.createElement('ul');
    expressionList.setAttribute('id', 'express-list');
    expressionDiv.appendChild(expressionList);
    for (var express in cal.expressionStorage) {
        var curExpress = cal.expressionStorage[express];
        var curLi = document.createElement('li');
        curLi.innerHTML = curExpress;
        expressionList.appendChild(curLi);
    }
}
function deleteHistory() {
    var expressionDiv = byId('cal-history');
    byId('history-sec').removeChild(expressionDiv);
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'cal-history');
    byId('history-sec').appendChild(newDiv);
}
// UPDATE HISTORY LOG
// CREATE AN UNORDERED LIST
// APPEND TO "cal-history"
// EVERY CALCULATE THAT HAPPENS APPEND AS <li>
