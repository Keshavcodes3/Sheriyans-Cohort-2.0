
function Abcd(){
    console.log(this.name);
}

let obj={
    name:"Harsh"
}

Abcd.call(obj)

