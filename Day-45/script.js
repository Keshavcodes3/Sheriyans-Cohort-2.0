let btn=document.querySelector('button');
let inner=document.querySelector('.inner');
let h1=document.querySelector('h1');
let a=0;
btn.addEventListener('click',function(){
    let num=Math.floor(Math.random()*100)+50;
    let int=setInterval(()=>{
        a++;
        inner.style.width=a+'%';
        h1.textContent=`${a}%`;
        btn.style.pointerEvents='none';
    },num);
    setTimeout(()=>{
        clearInterval(int);
        btn.innerHTML='Downloaded';
        btn.style.opacity=0.5;
    },num*100)
})