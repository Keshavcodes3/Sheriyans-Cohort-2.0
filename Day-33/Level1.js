//&-----------------------------------Pure Beginner Practice Problem-----------------------------------------

//?1.Print Numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//~2.Print only even number from 1 to 20
// for (let i = 1; i < 21; i++) {
//   if (i % 2 !== 1) {
//     console.log(i);
//   }
// }

//^3.Print Number 10 to 1

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//*4.Print "Hello" , 5 times

// for (let i = 10; i <= 15; i++) {
//   console.log("Hello");
// }

//?5.Print whether numbers from 1 to 10 are even or odd

// for (let x = 0; x <= 10; x++) {
//   if (x % 2 === 0) {
//     console.log(`${x} - Even`);
//   } else {
//     console.log(`${x} - Odd`);
//   }
// }

//~6.Ask user a number and tell whether it is zero , negative or positive

//!Whenever you take any input from 'prompt' you'll always get a string you can use ParseInt() , Number() or + sign before prompt to convert it into Number

// let number = 0;
// if (number === 0) {
//   console.log("Zero");
// } else if (number > 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

//^7.Ask user for his age and tell whether he is eligible to vote or not

// let age = 12;
// if (age >= 18) {
//   console.log("Eligibke for Vote");
// } else {
//   console.log("Not eligible for Vote");
// }

// age > 18
//   ? console.log("Eligible to Vote")
//   : console.log("Not ELigible to Vote");

//*8.Print Multiplication Table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`${5} * ${i} = ${5 * i}`);
// }

//?9.
// let number1 = prompt("Enter a given number : ");
// number1 = number.trim();
// if (number1 === "" || number1 === null || number1 === NaN) {
//   console.warn("What the fuck bruh");
// } else {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number1}*${i} = ${number1 * i}`);
//   }
// }



//?Enter your age and Choose whether he is eligble for Vote or not ..Handle all cases

// let age=prompt("Enter your age : ");
// if(age===null){
//     console.warn("You Cancelled it !");
// }else{
//     age=age.trim('');
//     if(age===''){
//         console.error('Please write your age !! ');
//     }
//     else{
//         age=Number(age);
//         if(isNaN(age)){
//             console.error("Please Enter a number : ");
//         }
//         else{
//             if(age<0){
//                 console.warn("Please Enter a positive Number : ");
//             }
//             else{
//                 if(age>0 && age<120){
//                     let eligible=(age>=18)?("Eligible for Vote "):("Not Eligible for Vote")
//                     console.log(`Your age is : ${age} and you're ${eligible}`)
//                 }
//                 else{
//                     console.error("Are you alive yet ? Lemme Kill You!")
//                 }
//             }
//         }
//     }
// }


//?Take a input of a number and print the multiplication table of the number and handle all the cases

// let number=prompt("Enter a Number : ");
// if(number===null){
//     console.error("You Cancelled it");
// }
// else{
//     number=number.trim('');
//     if(number===''){
//         console.warn('Please Enter a number!!!');
//     }
//     else{
//         number=parseInt(number);
//         if(isNaN(number)){
//             console.error("Please Enter a number");
//         }
//         else{
//             for(let i=1;i<=10;i++){
//                 console.log(`${number} * ${i} = ${number*i}`)
//             }
//         }
//     }
// }


//?Count how many numbers between 1 and 15 are greater than 8
// let count=0;
// for(let i=1;i<=15;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(`There are ${count} Numbers`)


//?Ask user for password and print access status hardcoded correct password

// let correctPassword="Keshav2008"
// let pass=prompt("Enter password : ")
// if(pass===null){
//     console.warn("Cancelled!!!");
// }else{
//     pass=pass.trim('');
//     if(pass===''){
//         console.warn("Please Enter a valid Password !!");
//     }
//     else{
//         if(pass===correctPassword){
//             console.log('Matched');
//         }
//         else{
//             console.log("Not Matched")
//         }
//     }
// }


//?