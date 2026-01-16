const users = [
  {
    fullName: "Mitsuri Kanroji",
    image: "Images/mitsuri.png",
    profession: "Love Hashira",
    description:
      "A cheerful and emotional Demon Slayer known for her flexibility, speed, and unique Love Breathing style.",
    tags: ["mitsuri"]
  },
  {
    fullName: "Kyojuro Rengoku",
    image: "Images/Renguku.webp",
    profession: "Flame Hashira",
    description:
      "A passionate and honorable warrior who believes in protecting the weak with an unbreakable spirit.",
    tags: ["rengoku"]
  },
  {
    fullName: "Tanjiro Kamado",
    image: "./Images/tanjiro.jpg",
    profession: "Hinakami Kagura",
    description:
      "A kind-hearted boy with a strong sense of justice, determined to cure his sister and defeat demons.",
    tags: ["tanjiro"]
  },
  {
    fullName: "Zenitsu Agatsuma",
    image: "./Images/Zenitsu.jpg",
    profession: "Thunder Breathing Swordsman",
    description:
      "A fearful yet powerful swordsman who unleashes incredible strength when pushed beyond his limits.",
    tags: ["zenitsu"]
  },
];


let sum=0;
users.forEach(function(elem){
    sum+=`<div class="card">
            <img src= ${elem.image} alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`;  
    
})

let main=document.querySelector('main');
main.innerHTML=sum;