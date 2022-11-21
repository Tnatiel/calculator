
const calById = document.getElementById.bind(document);
const calByClass = document.getElementsByClassName.bind(document);



class Calculator {
    dataStr: string[];
    firstOperand: string;
    secondOperand: string;
    action: string;
    currentValue: number;
    state: string;
    constructor(dataStr: string[]) {
        this.dataStr = dataStr
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.currentValue = 0;
        this.state = 'Reg'
    }

    Type(key: string): string {
        let opers: string = '+-/x';
        if (opers.indexOf(key) > -1) {
            return 'operator';
        } else if (key == '=') {
            return 'eval';
        } else {
            return 'number';
        }
    }

    ParseKey() :void {
        for (let i = 0; i < this.dataStr.length; i++) {
            if (this.Type(this.dataStr[i]) == 'number') {
                if (this.action == '') {
                    this.firstOperand += this.dataStr[i];
                } else { this.secondOperand += this.dataStr[i]; } 
            } else {
                const res = eval(this.firstOperand + this.action + this.secondOperand);
                if (this.firstOperand !== '' && this.secondOperand !== '') {
                    this.firstOperand = res;
                    this.action = this.dataStr[i];
                    this.currentValue = Number(res)
                // } else if (i - 1 >= 0 && this.Type(this.dataStr[i - 1]) == 'operator') {
                //     this.action = this.dataStr[i];
                } else {
                    this.action = this.dataStr[i]
                }
            }
        }
        return
    }

    clearData() {
        this.currentValue = 0
        this.firstOperand = ''
        this.secondOperand = ''
        this.action = ''
    }

    updateScreen(num: string) {
        let temp: HTMLDivElement = calById('screen');
        temp.innerHTML += `${num} `
        } 
        // this.ParseKey()
        // console.log(this.dataStr)
        // temp.innerText = this.dataStr.join(' ');
    }
    





// const avinoam = new Calculator(values);

