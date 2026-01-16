const para=document.querySelector('p');
const characters='abcdefghijklmnopqrstuvwxyzAVCDEFGHIJKLMNOPQRSTUVWXYZ'
const text=para.innerText;

let iteration=0;

function RandomText(){
    const str=text.split('').map((char,idx)=>{
        if(iteration>idx){
            return char;
            
        }
        return characters.split('')[Math.floor(Math.random()*52)];
    }).join('');
    para.innerText=str;
    iteration+=0.7;
    
}



setInterval(RandomText,50)