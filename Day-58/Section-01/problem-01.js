//? Q1 : Create a user object that stores name and email and has a login method which prints " User logged in"

let User = {
  Name: "Keshav Chetri",
  Email: "keshavcodes0@gmail.com",
  Login: function () {
    console.log(`${this.Name} , Logged in`);
  },
};

User.Login();

//?Imagine the scenerio you have 5 Users , How would you handle this without using class ? Write code for both scenerio with classses and without

let User1={
    Name:"Keshav Chetri",
    Email:'keshavcodes0@gmail.com',
    Login:function(){
        console.log(`${this.Name} , Logged in`);
    }
}
let User2={
    Name:"Keshav Chetri",
    Email:'keshavcodes0@gmail.com',
    Login:function(){
        console.log(`${this.Name} , Logged in`);
    }
}
let User3={
    Name:"Keshav Chetri",
    Email:'keshavcodes0@gmail.com',
    Login:function(){
        console.log(`${this.Name} , Logged in`);
    }
}
let User4={
    Name:"Keshav Chetri",
    Email:'keshavcodes0@gmail.com',
    Login:function(){
        console.log(`${this.Name} , Logged in`);
    }
}
let User5={
    Name:"Keshav Chetri",
    Email:'keshavcodes0@gmail.com',
    Login:function(){
        console.log(`${this.Name} , Logged in`);
    }
}


//***Using clasees */


class Users{
    constructor(name,Email){
        this.name=name;
        this.Email=Email;
    }

    Login(){
        console.log(`${this.name} , Logged in`);
    }

}


let u1=new Users('keshav','keshavcodes0@gmail.com')
console.log(u1);

let u2=new Users('Harsh','keshavcodes0@gmail.com')
console.log(u2)


