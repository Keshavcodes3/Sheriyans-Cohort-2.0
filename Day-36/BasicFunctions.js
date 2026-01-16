//& Function : 


//*Function Declaration
function Dance(){
    console.log('Dance');
}

Dance();      //*Function Call
Dance();      //*Function Call



function Wishme(name){
    console.log(`Happy New year ${name}`);
}

Wishme('keshav');;


//?----------------------------------------------------------------------------------------------


//*Function Expression
let fnc=function(name){
    console.log(`Happy New year ${name}`)
}

fnc('keshav');;



//?----------------------------------------------------------------------------------------------

//*Fat Arrow Functions

let eat=()=>{
    console.log("I am Eating");
}
eat();;



//?----------------------------------------------------------------------------------------------

function Dance1(v1){
    console.log(`${v1} Naach rha hein`);
}

Dance1('Ghoda')
Dance1("Hiron")
Dance1("Cheel")
Dance1("Horse");;


//?----------------------------------------------------------------------------------------------

function Add(v1,v2){
    console.log(v1+v2);
    
}
Add(3,4);;

//?----------------------------------------------------------------------------------------------


function Introduce(name,age,email){
    console.log(arguments)
}

Introduce('keshav',17,'keshavcode0@gmail.com')