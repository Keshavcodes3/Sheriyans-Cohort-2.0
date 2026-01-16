
//& We want to make clean , scalable , moduler codes so we use OOP , It simply means breaking down the entire codebase into meaningful code with structure which is easily managable by the programmers



class Sketch{
    constructor(){
        this.character='Doremon';
        this.color='Blue';
        this.someFnc=function(){

        }
    }
    Speak(){

    }
}



let S1=new Sketch();



//^ This is a special keyword ........ The value of this changes dynamically , depends on where we use it !!!

//*Function : Window
console.log(this)


//*es5 Funcions inside obvject : Object


let obj={
    name:'harsh',
    fnc:function(){
        console.log(this.name);
    }
}

obj.fnc()


//*Normal function inside a Normal function inside Object : Window

let obj2={
    name:'harsh',
    fnc:function(){
        function defg(){
            console.log(this.name);
        }
        defg()
    }
}

obj2.fnc()



//*arrow function inside normal function inside an object : Object

let obj3={
    name:'harsh',
    fnc:function(){
        defg=()=>{
            console.log(this.name);
        }
        defg()
    }
}

obj3.fnc()




//&Give me a fuckin Reason why the value of this changes !!!




var a=12;
console.log(this.a);

function h(){
    console.log(this.a);
    
}
h()