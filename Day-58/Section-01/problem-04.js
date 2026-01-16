class Student{
    constructor(name,rollNo){
        this.name=name;
        this.rollNo=rollNo;
    }
    Introduce(){
        return `Hello Myself ${this.name} , and roll no is : ${this.rollNo}`
    }
}


let Sarthak=new Student('sarthak',20);
console.log(Sarthak.Introduce())

let Keshav=new Student('Keshav',17)
console.log(Keshav.Introduce());



