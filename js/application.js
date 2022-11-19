

// INFO FUCNTION

document.getElementById('info').addEventListener('click', () => {
    alert(`        Developers name: Natiel
        Calculator version: 1
        Description: A web calculator based on javascript, css and html
    `)
})

//  Darkmode 
document.getElementById('mode').addEventListener('click', () => {
    let modeBtn = document.querySelector("link[href='styles/r-style-opt.css']");
    if (modeBtn !== null) {
        modeBtn.setAttribute("href", "styles/dark-mode.css");
    } else {
        let modeBtn = document.querySelector("link[href='styles/dark-mode.css']");
        modeBtn.setAttribute("href", "styles/r-style-opt.css");
    }

})


const values = [];
function pass_value(evt) {
    values.push(evt);
}

const opers_btns =  document.getElementsByClassName('opers')
const num_btns = document.getElementsByClassName('btn-num')

for (let i = 0; i < opers_btns.length; i++) {
    const oper_btn = opers_btns[i];
    oper_btn.addEventListener('click', function(){pass_value(oper_btn.id)});
}

for (let i = 0; i < num_btns.length; i++) {
    const num_btn = num_btns[i];
    num_btn.addEventListener('click', function(){pass_value(num_btn.id)});
}
