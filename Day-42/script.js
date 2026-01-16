let h2=document.querySelector("h2");
let increase=document.getElementById('increase');
let decrease=document.getElementById('decrease');
let reset=document.getElementById('reset')
let value=0;
increase.addEventListener('click',function(){
    value++;
    h2.textContent=`${value}`;
})

decrease.addEventListener('click',function(){
    value--;
    if(value<=0){
        value=0;
    }
    h2.textContent=value;
})

reset.addEventListener('click',function(){
    h2.textContent=0;
    value=0;
})