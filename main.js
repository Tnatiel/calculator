// INFO FUCNTION


function infoButton() {   
    alert(`        Developers name: Natiel
        Calculator version: 1
        Description: A web calculator based on javascript, css and html
    `)
}

// BUTTONS INFO

const buttons = document.getElementsByClassName('btns');

function displayButtonInfo(val)  {
        val.addEventListener('click', alert(val.id));       
    }   


