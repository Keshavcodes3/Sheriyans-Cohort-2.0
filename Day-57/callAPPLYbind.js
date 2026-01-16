//?Call , Apply , Bind

//*Ek function me this ke value window hoti hein , agar aap chahte ho ki uske value window naa ho par aur koi object ho toh you can use call apply bind


let obj={
    name:"Keshav",
}

function Get(){
    console.log(this);
}

Get()

Get.call(obj);



function abcd(a,b,c,d){
    name:"Harsh"
    console.log(this,a,b,c,d);
}

abcd.apply(obj,[1,2,3,4])


let newFnc=abcd.bind(obj,1,2,3,4) ; //?Ek naya function return karega functions aur ovject ko bind karke

(newFnc());


const obj5={
    name:'keshav',
    method(){
        const arr=()=>{
            console.log(this.name);
        }
        arr();
    }
    
}

obj5.method()