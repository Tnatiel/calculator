
class Calculator111 {

    firstOperand: string;
    secondOperand: string;
    action: string;
    lastCalculated: number;
    state: string;
    expressionStorage: string[];
    constructor() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = 0;
        this.state = 'Reg'
        this.expressionStorage = []
        }

    updateScreen(key: string) {
        let temp: HTMLDivElement = byId('screen');
        // console.log(`UpScr given key: ${key}`)
        // console.log(`fir op: ${this.firstOperand} sec op: ${this.secondOperand}`);
        // console.log(`action: ${this.action} last cal: ${this.lastCalculated}`);
        
        temp.innerHTML += `${key}`
    } 

    parseNum (num:string): void {
        if (this.state === 'Reg') {
            const lastChar:string =  byId('screen').innerHTML.slice(-1)
            console.log(`last: ${this.expressionStorage.slice(-1)} res: ${eval(String(this.expressionStorage.slice(-1)))}`)
            if (this.lastCalculated !== 0 &&  this.action === '') { //(this.expressionStorage.length >= 0 && this.lastCalculated === eval(String(this.expressionStorage.slice(-1)))) {
                this.clearData();
                this.firstOperand += num;
                this.updateScreen(num)
            } else if (num === '.' && '1234567890'.includes(lastChar)){
                console.log(this.firstOperand);
                if (this.firstOperand !== '' && this.firstOperand.includes(num) === false) {
                    this.firstOperand += num;
                    this.updateScreen(num);
                } else if (this.secondOperand !== '' && this.secondOperand.includes(num) === false) {
                    this.secondOperand += num;
                    this.updateScreen(num);
                } else {return}
            } else if (this.action === '' && num !== '.') {
                this.firstOperand += num;
                this.updateScreen(num);
            } else if (num !== '.') {
                this.secondOperand += num ; 
                this.updateScreen(num);
            }
        }
        // console.log(`fir op: ${this.firstOperand} sec op: ${this.secondOperand}`);
    }

    parseAction(oper:string) {
        const lastChar:string =  byId('screen').innerHTML.slice(-1);
        if (lastChar === '' || lastChar == '.') {return} 
        if ('+-/*'.includes(lastChar)) {
           byId('screen').innerHTML = byId('screen').innerHTML.slice(0,-1); 
           this.action = oper
           this.updateScreen(oper);
       } 
        else if (this.state === 'Reg') {
             if (this.firstOperand !== '' && this.secondOperand !== ''){
                this.calculate();
                this.action = oper;
                byId('screen').innerHTML = this.lastCalculated;
            } else {
                this.action = oper
                this.updateScreen(oper)
            }
        } else if (this.state === 'Sci') {
            const highOpers = '*/'
            const lowOpers = '-+'
            
        }
    }

    calculate() {
        if (this.state === 'Reg') {
            // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
            let curData: string = this.firstOperand + this.action + this.secondOperand;
            this.expressionStorage.push(curData);
            let res: number = (eval(this.firstOperand + this.action + this.secondOperand));
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res.toString();
            
            
            // console.log(`fir op: ${this.firstOperand}`)
            // this.action = res;
        }
    }

    clearData() {
        // console.log('before "clear')
        // console.log(`fir op: ${this.firstOperand} sec op: ${this.secondOperand}`);
        // console.log(`action: ${this.action} last cal: ${this.lastCalculated}`);
        cal.firstOperand = '';
        cal.secondOperand = '';
        cal.action = '';
        cal.lastCalculated = 0;
        byId('screen').innerHTML = ''
        console.log(this)
    }

    deleteLastKey() {
        const lastKey = byId('screen').innerHTML.slice(-1);
        if (byId('screen').innerHTML.length < 1 || byId('screen').innerHTML == this.lastCalculated) {return}
        else if (this.secondOperand !== '') {

            this.secondOperand = this.secondOperand.slice(0,-1)
        } else if ('+-/*'.includes(lastKey)){
            this.action = ''
        } else {this.firstOperand = this.firstOperand.slice(0, -1)}
            
        byId('screen').innerHTML = byId('screen').innerHTML.slice(0, -1);
        
    }
}



// SHORTCUTS
const byId = document.getElementById.bind(document);
const byClass = document.getElementsByClassName.bind(document);

// NUMBER BUTTONS
const values: string[] = [];


const cal = new Calculator111()

// CREATING MESSAGE DIV
const version = '1'
const pageDiv: HTMLDivElement =document.createElement('div');
const infoDiv: HTMLDivElement =document.createElement('div');
const nameP: HTMLParagraphElement = document.createElement('p'); 
const verP: HTMLParagraphElement = document.createElement('p'); 
const decP: HTMLParagraphElement = document.createElement('p'); 
const pageStyle: HTMLStyleElement = document.createElement('style');
const okBtn :HTMLButtonElement = document.createElement('button');
okBtn.setAttribute('id', 'info-ok-btn');
pageStyle.innerHTML = '.page-wraper {display: none;}';
pageDiv.setAttribute('id', 'page-wraper');
pageDiv.className = 'page-wraper';
infoDiv.setAttribute('id', 'info-wraper');
infoDiv.className = 'info-wraper';
okBtn.innerHTML = 'OK';
nameP.innerHTML = 'Developer name: Natiel';
verP.innerHTML = `Version: ${version}`;
decP.innerHTML = 'Description: A web calculator based on javascript, scss and html'
infoDiv.appendChild(nameP);
infoDiv.appendChild(verP);
infoDiv.appendChild(decP);
pageDiv.appendChild(infoDiv);
pageDiv.appendChild(okBtn)
byId('body').appendChild(pageDiv);
document.querySelector('head')?.appendChild(pageStyle)

// INFO FUCNTION
byId('info').addEventListener('click', () => {
    if (!byId('page-wraper').classList.contains('info-page-shown')) {
        byId('page-wraper').classList.remove('page-wraper')
        byId('page-wraper').classList.add('info-page-shown')
    } else {
        byId('page-wraper').classList.remove('info-page-shown')
        byId('page-wraper').classList.add('page-wraper')
    }
})


byId('info-ok-btn').addEventListener('click', () =>{
    byId('page-wraper').classList.remove('info-page-shown');
    byId('page-wraper').classList.add('page-wraper');
})
//  LIGHTS 
byId('screen-light-btn').addEventListener('click', () => {
    byId('screen').classList.toggle('light-on-screen'); 
    byId('screen-light-btn').classList.toggle('light-on-btn');
});

// CONFIGUE PAGE

// POPUP 
byId('settings').addEventListener('click', () => {
    let params: string =  'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200'
    window.open('/config.html','config', params);
;})

// // GET FORM DATA



//   HANDLAING KEYBOARD
// NUMBER PAD

// document.addEventListener('keyup', (evt): Event => {
//     console.log('hello')
//     console.log(evt.code);
//     if (evt.code >= 'Numpad0' || evt.code >= 'Numpad0'){
//     // if ('1234567890'.includes(evt.code.slice(-1))) 
//         cal.parseNum(evt.code.slice(-1))
//     }
//     evt.stopPropagation()
//     return evt
// })
 

// ******************HANDLE BTNS CLICKS********************
// NUMBER BUTTONS

const numBtns: HTMLButtonElement[] = byClass('btn-num');

for (let i = 0; i < numBtns.length; i++) {
    const numBtn: HTMLButtonElement = numBtns[i]
    numBtn.addEventListener('click', () => {
        if (byId('screen').innerHTML == cal.lastCalculated){
            byId('screen').innerHTML = ''
        }
        cal.parseNum(numBtn.id);
        console.log(`fir op: ${cal.firstOperand} sec op: ${cal.secondOperand}`);
    })
}

const operBtns: HTMLButtonElement[] = byClass('opers');
// OPER BUTTONS
for (let j = 0; j < operBtns.length; j++) {
    const operBtn: HTMLButtonElement = operBtns[j]
    operBtn.addEventListener('click', () => {
    cal.parseAction(operBtn.id);
    });
}

// EQUAL BUTTON
byId("=").addEventListener('click', () => {
    console.log(`fir op: ${cal.firstOperand} sec op: ${cal.secondOperand}`)
    if (cal.firstOperand !== '' && cal.action !== '' && cal.secondOperand !== ''){
        cal.calculate();
        byId('screen').innerHTML = cal.lastCalculated;
    }

})

// C BUTTON

byId('c').addEventListener('click', cal.clearData)

// RETURN BUTTON

byId('return').addEventListener('click', () => {
    console.log(`fir op: ${cal.firstOperand}, sec op: ${cal.secondOperand}`)
    cal.deleteLastKey()})


// SCIENCE

byId('sci-btn').addEventListener('click', () => {
    byId('scientific-sec').classList.toggle('sci-shown-r');
    byId('sci-btn').classList.toggle('light-on-btn')
})


// HISTORY

byId('history-btn').addEventListener('click', () => {
    byId('history-sec').classList.toggle('history-shown-r');
    byId('history-btn').classList.toggle('light-on-btn')
})
