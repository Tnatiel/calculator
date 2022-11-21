

// INFO FUCNTION

document.getElementById('info').addEventListener('click', () => {
    alert(`        Developers name: Natiel
        Calculator version: 1
        Description: A web calculator based on javascript, css and html
    `)
})

//  LIGHTS 
byId('mode').addEventListener('click', () => {
    const screen = byId('screen');
    if (screen.style.backgroundColor !== 'white') {
        screen.style.backgroundColor = 'white'
    } else {
        screen.style.backgroundColor = '#c0ffb8';
    }
});

// push values listener
let values = [];
const numBtns = byClass('btn-num');
const operBtns = byClass('opers');

for (let i = 0; i < numBtns.length; i++) {
    const numBtn = numBtns[i]
    numBtn.addEventListener('click', () => {
    values.push(numBtn.id);
    console.log(values)
    });
}
for (let j = 0; j < operBtns.length; j++) {
    const operBtn = operBtns[j]
    operBtn.addEventListener('click', () => {
    values.push(operBtn.id);
    console.log(values)
})
}

// SCIENCE

function displayScienceSec() {
    if (byId('scientific-sec').style.display !== 'none'){
        byId('scientific-sec').style.display = 'none'
        byId('main-c').style.borderRight = 'solid'
        evalMode = 'Reg'
    } else { 
        byId('scientific-sec').style.display = 'grid';
        byId('main-c').style.borderRight = 'none';
        evalMode = 'Sci'
    }

}

byId('sci').addEventListener('click', displayScienceSec)

// history
function displayHistorySec() {
    if (byId('history-sec').style.display == 'none'){
        byId('history-sec').style.display = 'flex';
        byId('main-c').style.borderLeft = 'none';
    } else { 
        byId('history-sec').style.display = 'none';
        byId('main-c').style.borderLeft = 'solid';
}
}

byId('history-btn').addEventListener('click', displayHistorySec)