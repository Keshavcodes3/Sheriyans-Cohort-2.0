const quotes = [
  {
    quote: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
    bgColor: "#0F172A",
    textColor: "#E5E7EB"
  },
  {
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    author: "James Clear",
    bgColor: "#111827",
    textColor: "#F9FAFB"
  },
  {
    quote: "Silence and focus are forms of power.",
    author: "Unknown",
    bgColor: "#1F2933",
    textColor: "#D1D5DB"
  },
  {
    quote: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    bgColor: "#0B132B",
    textColor: "#EAEAEA"
  },
  {
    quote: "Work quietly. Let results make the noise.",
    author: "Unknown",
    bgColor: "#1C1917",
    textColor: "#FAFAF9"
  },
  {
    quote: "Suffer the pain of discipline or suffer the pain of regret.",
    author: "Jim Rohn",
    bgColor: "#020617",
    textColor: "#CBD5E1"
  },
  {
    quote: "Consistency beats intensity when intensity is inconsistent.",
    author: "Unknown",
    bgColor: "#1E293B",
    textColor: "#F1F5F9"
  },
  {
    quote: "Focus is saying no to a thousand good things.",
    author: "Steve Jobs",
    bgColor: "#020617",
    textColor: "#E2E8F0"
  },
  {
    quote: "Train your mind to be calm in chaos.",
    author: "Marcus Aurelius",
    bgColor: "#0A0A0A",
    textColor: "#EDEDED"
  },
  {
    quote: "Average effort produces average results.",
    author: "Unknown",
    bgColor: "#18181B",
    textColor: "#F4F4F5"
  }
];

let main=document.querySelector('main');
let btn=document.querySelector('button');

btn.addEventListener('click',function(){
    let x=Math.floor(Math.random()*80);
    let y=Math.floor(Math.random()*80);
    let h1=document.createElement('h1');
    let Random=Math.floor(Math.random()*quotes.length);
    h1.style.color=quotes[Random].textColor;
    h1.style.fontSize='12px';
    h1.style.position='absolute';
    h1.style.left=x+'%';
    h1.style.top=y+'%';
    h1.style.rotate=Math.floor(Math.random()*100)+'deg';
    h1.innerText=quotes[Random].quote;
    h1.style.color=quotes[Math.floor(Math.random()*quotes.length)].textColor;
    main.appendChild(h1);
    
    
})