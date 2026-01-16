//* CREATE ELEMENT , APPENDCHILD , 

let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let h1=document.createElement('h1');
    h1.innerHTML="Hello From Js";
    h1.style.color='red';
    document.querySelector('main').appendChild(h1);
})