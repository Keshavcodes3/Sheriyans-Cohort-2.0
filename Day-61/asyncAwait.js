let pr=new Promise((res,rej)=>{
    setTimeout(function(){
       let num=Math.floor(Math.random()*20);
       if(num>=10){
        res(num);
       }else rej(num);
    },2000);
});

pr.then(function(val){
    console.log('Resolved with', val);
    
}).catch(function(err){
    console.log('Rejected with '+ err);
})



function getNum(){
    let pr=new Promise((res,rej)=>{
        setTimeout(function(){
            let num=Math.floor(Math.random()*20);
            if(num>=10){
                res(num);
            }else rej(num);
        },2000);
    });
}

async function abcd(){
    let val=await getNum();
    console.log(val)
}
abcd()