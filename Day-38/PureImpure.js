//& Pure and Impure Function : 

//?Pure function : who don't change the value of the programe
//?Impute function : who changes the value given

let a=12;
function PureFunction(value){
    console.log(value);
}

PureFunction(8)
//~It is pure function because it doesn't change any value of the global or any variable




function ImpureFunction(){
    console.log(a);
    a+=6;
}

ImpureFunction();
ImpureFunction();
ImpureFunction();