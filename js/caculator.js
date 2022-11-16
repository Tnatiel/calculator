

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

// Checks if a given key is operator or number
function is_oper(input_key) {
    opers = ['=', '+', '-', '*', '/']
    if (opers.indexOf(input_key) > -1) {
        return true
    }
    return false
}


function cal(o1, o2, a) {

    if (a == '+') {
        return eval(o1) + eval(o2)
    }

    else if (a == '-') {
        return eval(o1) - eval(o2)
    }

    else if (a =='*') {
        return eval(o1) * eval(o2)
    }

    else if (a == '/') {
        return eval(o1) / eval(o2)
    }    
}

const CalState = {
    cur_val: 0,
    first_op: '',
    second_op: '',
    action: '',
    
    parseKey: function(vals){
        
        let l = vals.length
        for (let i = 0; i < l ; i++) {
            
            if (is_oper(vals[i] == false)) {
                if (this.action == ''){
                    this.first_op += vals[i]
                } else {this.second_op += vals[i]}
            }
            else {
                
                if (this.first_op != '' && this.second_op != '') {
                    if (this.action == '') {
                        this.action = vals[i]
                    }
                    else {
                        let cur_res = cal(this.first_op, this.second_op, this.action)
                        this.action = vals[i]
                    }
                }
            }
        }  
    }

    
}


