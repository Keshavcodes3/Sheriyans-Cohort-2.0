const para=document.querySelector('p')
const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonopqrstuvwxyz';
const text=para.innerText;

para.addEventListener('mouseenter',(elem)=>{
    setInterval(function(){
        const str=text.split('').map((char,idx)=>{
            return characters.split('')[Math.floor(Math.random()*52)];
        }).join('')
        console.log(str);
        para.innerText=str
    },90)
})

