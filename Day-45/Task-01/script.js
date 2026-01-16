let h1=document.querySelector('h1');
let start=document.querySelector('.start');
let stop=document.querySelector('.stop');
let reset=document.querySelector('.reset');

let val=0;
let time=null;
let isRunning=false;
start.addEventListener('click',function(){
    if(time!=null) return;
    if(isRunning) return;
    time=setInterval(()=>{
        h1.textContent=val;
        val++;
    },200)
})

stop.addEventListener('click',function(){
    clearInterval(time);
    time=null;
    isRunning=false;
})

reset.addEventListener('click',function(){
    clearInterval(time);
    time=null;
    val=0;
    h1.textContent=val;
    isRunning=false;
})