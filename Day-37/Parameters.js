//& PArameters in JavaScript : ['required', 'destructured' , 'rest' , 'default']



//* Required */

function abcd(a,b,c,d){
    //!Agar aapne parameters mein value accept kiya aur arguments mein nhi bheja toh by defaullt ye undefined hogaaa
    console.log(a,b,c,d);
}

abcd()


//*Destrutured */


function abc({name,age}){
    console.log(name,age);
    
}

abc({'name':"Keshav",'age':17})


//* Rest Operator : */

function Sum(...val){
    //~ye arguments ke sab value ko array mein convert karta hein
    console.log(val);
    
}

Sum(1,2,3,4,5,6,7,8,9)



//*Default */

let add=(a=0,b=0)=>{
    console.log(a+b);
}

add(1,2)



//*Spread*/

let arr=[1,2,3,4]
abcd(...arr)




//* Nested Functions/

function abcde(){
    function bcdef(){
        console.log("Hello Guys");
    }
    bcdef();
}

abcde()


//* Scope Chain */


let a=12; //& Global scope: You can use this anywhere in the program
function bcd(){
    let b=13; //& It can be accessed only within bcd function not outside anywhere
    function cde(){
        let c=34;
    }
}




//* IIFE (Immediately invoked function expression) : Use it to make private variables */

(function(){
    console.log('hello');
    let balance=10000;
})()




//* Fat Arrow Function 

let d=(...val)=>{
    console.log('hello');
}



//*Anonymous Function : Without name


