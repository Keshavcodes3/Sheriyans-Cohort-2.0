let bulb=document.getElementById('bulb');
let button=document.querySelector('button');

let flag=false;

button.addEventListener('click',function(){
    if(!flag){
        bulb.style.backgroundColor='yellow';
        flag=true;
    }else{
        bulb.style.backgroundColor='wheat';
    }
})