//& Arrays : It's a container that can hold multiple values grouped under a single name

let arr1=[1,2,3,4,5,6]

let arr2=new Array(1,2,3,4,5,6);
console.log(arr1);
console.log(arr2);


//!Accessing Elements of an array
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

//?Functions on Arrays : 

arr1.push(45); //*Add the element in the array
console.log(arr1);


arr1.pop(); //*Removes the last element
console.log(arr1);


arr1.shift() //*Remove one element from beginning
console.log(arr1);

arr1.unshift(457) //*Add one new Element in the beginning
console.log(arr1);


console.log(arr1.indexOf(5)); //*Gives us the index of that element

let duplicateArray=[...arr1] //*Copying one array to another array : Spread Operator [...arr1]
console.log(duplicateArray);


let [a,b]=arr1; //*Destructuring of array
console.log(a,b);





//&Filter , Map and Reduce

let newArr=[1,2,3,4];
let arr3=newArr.filter(function(val){
    return val<4;
})
console.log(arr3);


//&Iterating through Array

for(let i=0;i<newArr.length;i++){
    console.log(newArr[i]);
}

newArr.forEach(function(val){
    console.log(val);
})

for(let x of newArr){
    console.log(x);
}



//*--------------------------------------------------------------------------------------------



