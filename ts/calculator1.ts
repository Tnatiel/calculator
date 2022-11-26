const byId = document.getElementById.bind(document);

class Calculator111 {

    firstOperand: string;
    secondOperand: string;
    thirdOperand: string;
    action1: string;
    action2 :string;
    operArr: string[];
    lastCalculated: number;
    scietificModeState: boolean;
    historyModeState: boolean
    expressionStorage: string[];
    constructor() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action1 = '';
        this.lastCalculated = 0;
        this.scietificModeState = false;
        this.historyModeState = false;
        this.expressionStorage = [];
    }

    updateScreen(key: string) {
        let temp: HTMLDivElement = byId1('screen');
        temp.innerHTML += `${key}`;
    } 

    parseNum (num:string): void {
        const lastChar:string =  byId1('screen').innerHTML.slice(-1)
        if (byId1('screen').innerHTML.length === 1 && byId1('screen').innerHTML == '0') {
            if (this.firstOperand = '') {
                this.firstOperand = num;
                byId1('screen'). innerHTML = num;
                
            } else if (this.secondOperand = '') {
                this.secondOperand = num
                byId1('screen'). innerHTML = num;
                
            } else {
                this.thirdOperand = num;
                byId1('screen'). innerHTML = num;
            }
        } 
        else if (this.lastCalculated !== 0 &&  this.action1 === '') { 
            this.clearData();
            this.firstOperand += num;
            this.updateScreen(num);
            return

        } if (this.scietificModeState === false) {

            // DOT CASES
            if (num === '.' && '1234567890'.includes(lastChar)){
                console.log(this.firstOperand);     
                if (this.firstOperand !== '' && this.firstOperand.includes(num) === false) {
                    this.firstOperand += num;
                    this.updateScreen(num);
                } else if (this.secondOperand !== '' && this.secondOperand.includes(num) === false) {
                    this.secondOperand += num;
                    this.updateScreen(num);
                } else {return}

            // FILL OPERANDS
            } else if (this.action1 === '' && num !== '.') {

                this.firstOperand += num;
                this.updateScreen(num);
            } else if (num !== '.') {
                
                this.secondOperand += num ; 
                this.updateScreen(num);
            }
        } else if (this.scietificModeState === true) {

            //  DOT CASES
            if (num === '.' && '1234567890'.includes(lastChar)){

                if (this.firstOperand !== '' && this.firstOperand.includes(num) === false) {
                    this.firstOperand += num;
                    this.updateScreen(num);
                } else if (this.secondOperand !== '' && this.secondOperand.includes(num) === false) {
                    this.secondOperand += num;
                    this.updateScreen(num);
                } else if (this.thirdOperand !== '' && this.thirdOperand.includes(num) === false) {
                    this.thirdOperand += num;
                    this.updateScreen(num);
                } else {return}

            // FILL OPERANDS
            } else if (this.action1 === '' && num !== '.') {
                this.firstOperand += num;
                this.updateScreen(num);
            } else if (this.action2 === '' && num !== '.') {
                this.secondOperand += num ; 
                this.updateScreen(num);
            } else if (num !== '.') {
                this.thirdOperand += num;
                this.updateScreen(num);
            }
        } else {alert(`The state ${this.scietificModeState}isn\'t defined.\nPlease check calculator\'s state`);}
        // console.log(`fr-op: ${this.firstOperand} sc-op: ${this.secondOperand}`)
        // console.log()
    }

    parseAction(oper:string) {
        const lastChar:string =  byId1('screen').innerHTML.slice(-1);
        if (lastChar === '' || lastChar == '.') {return} 
        if ('+-/*'.includes(lastChar)) {
           byId1('screen').innerHTML = byId1('screen').innerHTML.slice(0,-1); 
           this.action1 = oper;
           this.updateScreen(oper);
       } 
        else if (this.scietificModeState === false) {
             if (this.firstOperand !== '' && this.secondOperand !== ''){
                this.calculate();
                this.action1 = oper;
                byId1('screen').innerHTML = this.lastCalculated + oper;
            } else {
                this.action1 = oper;
                this.updateScreen(oper);
            }
        
        } else if (this.scietificModeState === true) {
            // console.log(`this: ${cal} act1: ${this.action1} act2: ${this.action2}`);
            if (this.action1 === '') {
                this.action1 = oper;
                this.updateScreen(oper);
            } else if (this.action2 === '') {
                this.action2 = oper;
                this.updateScreen(oper);

            } if (this.firstOperand !== '' && this.secondOperand !== '' && this.thirdOperand !== ''){
                this.calculate();
                this.action1 = oper;
                byId1('screen').innerHTML = this.lastCalculated + oper;
            } 
        } else {alert(`The state ${this.scietificModeState}isn\'t defined.\nPlease check calculator\'s state`)}
    }

    calculate() {
        if (this.scietificModeState === false) {
            // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
            let res: number = (eval(this.firstOperand + this.action1 + this.secondOperand));
            if (res.toString().length >= 6){
                res = Number(res.toString().slice(0, 6));
                console.log(res)
            } 
            let curData: string = `${this.firstOperand} ${this.action1} ${this.secondOperand} = ${res}`;
            this.expressionStorage.push(curData);
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();
            this.updateScreen(res.toString());
            if (this.historyModeState) {
                this.updateHistory();
            }
            
        } else if (this.scietificModeState === true) {
            let res: number = (eval(this.firstOperand + this.action1 + this.secondOperand + this.action2 + this.thirdOperand));
            if (res.toString().length >= 6){
                res = Number(res.toString().slice(0, 6));
            } 
            let curData: string = `${this.firstOperand} ${this.action1} ${this.secondOperand} ${this.action2} ${this.thirdOperand} = ${res}`;
            this.expressionStorage.push(curData);
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();
            this.updateScreen(res.toString());
            if (this.historyModeState) {
                this.updateHistory();
            }
        } else {alert(`The state ${this.scietificModeState} isn\'t defined.\nPlease check calculator\'s state`)}
    }

    clearData() {

        this.firstOperand = '';
        this.secondOperand = '';
        this.action1 = '';
        this.lastCalculated = 0;
        byId1('screen').innerHTML = '';
        if (this.scietificModeState === true) {
            this.action2 = '';
            this.thirdOperand = '';
        }
    }

    deleteLastKey() {
        const lastKey = byId1('screen').innerHTML.slice(-1);
        if (byId1('screen').innerHTML.length < 1) {return}
        
        if (this.scietificModeState === false) {

            if ('+-/*'.includes(lastKey)) {
                this.action1 = ''

            } else if (this.secondOperand !== '') {
                this.secondOperand = this.secondOperand.slice(0,-1);

           } else if ('+-/*'.includes(lastKey)){
               this.action1 = '';
    
           } else {this.firstOperand = this.firstOperand.slice(0, -1);}

        } else if (this.scietificModeState === true) {

            if ('+-/*'.includes(lastKey)) {
                if (this.action2 !== '') {
                    this.action2 = '';
                } else { this.action1 = '';}

            } else if (this.thirdOperand !== '') {
                this.thirdOperand = this.thirdOperand.slice(0, -1);

            } else if (this.secondOperand !== '') {
                this.secondOperand = this.secondOperand.slice(0, -1);

            } else {this.firstOperand = this.firstOperand.slice(0, -1);}
        } else {alert(`The state ${this.scietificModeState} isn\'t defined.\nPlease check calculator\'s state`)}

        byId1('screen').innerHTML = byId1('screen').innerHTML.slice(0, -1);    
    }

    updateHistory() {
        const curLi:HTMLLIElement = document.createElement('li');
        curLi.innerHTML = this.expressionStorage.slice(-1).toString();
        byId1('express-list').appendChild(curLi);
    }
}
