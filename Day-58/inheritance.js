//& Inheritance : 




class Animal{
    constructor(){
        this._age=12;
    }
    set age(val){
        if(val<0){
            console.error('Nope');
            return;
        }
        this._age=val;
        return this._age;
    }
    get age(){
        return this._age;
    }
}


let a1=new Animal();
a1.age=45;
console.log(a1.age);
