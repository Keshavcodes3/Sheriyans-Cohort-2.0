let arr=[
    {
        'name':"Keshav Chetri",
        'age':17,
        'occupation':'Studnet',
        'color':'deeppink'
    },
    {
        'name':"Sarthak Sarma",
        'age':22,
        'occupation':'Instructor',
        'color':'skyblue'
        
    },
    {
        'name':"Harsh Sharma",
        'age':35,
        'color':'blue',
        'occupation':'Instructor'
    },
    {
        'name':"Ankur Bhaiya",
        'age':23,
        'color':'white',
        'occupation':'Instuctor'
    },
]



let h1=document.querySelector('h1');
let btn=document.querySelector('button');
let body=document.body;

btn.addEventListener('click',function(){
   let a=Math.floor(Math.random()*arr.length);
   h1.textContent=arr[a].name;
   h1.style.color=arr[a].color;
})