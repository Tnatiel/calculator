

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
const buttons = document.getElementsByClassName('btns');
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('click', () => {
    values.push(btn.id);
    console.log(values)
})
}
