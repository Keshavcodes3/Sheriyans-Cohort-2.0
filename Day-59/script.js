//& Introduction to Asynchronous JavaScript

//? JS is a single threaded language , which can only do one thing at a time

//& Callback : a function that doesn't run immediately but when a work is found to be completed

function downloadFile(fn) {
  console.log("Downloading.........");
  fn();
}

downloadFile(function () {
  console.log("File Opened");
});



function process(num,cb){
    cb(num*2)
}

process(3,function(dets){
    console.log(dets);
    
})



function Calculate(add){
    add(1,2);
}

Calculate(function(a,b){
    console.log(a+b);
})

