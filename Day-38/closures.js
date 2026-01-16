//?One function that returns another function but the returning functions should use any variable of the parent functions


function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}
abcd()()

//*Closures are higher order function but all 'Higher Order Functions' are not Closures