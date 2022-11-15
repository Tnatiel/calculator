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


function is_oper(input_key) {
    opers = ['=', '+', '-', '*', '/']
    if (opers.indexOf(input_key) > -1) {
        return true
    }
    return false
}

const CalState = {
    cur_val: 0,
    first_op: '',
    second_op: '',
    action: '',
    

    evalState: function() {
        return eval(this.first_op + this.action + this.second_op)
    },


    parseKey: function(){
        const cur_state = this.evalState()
    for (let i = 0; i + 1 < cur_state; i++) {
        if (is_oper(cur_state == true))
        if (is_oper(e) == true) {

        }
    }  
    }
            
        
    }

