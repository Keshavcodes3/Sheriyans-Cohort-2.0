//&Loops : When you wanna Execute a block of code repeatedly untill a condition met


//?Straightforward Loops : Naah hee value badalta hein , naa ki printing badalti hein
//?Dynamic Loop : Value bhi  badal sakti hein , Printing bhi badal skta hein

//^------------------------------------For Loop---------------------------------------------------------

for(let i=0;i<20;i++){
    console.log(i)
}


for(let i=10;i>=1;i--){
    console.log(i);
}


for(let i=121;i>=12;i--){
    console.log(i)
}


for(let i=12;i>=1;i--){
    if(i===5 || i===7){
        continue;
    }
    console.log(i)
}

for(let i=12;i>=1;i--){
    if(i!==5 && i!==7){
        console.log(i);
    }
}