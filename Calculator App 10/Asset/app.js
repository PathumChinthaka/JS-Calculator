const buttons=document.querySelectorAll('button');
const screen=document.querySelector('.screen');
const clear=document.getElementById('clear');
const btndelete=document.getElementById('delete');

let calculation=[];
let purecalculation;

function calculate(button){

    const btnvalue=button.textContent;

    if(btnvalue==="CLEAR"){
        calculation=[];
        screen.textContent='0';
    }else if(btnvalue==="="){
        screen.textContent= eval(purecalculation);
    }else{
        calculation.push(btnvalue);
        purecalculation= calculation.join('');
        screen.textContent=purecalculation;
    }
}

function clearField(screen){
    calculation=[];
    screen.textContent='0';
}

document.querySelector('#clear').addEventListener('click',clearField);

buttons.forEach(button => button.addEventListener('click',() => calculate(button)));

