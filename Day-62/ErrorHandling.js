// ?Syntax Error : Mistakes in the format

// *Runtime Error : Code likhte waqt error nhi hein , chalte waqt Error hein

// ^Referance Error :  

// ~Logical Errors : Mistakes in logic (Common sense Error 😂)

// !Understanding Error Object : 

try{
    let a=213;
    console.log(a.name.age);
}
catch(err){
    // console.log(err.name);
    throw new Error('Something went wrong , please wait for som time')
}finally{
    console.log('Helllo');    
}


//?Throw new Error


//!Error Handling in Asynchronous Javascript 

