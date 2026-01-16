//&Operators : 

//*1️⃣ Arithmetic Operator : + - * / % 

console.log(12+13)
console.log(12-6)
console.log(12/6)
console.log(12%6)
console.log(12**2)


//---------------------------------------------------------------------------------------------------//
//*2️⃣Assignment Operator : = -= += *= /= %=

let a=12;
let b=23;
a+=b 
a-=b 
a*=b
a/=b 
a%=b 


//---------------------------------------------------------------------------------------------------//


//*3️⃣Comparison Operator : == , === , != , !== , < ,>, <= , >=

//!== -> Not strict compare which only checks values not data Type ,never use this 

//?use (===) this which checks the values as well as the data Type

//^ !== -> is the values of left side is not equal to the right side ? (checks values and data type as well)

//~ > , < , <= , >= --> Come on you know it


//---------------------------------------------------------------------------------------------------//

//*4️⃣ Logical Operators : && , || , !

//---------------------------------------------------------------------------------------------------//

//*5️⃣Ternary Operator :

//?condition ? doThis : doThat
console.log((a==12)?"Hello i am True":"Nope i am not")
let age=19;
console.log((age>=18)?"Eligible for Vote":"Not Eligible")



//---------------------------------------------------------------------------------------------------//

//*6️⃣ Type Checking Operator : typeof , instanceof

console.log(typeof age);
console.log(typeof 'Hello');
let arr=[]
console.log(arr instanceof Array)


//---------------------------------------------------------------------------------------------------//


//*7️⃣String Operator : +(for concatanation)
let firstName="Keshav"
let lastName=" Chetri"
console.log(firstName+lastName);




//*8️⃣Spread / Rest Operator : 


//---------------------------------------------------------------------------------------------------//
//* 9️⃣ Nullish Operattor : Fallback only when null/undefiend

console.log(null ??"Sorryy")


//---------------------------------------------------------------------------------------------------//
//* 🔟 Optional Chaining : (?.)  objects