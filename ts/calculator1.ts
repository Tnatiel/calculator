
class Calculator111 {

    firstOperand: string;
    secondOperand: string;
    thirdOperand: string;
    action1: string;
    action2 :string
    operArr: string[]
    lastCalculated: number;
    state: string;
    expressionStorage: string[];
    constructor() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action1 = '';
        this.lastCalculated = 0;
        this.state = 'Reg'
        this.expressionStorage = []
    }

    updateScreen(key: string) {
        let temp: HTMLDivElement = byId('screen');
        temp.innerHTML += `${key}`
    } 

    parseNum (num:string): void {
        const lastChar:string =  byId('screen').innerHTML.slice(-1)
        console.log(`last: ${this.expressionStorage.slice(-1)} res: ${eval(String(this.expressionStorage.slice(-1)))}`)

        if (this.lastCalculated !== 0 &&  this.action1 === '') { //(this.expressionStorage.length >= 0 && this.lastCalculated === eval(String(this.expressionStorage.slice(-1)))) {
            this.clearData();
            this.firstOperand += num;
            this.updateScreen(num);
            return

        } if (this.state === 'Reg') {

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
        } else if (this.state === 'Sci') {

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
        } else {alert(`The state ${this.state}isn\'t defined.\nPlease check calculator\'s state`)}
        // console.log(`fr-op: ${this.firstOperand} sc-op: ${this.secondOperand}`)
        // console.log()
    }

    parseAction(oper:string) {
        const lastChar:string =  byId('screen').innerHTML.slice(-1);
        if (lastChar === '' || lastChar == '.') {return} 
        if ('+-/*'.includes(lastChar)) {
           byId('screen').innerHTML = byId('screen').innerHTML.slice(0,-1); 
           this.action1 = oper
           this.updateScreen(oper);
       } 
        else if (this.state === 'Reg') {
             if (this.firstOperand !== '' && this.secondOperand !== ''){
                this.calculate();
                this.action1 = oper;
                byId('screen').innerHTML = this.lastCalculated;
            } else {
                this.action1 = oper
                this.updateScreen(oper)
            }
        
        } else if (this.state === 'Sci') {
            // console.log(`this: ${cal} act1: ${this.action1} act2: ${this.action2}`);
            if (cal.action1 === '') {
                cal.action1 = oper;
                cal.updateScreen(oper);
            } else if (cal.action2 === '') {
                cal.action2 = oper;
                cal.updateScreen(oper);

            } if (this.firstOperand !== '' && this.secondOperand !== '' && this.thirdOperand !== ''){
                this.calculate();
                this.action1 = oper;
                byId('screen').innerHTML = this.lastCalculated;
            } 
            // else {
            //     if ('*/'.includes(this.operArr[0] && this.operArr[1])) {
            //         this.action1 = this.operArr[0]
            //         this.action2 = this.operArr[1]
            //     } else if ('+-'.includes[this.operArr[0]] && '*/'.includes(this.operArr[1])) {
            //         this.action1 = this.operArr[1];
            //         this.action2 = this.operArr[0];
            //     } else {
            //         this.action1 = this.operArr[0];
            //         this.action2 = this.operArr[1];
            //     }
            // }
        } else {alert(`The state ${this.state}isn\'t defined.\nPlease check calculator\'s state`)}
        console.log(`1act1: ${this.action1}`)
    }

    calculate() {
        if (this.state === 'Reg') {
            // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
            let curData: string = this.firstOperand + this.action1 + this.secondOperand;
            this.expressionStorage.push(curData);
            let res: number = (eval(this.firstOperand + this.action1 + this.secondOperand));
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();

        } else if (this.state === 'Sci') {
            let curData: string = this.firstOperand + this.action1 + this.secondOperand + this.action2 + this.thirdOperand;
            this.expressionStorage.push(curData);
            let res: number = (eval(this.firstOperand + this.action1 + this.secondOperand + this.action2 + this.thirdOperand));
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();
        }
    }

    clearData() {

        cal.firstOperand = '';
        cal.secondOperand = '';
        cal.action1 = '';
        cal.lastCalculated = 0;
        byId('screen').innerHTML = ''
        if (this.state === 'Sci') {
            this.action2 = ''
            this.thirdOperand = ''
        }
    }

    deleteLastKey() {
        const lastKey = byId('screen').innerHTML.slice(-1);
        if (byId('screen').innerHTML.length < 1 || byId('screen').innerHTML == this.lastCalculated) {return}

        else if (this.secondOperand !== '') {
            this.secondOperand = this.secondOperand.slice(0,-1)

        } else if ('+-/*'.includes(lastKey)){
            this.action1 = '';

        } else {this.firstOperand = this.firstOperand.slice(0, -1)}
            
        byId('screen').innerHTML = byId('screen').innerHTML.slice(0, -1);
        
    }
}










// latesttttttttttttttttttttttttttttttttttttttttttt


// class Calculator111 {

//     firstOperand: string;
//     secondOperand: string;
//     action: string;
//     lastCalculated: string;
//     state: string;
//     screen: HTMLDivElement;
//     constructor() {
//         this.firstOperand = '';
//         this.secondOperand = '';
//         this.action = '';
//         this.lastCalculated = '';
//         this.state = 'Reg'
//         }

//     updateScreen(key: string) {
//         let temp: HTMLDivElement = byId('screen');
//         // console.log(`UpScr given key: ${key}`)
//         temp.innerHTML += `${key}`
//     } 

//     getCurrentLastKey(): string {
//         return byId('screen').innerHTML.slice(-1)
//     }

//     parseNum (num:string): void {
//         if (this.state === 'Reg') {
//             const lastChar:string = this.getCurrentLastKey()
//             const numStr: string = '1234567890';
//             // if (this.lastCalculated !== '') {
//             //     this.clearData()
//             //     this.firstOperand += num
//             //     this.updateScreen(num)
//             // }
//              if (num === '.' && numStr.includes(lastChar)){
//                 if (this.firstOperand !== '' && this.firstOperand.includes(num) === false) {
//                     this.firstOperand += num;
//                     this.updateScreen(num);
//                 } else if (this.secondOperand !== '' && this.secondOperand.includes(num) === false) {
//                     this.secondOperand += num;
//                     this.updateScreen(num);
//                 } else {return}
//             } else if (this.action === '' && num !== '.') {
//                 this.firstOperand += num;
//                 this.updateScreen(num);
//             } else if (num !== '.') {
//                 this.secondOperand += num ; 
//                 this.updateScreen(num);
//             }
//         }
//     }

//     parseAction(oper:string) {
//         if (this.state === 'Reg') {
//             const lastChar:string = this.getCurrentLastKey()
//             if (lastChar === '' || lastChar == '.') {return
//             } else if ('+-/*'.includes(lastChar)) {
//                 byId('screen').innerHTML = byId('screen').innerHTML.slice(0,-1); 
//                 this.action = oper
//                 this.updateScreen(this.action);
//             } else if (this.firstOperand !== '' && this.secondOperand !== ''){
//                 this.calculate();
//                 this.action = oper
//                 byId('screen').innerHTML = this.lastCalculated;
//             } else {
//                 this.action = oper
//                 this.updateScreen(this.action)
//             }}}

//     calculate() {
//         if (this.state === 'Reg') {
//             // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
//             let res: string = eval(this.firstOperand + this.action + this.secondOperand);
//             this.clearData();
//             this.lastCalculated = res;
//             this.firstOperand = res;
//             console.log(`fir op: ${this.firstOperand}`)
//             // this.action = res;
//         }
//     }

//     clearData() {
//         this.firstOperand = '';
//         this.secondOperand = '';
//         this.action = '';
//         this.lastCalculated = '';
//         byId('screen').innerHTML = ''
        
//     }

//     deleteLastKey() {
//         const lastKey = this.getCurrentLastKey()
//         if (byId('screen').innerHTML.length < 1) {return}
//         else if (this.secondOperand !== '') {
//             this.secondOperand = this.secondOperand.slice(0,-1)
//         } else if ('+-/*'.includes(lastKey)){
//             this.action = ''
//         } else {this.firstOperand = this.firstOperand.slice(0, -1)}
            
//         byId('screen').innerHTML = this.getCurrentLastKey;
        
//     }
// }