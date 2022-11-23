class Calculator111 {

    firstOperand: string;
    secondOperand: string;
    action: string;
    lastCalculated: string;
    state: string;
    screen: HTMLDivElement;
    constructor() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = '';
        this.state = 'Reg'
        }

    updateScreen(key: string) {
        let temp: HTMLDivElement = byId('screen');
        console.log(`UpScr given key: ${key}`)
        temp.innerHTML += `${key}`
    } 

    parseNum (num:string): void {
        if (this.state === 'Reg') {
            const lastChar:string =  byId('screen').innerHTML.slice(-1)
            const numStr: string = '1234567890';
            if (this.lastCalculated == byId('screen').innerHTML) {
                this.clearData()
                this.firstOperand += num
                this.updateScreen(num)
            } else if (num === '.' && numStr.includes(lastChar)){
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
    }

    parseAction(oper:string) {
        if (this.state === 'Reg') {
            const lastChar:string =  byId('screen').innerHTML.slice(-1);
            if (lastChar === '' || lastChar == '.') {
                return
            } else if ('+-/*'.includes(lastChar)) {
                byId('screen').innerHTML = byId('screen').innerHTML.slice(0,-1); 
                this.action = oper
                this.updateScreen(this.action);
            } else if (this.firstOperand !== '' && this.secondOperand !== ''){
                this.calculate();
                this.action = oper
                byId('screen').innerHTML = this.lastCalculated;
            } else {
                this.action = oper
                this.updateScreen(this.action)
            }}}

    calculate() {
        if (this.state === 'Reg') {
            // console.log(`fir op: ${this.firstOperand} act: ${this.action} sec: ${this.secondOperand}`)
            let res: string = eval(this.firstOperand + this.action + this.secondOperand);
            this.clearData();
            this.lastCalculated = res;
            this.firstOperand = res;
            // console.log(`fir op: ${this.firstOperand}`)
            // this.action = res;
        }
    }

    clearData() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = '';
        byId('screen').innerHTML = ''
        
    }

    deleteLastKey() {

        // console.log(`inner: ${(byId('screen').innerHTML)}`);
        // console.log(`last cal: ${this.lastCalculated}`);
        // console.log(`bool: ${byId('screen').innerHTML == this.lastCalculated}`);
        const lastKey = byId('screen').innerHTML.slice(-1);
        if (byId('screen').innerHTML.length < 1 || byId('screen').innerHTML == this.lastCalculated) {return}
        else if (this.secondOperand !== '') {
            // console.log(`fir op type: ${typeof(this.firstOperand)}`)
            // console.log(`fir op: ${this.firstOperand}`)
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

                        // MY BUTTONS
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// NUMBER BUTTONS
const numBtns: HTMLButtonElement[] = byClass('btn-num');
const values: string[] = [];
const operBtns: HTMLButtonElement[] = byClass('opers');




const cal = new Calculator111()

// INFO FUCNTION
const infoBtn: HTMLButtonElement = byId('info')
byId('info').addEventListener('click', () => {
    alert(`        Developers name: Natiel
        Calculator version: 1
        Description: A web calculator based on javascript, scss and html
    `)
});

//  LIGHTS 
byId('mode').addEventListener('click', () => {
    const screen: HTMLDivElement = byId('screen');
    console.log('togg')
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
byId('settings').addEventListener('click', () => {
    let params: string =  'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200'
    // window.open('http://127.0.0.1:5501/config.html', 'config', params)
    window.open('/config.html','config', params);
;})



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

document.addEventListener('keyup', (evt): Event => {
    console.log('hello')
    console.log(evt.code);
    if (evt.code >= 'Numpad0' || evt.code >= 'Numpad0'){
    // if ('1234567890'.includes(evt.code.slice(-1))) 
        cal.parseNum(evt.code.slice(-1))
    }
    evt.stopPropagation()
    return evt
})
 
// HANDLE BTNS CLICKS

// NUMBER BUTTONS


for (let i = 0; i < numBtns.length; i++) {
    const numBtn: HTMLButtonElement = numBtns[i]
    numBtn.addEventListener('click', () => {
        if (byId('screen').innerHTML == cal.lastCalculated){
            byId('screen').innerHTML = ''
        }
        cal.parseNum(numBtn.id);
    })


// OPER BUTTONS

}
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

function displayScienceSec(): void {
    if (byId('scientific-sec').style.display === 'none' || byId('scientific-sec').style.display === ''){
        byId('scientific-sec').style.display = 'grid'
        if (screen.width > 810) {
            byId('main-c').style.borderRight = 'none'
        }
        // cal.state = 'Sci'
    } else { 
        byId('scientific-sec').style.display = 'none';
        byId('main-c').style.borderRight = 'solid 0.1rem';
        // cal.state = 'Reg'
    }
    return
}

byId('sci').addEventListener('click', displayScienceSec)


// HISTORY

function displayHistorySec(): void {
    if (byId('history-sec').style.display === 'none' || byId('history-sec').style.display === ''){
        byId('history-sec').style.display = 'grid';
        if (screen.width > 810) {
            byId('main-c').style.borderLeft = 'none';
        }
        
    } else { 
        byId('history-sec').style.display = 'none';
        if (screen.width > 810) {
            byId('main-c').style.borderLeft = 'solid 0.1rem';
        }
    }
    
}

byId('history-btn').addEventListener('click', displayHistorySec)
