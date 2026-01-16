var allElem=document.querySelectorAll('.elem');
let AllFullElems=document.querySelectorAll('.fullElem');
let AllFullElemsbackBtn=document.querySelectorAll('.fullElem .back ')
allElem.forEach(function(elem){
    elem.addEventListener('click',function(){
        
        AllFullElems[elem.id].style.display='block'; 
    })
})

AllFullElemsbackBtn.forEach(function(back){
    back.addEventListener('click',function(){
        AllFullElems[back.id].style.display='none';
        
    })
    
})