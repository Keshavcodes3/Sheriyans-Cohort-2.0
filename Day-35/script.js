//?Allow only 3 Attempts to enter correct password . If user gets it right , early stop.If not- >ACCount blocked

// let correctPass="Keshav123";
// let count=1;
// while(true){
//     let pass=prompt("Enter your password : ");
//     if(count===3 && pass!==correctPass){
//         alert("Account Locked")
//         console.error("Account Locked");
//         break;
//     }
//     if(pass===correctPass){
//         console.log("Password Matched")
//         break;
//     }
//     else{
//         count++;
//     }
// }

//!----------------------------------------------------------------------------------------------------------//

//?Ask user for word untill they type "Stop" , Count how many time he types yes .Loop untill "Stop" is typed . Count 'yes'

// let word=prompt("Enter Word : ");
// let cnt=0;
// while(word!='stop'){
//     if(word=='yes'){
//         cnt++;
//     }
//     word=prompt("Enter Word : ");
// }

// console.log(`Total times yes count ${cnt}`);

//!----------------------------------------------------------------------------------------------------------//

//?Print Numbers divisible  by 7 from 1 to 100

// let x = 1;
// let cnt = 0;
// while (x <= 100) {
//   if (x % 7 === 0) {
//     cnt++;
//   }
//   x++;
// }

// console.log(`Ther's ${cnt} numbers divisible by 7`)


//!----------------------------------------------------------------------------------------------------------//

//?Sum of all Odd numbers from 1 to 30 . Add only odd numbers

// let Sum=0;
// for(let x=1;x<=30;x++){
//     if((x%2)!==0){
//         Sum+=x;
//     }
// }

// console.log(`The Sum is : ${Sum}`);


//!----------------------------------------------------------------------------------------------------------//


//?Keep Asking number untill user enters an even number . Use while loop.Stp only if input is even

// let num=prompt('Enter a number : ');
// num=Number(num)
// while((num%2)!==0){
//     num=prompt('Enter a number : ');
//     num=Number(num)
// }



//?Print numbers between two user inputs .Input start and end using prompt() . Print all between

// let start=prompt("Enter starting number : ")
// let end=prompt("Enter Ending number : ")

// if(start===null || end===null){
//     console.warn("You Cancelled it");
// }else{
//     start=start.trim('');
//     end=end.trim('');
//     if(start==='' || end===''){
//         console.error("Please Enter a number!!")
//     }else{
//         start=Number(start);
//         end=Number(end);
//         let x=start;
//         while(x<=end){
//             console.log(x);
//             x++;
//         }
//     }
// }



//?Print only First 3 odd Numbers from 1 to 20 use loop. Stop the loop using break

// let count=0;
// for(let i=1;i<=20;i++){
//     if(count===3){
//         break;
//     }
//     if((1&i)!=0){
//         console.log(i);
//         count++;
//     }
// }


//?Ask user for 5 Numbers . How many are positive?

// let cnt=1;
// let positive=0;
// while(cnt<=5){
//     let num=prompt("Enter a number : ");
//     if(Number(num)>0){
//         positive++;
//     }
//     cnt++;
// }

// console.log(`Ther're ${positive} Numbers of Positive `)



//?ATM simulator : Allow 3 Withdrawls . Start with 1000 balance , Ask withdrawls amount 3 Times.If enough balance->Deduct balance else "Insufficient Balance";

let balance=1000;
let cnt=0;
while(balance>0){
    if(cnt===3) break;
    let amount=prompt("Enter the withdrawl Amount : ")
    if(amount>balance || balance<=0){
        console.error("Insufficient Balance!!");
        break;
    }
    if(amount<=balance && amount>0){
        balance-=amount;
    }
    cnt++;
}