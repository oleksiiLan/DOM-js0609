const display = document.querySelector('.calculator .display');

document//цифри
     .querySelectorAll('.digits button')
     .forEach( digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev){
    display.value += ev.target.innerText;
}

document//опрератори
     .querySelectorAll('.opers button')
     .forEach( oper => oper.addEventListener('click', operPressed));

function operPressed(ev){
    display.value += ev.target.innerText;
}
 document.querySelector('.equal').addEventListener('click',equalPressed);
 function equalPressed(){
     display.value = eval(display.value);
 }
const clear = document.querySelector('.clear');
clear.onclick = () => eval(display.value = '');

const minus = document.querySelector('.minus');
minus.onclick = () => eval(display.value -= 1);