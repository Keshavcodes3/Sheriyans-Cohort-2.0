function run(){
    console.log("Helloooooooooo guysss");
    
}

run();;



//?Whenever you need to execute a block of code you call the function 

let Sum=function(a,b){ //~Parameters
    console.log(a+b);
}

Sum(7,7) //~Arguments




//&Rest parameter


function Add(a,b,...val){
    let sum=0;
    for(let x of val){
        sum+=x;
    }
    console.log(sum+a+b);
    
}

Add(1,2,3,4,5,6,7,8,9,10)


//& Hoisting : 

fnc()

function fnc(){
    console.log('helloo');
    
}


a(); //!Can't access 'a' before initialization

let a=function(){
    console.log("Heeyy");
    
}

b();
var b=function(){
    console.log("Heryyyy");
}



