
const values = [];

function pass_value(evt) {
    values.push(evt);
    // console.log(x);
    console.log(values);
}

const opers_btns =  document.getElementsByClassName('opers')
// console.log(opers_btns)

for (let i = 0; i < opers_btns.length; i++) {
    const elem = opers_btns[i];
    // opers_btns.addEventListener('click', pass_value(elem.id));
    elem.addEventListener('click', function(){pass_value(elem.id)});
}
