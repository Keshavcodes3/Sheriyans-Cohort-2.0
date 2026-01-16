//& : Conditional Statements in JavaScript :


let isRaining=true;
if(!isRaining){
    console.log("Go to Play")
}
else{
    console.log("Sit and Study buddy!!!")
}


let a=2;
if(a>12){
    console.log("Hellloo");
}
else{
    console.log("Bye bye");
}



//~Truthy and Falsy :
        //* 1.Truthy : 1,Numbers,Float,Strings , true and everything except the Falsy values
        //* 2.Falsy : " ",null,0,undefined , false ,NaN , document.all

if('hii'){
    console.log("Truthy")
}else{
    console.log("Falsy")
}




//^-------------------------------------------if-else-if---------------------------------------------------//

if(12>23){
    console.log("if chala");   
}else if(13>14){
    console.log("Else if chala");    
}else{
    console.log("Else chala")
}


//^--------------------------------------------Ternary Operator----------------------------------------------

//?condition ? true : False

12>13?console.log("Yes") : console.log("Nope")

//&--------------------------------------------------Switch Case---------------------------------------------

