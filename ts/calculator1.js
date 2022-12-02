// const calById = document.getElementById.bind(document);
// const calByClass = document.getElementsByClassName.bind(document);
// class Calculator {
//     dataStr: string[];
//     firstOperand: string;
//     secondOperand: string;
//     action: string;
//     currentValue: number;
//     state: string;
//     constructor(dataStr: string[]) {
//         this.dataStr = dataStr
//         this.firstOperand = '';
//         this.secondOperand = '';
//         this.action = '';
//         this.currentValue = 0;
//         this.state = 'Reg'
//     }
//     Type(key: string): string {
//         let opers: string = '+-/x';
//         if (opers.indexOf(key) > -1) {
//             return 'operator';
//         } else if (key == '=') {
//             return 'eval';
//         } else {
//             return 'number';
//         }
//     }
//     ParseKey() :void {
//         for (let i = 0; i < this.dataStr.length; i++) {
//             if (this.Type(this.dataStr[i]) == 'number') {
//                 if (this.action == '') {
//                     this.firstOperand += this.dataStr[i];
//                 } else { this.secondOperand += this.dataStr[i]; } 
//             } else {
//                 const res = eval(this.firstOperand + this.action + this.secondOperand);
//                 if (this.firstOperand !== '' && this.secondOperand !== '') {
//                     this.firstOperand = res;
//                     this.action = this.dataStr[i];
//                     this.currentValue = Number(res)
//                 // } else if (i - 1 >= 0 && this.Type(this.dataStr[i - 1]) == 'operator') {
//                 //     this.action = this.dataStr[i];
//                 } else {
//                     this.action = this.dataStr[i]
//                 }
//             }
//         }
//         return
//     }
//     clearData() {
//         this.currentValue = 0
//         this.firstOperand = ''
//         this.secondOperand = ''
//         this.action = ''
//     }
//     updateScreen(num: string) {
//         let temp: HTMLDivElement = calById('screen');
//         temp.innerHTML += `${num} `
//         } 
//         // this.ParseKey()
//         // console.log(this.dataStr)
//         // temp.innerText = this.dataStr.join(' ');
//     }
// class Calculator1 {
//     firstOperand: string;
//     secondOperand: string;
//     action: string;
//     lastCalculated: number;
//     state: string;
//     constructor() {
//         this.firstOperand = '';
//         this.secondOperand = '';
//         this.action = '';
//         this.lastCalculated = 0;
//         this.state = 'Reg'
//     }
//     parseNum(key:string): any {
//         if (this.state === 'Reg') {
//             if (key === '.'){
//                 if (this.firstOperand.length > 0 && !this.firstOperand.includes(key)) {
//                     this.firstOperand += key;
//                     this.updateScreen(key);
//                 } else if (this.secondOperand.length > 0 && !this.secondOperand.includes(key)) {
//                     this.firstOperand += key;
//                     this.updateScreen(key);
//                 }
//             } else if (this.action === '') {
//                 this.firstOperand += key;
//                 this.updateScreen(key);
//             } else {this.secondOperand += key}
//         }
//     }
//     updateScreen(num: string) {
//         let temp: HTMLDivElement = calById('screen');
//         temp.innerHTML += `${num} `
//     } 
// }
//     Type(key: string): string {
//         let opers: string = '+-/x';
//         if (opers.indexOf(key) > -1) {
//             return 'operator';
//         } else if (key == '=') {
//             return 'eval';
//         } else {
//             return 'number';
//         }
//     }
//     ParseKey() :void {
//         for (let i = 0; i < this.dataStr.length; i++) {
//             if (this.Type(this.dataStr[i]) == 'number') {
//                 if (this.action == '') {
//                     this.firstOperand += this.dataStr[i];
//                 } else { this.secondOperand += this.dataStr[i]; } 
//             } else {
//                 const res = eval(this.firstOperand + this.action + this.secondOperand);
//                 if (this.firstOperand !== '' && this.secondOperand !== '') {
//                     this.firstOperand = res;
//                     this.action = this.dataStr[i];
//                     this.currentValue = Number(res)
//                 // } else if (i - 1 >= 0 && this.Type(this.dataStr[i - 1]) == 'operator') {
//                 //     this.action = this.dataStr[i];
//                 } else {
//                     this.action = this.dataStr[i]
//                 }
//             }
//         }
//         return
//     }
//     clearData() {
//         this.currentValue = 0
//         this.firstOperand = ''
//         this.secondOperand = ''
//         this.action = ''
//     }
//         // this.ParseKey()
//         // console.log(this.dataStr)
//         // temp.innerText = this.dataStr.join(' ');
//     }
// // const avinoam = new Calculator(values);
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
