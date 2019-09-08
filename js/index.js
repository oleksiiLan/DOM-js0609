const link = document.querySelector('a');
link.textContent = 'YouTube';
link.href = 'http:www.youtube.com'

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'I hope you enjoy this calculator';
sect.appendChild(para);

const text = document.createTextNode(
    ' — the premier source for web development knowledge.'
);
var linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);
//sect.removeChild(linkPara);
linkPara.parentNode.removeChild(linkPara);

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('chosen');

document .querySelector('.click-me')//подія
    .addEventListener('click',showAlert);

function showAlert(){//вивід події
    alert('clock-clock');
}

const clockDisplay = document.querySelector('.clock');//годинник
setInterval(
    () => (clockDisplay.innerText = new Date().toLocaleTimeString()),//викликаю годинник
    1000
);

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
