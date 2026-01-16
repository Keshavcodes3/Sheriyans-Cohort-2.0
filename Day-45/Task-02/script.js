const state={
    startValue:60,
    timer:null,
    isRunning:false
}

Object.seal(state);
const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');
const h1=document.querySelector('h1');

function render(){
    h1.textContent=state.startValue;
}

start.addEventListener('click',function(){
    if(state.isRunning) return;
    if(state.timer!=null) return;
    if(state.startValue===0)return;
    state.timer=setInterval(()=>{
        render();
        state.startValue--;
        state.isRunning=true;
    },100);

})

stop.addEventListener('click',function(){
    if(!state.isRunning) return;
    clearInterval(state.timer);
    state.isRunning=false;
    state.timer=null;
})

reset.addEventListener('click',function(){
    clearInterval(state.timer);
    state.startValue=60;
    render();
    state.timer=null;
    start.isRunning=false;
})