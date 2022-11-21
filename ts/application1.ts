
// SHORTCUTS
const byId = document.getElementById.bind(document);
const byClass = document.getElementsByClassName.bind(document);

                        // MY BUTTONS
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// NUMBER BUTTONS
const numBtns: HTMLButtonElement[] = byClass('btn-num');
const values: string[] = [];
const operBtns: HTMLButtonElement[] = byClass('opers');




const cal = new Calculator(values)

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
        screen.style.backgroundColor = 'white'
        byId('mode').classList.remove('light-on');
    } else {
        screen.style.backgroundColor = '#c0ffb8';
        byId('mode').classList.add('light-on')
    }
});

// CONFIGUE PAGE


// POPUP PAGE
byId('settings').addEventListener('click', () => {
    console.log('why')
    let params: string =  'resizable=no,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,location=no,width=500,height=500,left=900,top=300'
    window.open('http://127.0.0.1:5501/config.html', 'config', params)
})

// GET FORM DATA

const daForm: HTMLFormElement | null = document.getElementById('config-form');
const configData: FormData = new FormData(daForm);

 
// push values listener

for (let i = 0; i < numBtns.length; i++) {
    const numBtn: HTMLButtonElement = numBtns[i]
    numBtn.addEventListener('click', () => {
        cal.updateScreen(numBtn.id);
        // cal.ParseKey();
        values.push(numBtn.id);
        // console.log(values);
    });
}
for (let j = 0; j < operBtns.length; j++) {
    const operBtn: HTMLButtonElement = operBtns[j]
    operBtn.addEventListener('click', () => {
    cal.updateScreen(operBtn.id)
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

