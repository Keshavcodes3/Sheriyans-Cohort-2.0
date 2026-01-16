let main=document.getElementById('main');
let cursor=document.getElementById('cursor');
main.addEventListener('mousemove',function(elem){
    cursor.style.left=elem.x+'px';
    cursor.style.top=elem.y+'px';
    
})