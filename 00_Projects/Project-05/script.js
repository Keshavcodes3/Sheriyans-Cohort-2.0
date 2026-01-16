

function CreateBody(element){
    let body=document.createElement('div');
    body.style.width='100%';
    body.style.height='87.6%';
    body.style.backgroundColor='#ac8888f8';
    body.style.position='absolute';
    body.style.padding='10px';
    body.style.display='flex';
    body.style.gap='20px';
    let left=document.createElement('div');
    left.style.width='20%';
    left.style.borderRadius='15px';
    //?Create Left Element
    
    
    left.style.backgroundColor='deeppink';
    let Right=document.createElement('div');
    Right.style.width='70%';
    Right.style.borderRadius='15px';
    Right.style.backgroundColor='skyblue';
    


    body.appendChild(left);
    body.appendChild(Right);

    body.style.top='60px'
    body.style.borderRadius='15px'
    element.appendChild(body);

}

function CreateElement(element){
    let div=document.createElement('div');
    div.style.position='absolute'
    div.style.height='500px';
    div.style.width='900px';
    div.style.left='50%';
    div.style.top='50%';
    div.style.transform=`translate(-50%,-50%)`;
    div.style.backgroundColor='#3e3a3af8';
    div.style.borderRadius='15px';
    div.style.display='flex';
    div.style.overflow='hidden'

    //?Header
    let Header=document.createElement('div');
    Header.style.width='100%';
    Header.style.height='55px';
    Header.style.padding='15px'
    Header.style.backgroundColor='rgba(115, 88, 88, 1)';
    Header.style.display='flex';
    Header.style.alignItems='center';
    Header.style.justifyContent='space-between';

    //?label
    let label=document.createElement('div');
    label.style.padding='16px'
    let h1=document.createElement('h1');   
    label.style.borderRadius='15px'; 
    h1.textContent=element.id;
    h1.style.color='rgb(20, 152, 193)';
    label.appendChild(h1);
    Header.appendChild(label);

    //?Right
    let div1=document.createElement('div');
    div1.style.display='flex';
    div1.style.borderRadius='15px'
    div1.style.alignItems='center';
    div1.style.gap='15px';

    div.appendChild(Header)

    CreateBody(div);
    document.querySelector('.body').appendChild(div);

}




document.addEventListener('click',function(e){
    const folder=e.target.closest('.icons');
    if(!folder){
        return;
    }
    document.querySelectorAll('.icons').forEach(function(ele){
        ele.classList.remove('clicked');
    })
    folder.classList.add('clicked');
})

let done='opened';
document.addEventListener('dblclick',function(e){
    const folder=e.target.closest('.icons');
    if(!folder){
        return;
    }
    if(done!='opened'){
        CreateElement(folder);
    }else{
        done='not';
    }
    
})

window.addEventListener('keydown')