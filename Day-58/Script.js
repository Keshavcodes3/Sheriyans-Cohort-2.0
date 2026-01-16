//& Class Expresion

let Animal = class{
    constructor(){
        this.name='Bakri',
        this.breed='Goat'
    }
    print(){
        console.log(this.name , this.breed);
        
    }
}


let an1=new Animal()
an1.print()
