function sayHello(){
    console.log('Hello JavaScript');
}

sayHello();

//*------------------------------------------------------------------------------------------------*/

let Add=function(a,b){
    return a+b;
}
let result=Add(3,4);
console.log(result);

//*------------------------------------------------------------------------------------------------*/


function sayName(name="Guest"){
    console.log(`Hello ${name}`)
}

sayName('Keshav')
sayName()
//*------------------------------------------------------------------------------------------------*/

function Summation(...val){
    let sum=0;
    for(let x of val){
        sum+=x;
    }
    return sum;
}

let result1=Summation(1,2,3,4,5,6)
console.log(result1);


//*------------------------------------------------------------------------------------------------*/


(function IIFE(){
    console.log("I run Instantly");
})()


//*------------------------------------------------------------------------------------------------*/

function Outer(){
    let a=34;
    function inner(){
        console.log(a);
    }
    inner();
}

Outer();

//*------------------------------------------------------------------------------------------------*/

let fruits=['apple','mango','grapes','Guava','Banana'];
fruits.push('Berry')
console.log(fruits);
fruits.shift()
console.log(fruits);



//*------------------------------------------------------------------------------------------------*/

let arr=[1,2,3,4,5,6,7]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//*------------------------------------------------------------------------------------------------*/


let person={
    name:"Keshav",
    age:17,
    city:"Duliajan"
}

for(let x in person){
    console.log(x,person[x]);
}

//*------------------------------------------------------------------------------------------------*/

setTimeout(function(){
    console.log("Time is up");
},100)
//*------------------------------------------------------------------------------------------------*/
