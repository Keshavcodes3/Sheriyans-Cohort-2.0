let body=document.body;

let SoundsObj={
    C:'./Sound/28.mp3',
    D:'./Sound/29.mp3',
    E:'./Sound/30.mp3',
    F:'./Sound/31.mp3',
    G:'./Sound/32.mp3',
    A:'./Sound/33.mp3',
    B:"./Sound/34.mp3",
    'A-sharp':'./Sound/35.mp3',
    'C-sharp':'./Sound/36.mp3',
    'D-sharp':'./Sound/37.mp3',
    'F-sharp':'./Sound/38.mp3',
    'G-sharp':'./Sound/39.mp3',
}

let octave=document.querySelectorAll('.octave');

octave.forEach((elem)=>{
    elem.addEventListener('click',function(e){
        let current=(e.target.closest('div').id);
        let small=document.querySelector('small');
        small.textContent=current;
        small.style.fontSize='45px';
        small.style.fontWeight="900";
        small.style.color='red';
        let Sound=SoundsObj[current];
        if(!Sound) return;
        let audio=new Audio(Sound);
        audio.play();
    })
})

