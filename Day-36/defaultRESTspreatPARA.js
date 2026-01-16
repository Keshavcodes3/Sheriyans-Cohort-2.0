//&Default parameter


function Add(v1=0,v2=0){
    console.log(v1+v2);
    
}

Add(75,5)


//&Rest Parameter : It converts the whole values into an array

//*agar function ke parameter space mein lage toh woo rest prameter hein
function abcd(...rest){
    console.log(rest);
}

abcd(1,2,3,4,5,6,7,8,9,10);



//&Spread