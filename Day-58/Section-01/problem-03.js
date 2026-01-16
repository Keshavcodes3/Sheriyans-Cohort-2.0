class Car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    Drive(){
        return (`Brand : ${this.brand} , Speed : ${this.speed}`)
    }
}


let Car1=new Car('Toyota','300km/h')
let Car2=new Car('Hyundai','180km/h')
console.log(Car1.Drive())
console.log(Car2.Drive())