// SHORTCUTS
var byId = document.getElementById.bind(document);
var byClass = document.getElementsByClassName.bind(document);
// MY BUTTONS
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// NUMBER BUTTONS
var numBtns = byClass('btn-num');
var values = [];
var operBtns = byClass('opers');
var cal = new Calculator(values);
// console.log(typeof(cal))
// INFO FUCNTION
// const infoBtn: HTMLButtonElement = byId('info')
byId('info').addEventListener('click', function () {
    alert("        Developers name: Natiel\n        Calculator version: 1\n        Description: A web calculator based on javascript, scss and html\n    ");
});
//  LIGHTS 
byId('mode').addEventListener('click', function () {
    var screen = byId('screen');
    if (screen.style.backgroundColor !== 'white') {
        screen.style.backgroundColor = 'white';
        byId('mode').classList.remove('light-on');
    }
    else {
        screen.style.backgroundColor = '#c0ffb8';
        byId('mode').classList.add('light-on');
    }
});
var _loop_1 = function (i) {
    var numBtn = numBtns[i];
    numBtn.addEventListener('click', function () {
        cal.updateScreen(numBtn.id);
        // cal.ParseKey();
        values.push(numBtn.id);
        // console.log(values);
    });
};
// push values listener
for (var i = 0; i < numBtns.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (j) {
    var operBtn = operBtns[j];
    operBtn.addEventListener('click', function () {
        cal.updateScreen(operBtn.id);
        values.push(operBtn.id);
        // console.log(values)
    });
};
for (var j = 0; j < operBtns.length; j++) {
    _loop_2(j);
}
// SCIENCE
byId('sci').addEventListener('click', displayScienceSec);
function displayScienceSec() {
    if (byId('scientific-sec').style.display === 'none' || byId('scientific-sec').style.display === '') {
        byId('scientific-sec').style.display = 'grid';
        byId('main-c').style.borderRight = 'none';
        // cal.state = 'Sci'
    }
    else {
        byId('scientific-sec').style.display = 'none';
        byId('main-c').style.borderRight = 'solid';
        // cal.state = 'Reg'
    }
    return;
}
// HISTORY
byId('history-btn').addEventListener('click', displayHistorySec);
function displayHistorySec() {
    if (byId('history-sec').style.display === 'none' || byId('history-sec').style.display === '') {
        byId('history-sec').style.display = 'grid';
        byId('main-c').style.borderLeft = 'none';
        // cal.state = 'Sci'
    }
    else {
        byId('history-sec').style.display = 'none';
        byId('main-c').style.borderLeft = 'solid';
        // cal.state = 'Reg'
    }
}
