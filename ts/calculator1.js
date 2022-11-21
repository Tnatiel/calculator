var calById = document.getElementById.bind(document);
var calByClass = document.getElementsByClassName.bind(document);
var Calculator = /** @class */ (function () {
    function Calculator(dataStr) {
        this.dataStr = dataStr;
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.currentValue = 0;
        this.state = 'Reg';
    }
    Calculator.prototype.Type = function (key) {
        var opers = '+-/x';
        if (opers.indexOf(key) > -1) {
            return 'operator';
        }
        else if (key == '=') {
            return 'eval';
        }
        else {
            return 'number';
        }
    };
    Calculator.prototype.ParseKey = function () {
        for (var i = 0; i < this.dataStr.length; i++) {
            if (this.Type(this.dataStr[i]) == 'number') {
                if (this.action == '') {
                    this.firstOperand += this.dataStr[i];
                }
                else {
                    this.secondOperand += this.dataStr[i];
                }
            }
            else {
                var res = eval(this.firstOperand + this.action + this.secondOperand);
                if (this.firstOperand !== '' && this.secondOperand !== '') {
                    this.firstOperand = res;
                    this.action = this.dataStr[i];
                    this.currentValue = Number(res);
                    // } else if (i - 1 >= 0 && this.Type(this.dataStr[i - 1]) == 'operator') {
                    //     this.action = this.dataStr[i];
                }
                else {
                    this.action = this.dataStr[i];
                }
            }
        }
        return;
    };
    Calculator.prototype.clearData = function () {
        this.currentValue = 0;
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
    };
    Calculator.prototype.updateScreen = function (num) {
        var temp = calById('screen');
        temp.innerHTML += "".concat(num, " ");
    };
    return Calculator;
}());
// const avinoam = new Calculator(values);
