let img=document.querySelector('img');
let i=document.querySelector('i');
let likeCount=0;



img.addEventListener('dblclick',function(){
    i.style.transform='translate(-50%,-50%) scale(1.5) rotate(0)';
    
    i.style.opacity='1.3';

})