

class Calculator1 {

    firstOperand: string;
    secondOperand: string;
    action: string;
    lastCalculated: number;
    state: string;
    screen: HTMLDivElement;
    constructor() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.action = '';
        this.lastCalculated = 0;
        this.state = 'Reg'
        this.screen = calById('screen');
    }

    updateScreen(key: string) {
        let temp: HTMLDivElement = calById('screen');
        temp.innerHTML += `${key}`
    } 

    parseNum (num:string): void {
        if (this.state === 'Reg') {
            const lastChar:string = this.screen.innerHTML.slice(-1)
            if (num === '.' && !'+-/*'.includes(lastChar)){
                console.log(lastChar)
                console.log(!'+-/X'.includes(lastChar))
                if (this.firstOperand.length > 0 && !this.firstOperand.includes(num)) {
                    this.firstOperand += num;
                    this.updateScreen(num);
                } else if (this.secondOperand.length > 0 && !this.secondOperand.includes(num)) {
                    this.secondOperand += num;
                    this.updateScreen(num);
                }
            } else if (this.action === '') {
                this.firstOperand += num;
                this.updateScreen(num);
            } else {this.secondOperand += num ; cal.updateScreen(num)}
        }
    }

    parseAction(oper:string) {
        if (this.state === 'Reg') {
            console.log((this.screen.innerHTML.slice(-1)))
            // console.log(typeof(this.screen.innerText[-1]))
            const lastChar:string = this.screen.innerHTML.slice(-1)
            if (lastChar === '' || lastChar == '.') return
            if ('+-/*'.includes(lastChar)) {
                this.screen.innerHTML = this.screen.innerHTML.slice(0,-1); 
                this.updateScreen(oper);
            } else {this.screen.innerHTML += oper;}
            this.action = oper;
        }
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




const cal = new Calculator1()

// INFO FUCNTION
// const infoBtn: HTMLButtonElement = byId('info')
byId('info').addEventListener('click', () => {
    alert(`        Developers name: Natiel
        Calculator version: 1
        Description: A web calculator based on javascript, scss and html
    `)
});

//  LIGHTS 
byId('mode').addEventListener('click', () => {
    const screen: HTMLDivElement = byId('screen');
    if (screen.style.backgroundColor !== 'white') {
        // console.log(typeof(byId('wrap').classList))
        
        screen.style.backgroundColor = 'white';
        byId('mode').classList.remove('light-on');
    } else {
        if (byId('body').classList.contains('dark-body')) {
            screen.style.backgroundColor = '#83ff2350';
        } else {
            screen.style.backgroundColor = '#c0ffb8';
            byId('mode').classList.add('light-on')
        }
    }
});

// CONFIGUE PAGE

// function getParams(url: string): any {
//     let params = new searc (url).searchParams;
//     let relvantData = [params.get('font'), params.get('color'), params.get('mode')] ;
//     console.log(relvantData);
// }

// POPUP PAGE
const dBase = localStorage.setItem('color', 'font')
// byId('settings').addEventListener('click', getParams, () => {
    // let params: string =  'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=600,height=500,left=300,top=200'
    // window.open('http://127.0.0.1:5501/config.html', 'config', params)
    // window.open('/config.html');
    // getParams(window.location.href);



// GET FORM DATA
// console.log(document.querySelector('.sub-btn'));

    // const dataUrl: string = window.location.href;
    // console.log(dataUrl);


let params = new URLSearchParams('/config.html')
console.log(params)


// const daForm: HTMLFormElement | null = document.getElementById('config-form');
// const configData: FormData = new FormData(daForm);

 
// push values listener

for (let i = 0; i < numBtns.length; i++) {
    const numBtn: HTMLButtonElement = numBtns[i]
    numBtn.addEventListener('click', () => {
        cal.parseNum(numBtn.id);
        values.push(numBtn.id);
        // console.log(values);
    });
}
for (let j = 0; j < operBtns.length; j++) {
    const operBtn: HTMLButtonElement = operBtns[j]
    operBtn.addEventListener('click', () => {
    cal.parseAction(operBtn.id);
    values.push(operBtn.id);
    // console.log(values)
    });
}

// SCIENCE

byId('sci').addEventListener('click', displayScienceSec)

function displayScienceSec():undefined {
    if (byId('scientific-sec').style.display === 'none' || byId('scientific-sec').style.display === ''){
        byId('scientific-sec').style.display = 'grid'
        byId('main-c').style.borderRight = 'none'
        // cal.state = 'Sci'
    } else { 
        byId('scientific-sec').style.display = 'none';
        byId('main-c').style.borderRight = 'solid';
        // cal.state = 'Reg'
    }
    return
}

// HISTORY
byId('history-btn').addEventListener('click', displayHistorySec)

function displayHistorySec() {
    if (byId('history-sec').style.display === 'none' || byId('history-sec').style.display === ''){
        byId('history-sec').style.display = 'grid'
        byId('main-c').style.borderLeft = 'none'
        // cal.state = 'Sci'
    } else { 
        byId('history-sec').style.display = 'none';
        byId('main-c').style.borderLeft = 'solid';
        // cal.state = 'Reg'
    }

}

