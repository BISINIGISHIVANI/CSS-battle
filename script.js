let hello=document.querySelector('.test');
let out=document.querySelector('#output')
hello.addEventListener('click',clickHandler);
function clickHandler(){
    console.log('ok');
    out.innerText='hello shivani';
}