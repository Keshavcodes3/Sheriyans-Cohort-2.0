//& Ek aisa function jo ki return karde ek aur function ko return kar de yaa toh wo function accept karle uske parameter mein


function abcd(){ //*Higher Order function
    return function bcde(){
        console.log("Hello");
    }
}


abcd()()



function a(b){
    b();
}


a(function(){
    console.log(12);
});;




//?Callback : 

function abcde(a){

}

abcde(function(){
    //~This passed function is known as Callback
})








//*-----------------------------------First class Function------------------------------------*

//^ek concept hein , function us language mein (jis mein avaliable hein) variable/value ke tarah use ho sakta hein


function abcdef(a,b){

}


abcdef(function(){
    
},12)