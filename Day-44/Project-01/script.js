let btn=document.querySelector('button');
let main=document.querySelector('main');


function DoTheThing(){
    var x=Math.floor(Math.random()*90);
    var y=Math.floor(Math.random()*90);

    //Color
    let c1=Math.floor(Math.random()*255);
    let c2=Math.floor(Math.random()*255);
    let c3=Math.floor(Math.random()*255);

    let br=Math.floor(Math.random()*50);
    let r=Math.random()*360;
    let div=document.createElement('div');
    div.style.height='50px';
    div.style.width='50px';
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    div.style.borderRadius=`${br}px`
    div.style.position='absolute';
    div.style.left=x+"%";
    div.style.top=y+"%";
    div.style.rotate=r+'deg';
    main.appendChild(div);
    console.log(div);
}
btn.addEventListener('click',function(){
    DoTheThing();
})