//?Write a high order function runTwice(N) 

function runTwice(fn){
    fn();
    fn();
}

runTwice(function(){
    console.log("Hello");
})

//&-------------------------------------------------------------------------------------------------


function PureFunction(a,b){
    console.log(a+b);
}

PureFunction(4,4)
PureFunction(4,4)


//&-------------------------------------------------------------------------------------------------


let global=0;
function ImpureFunction(a){
    global++;
    console.log(a+global);
}

ImpureFunction(2)
ImpureFunction(2)
//&-------------------------------------------------------------------------------------------------


function printName({name,age,qualification}){
    console.log(name);
    console.log(age);
    console.log(qualification);
}

printName({name:"Keshav",age:17,'qualification':'BSC 2nd sem'})

//&-------------------------------------------------------------------------------------------------


//^* This keyword :  

console.log(this); //in global scope : Window

function b(){
    console.log(this); //in functiobn global
}
b()





//&-------------------------------------------------------------------------------------------------


//~Difference between normal function and arrow function when used as a object method



let obj={
    name:"keshav",
    fnc:function(){
        console.log(this); //Object
    },
    fnc2:()=>{
        console.log(this);
        
    }
}

//!Arrow function apne parent se value leta hein

obj.fnc() //Object
obj.fnc2() //Window


//&-------------------------------------------------------------------------------------------------


let arr=[1,2,3,4,5,6,7,8,9]
let newArr=arr.map(function(val){
    return val*val;
})
console.log(newArr);

//&-------------------------------------------------------------------------------------------------



let arr2=arr.filter(function(val){
    if((val&1)===0){
        return val;
    }
})
console.log(arr2);

//&-------------------------------------------------------------------------------------------------



let salary=[1000,2000,3000,4000,5000];
let total=salary.reduce(function(acc,val){
    return acc+val;
},0)

console.log(total);

//&-------------------------------------------------------------------------------------------------



let names=['keshav','abhi','harsh','satwik','ankur','sarthak'];
let ans =names.every(function(name){
    return name.length>2;
})
console.log(ans);



//&-------------------------------------------------------------------------------------------------


let user={
    name:"Harsh",
    age:17
}
Object.freeze(user);; //?Freezes the object means you can't modify
user.age=45;
console.log(user);


//&-------------------------------------------------------------------------------------------------




let user1={
    user:{
        name:"Keshav",
        address:{
            city:"Duliajan"
        },
    },
};

let {city}=user1.user.address;
console.log(city);







//&-------------------------------------------------------------------------------------------------











//&-------------------------------------------------------------------------------------------------








//&-------------------------------------------------------------------------------------------------







//&-------------------------------------------------------------------------------------------------