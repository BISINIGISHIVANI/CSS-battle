let hello=document.querySelector('.test');
let out=document.querySelector('#output');
let get=document.URL;
hello.addEventListener('click',clickHandler);
function clickHandler(){
    console.log('ok');
    out.innerHTML=get;
    // out.innerHTML=<p>hi</p>
}