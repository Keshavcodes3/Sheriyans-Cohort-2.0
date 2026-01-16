const board = document.querySelector(".board");
const startBtn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let counts = {
  Score: 0,
  HighScore: localStorage.getItem("high-score"),
  Time: 0,
};

const blocks = [];
const snake = [
  {
    x: 1,
    y: 3,
  },
  {
    x: 1,
    y: 4,
  },
  {
    x: 1,
    y: 5,
  },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText = `${row} ${col}`;
    blocks[`${row}-${col}`] = block;
  }
}
let Head = null;
let interval = null;
let TotalTime = null;

let InfoList = document.querySelector(".info #score");
let Food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let direction = "right";
function render() {
  blocks[`${Food.x}-${Food.y}`].classList.add("food");

  if (direction === "left") {
    Head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    Head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    Head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction == "up") {
    Head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction == "pause") {
    Head = { x: snake[0].x, y: snake[0].y };
    return;
  }
  if (Head.x < 0 || Head.x >= rows || Head.y < 0 || Head.y >= cols) {
    alert("Over");
    counts.Score = 0;
    InfoList.innerHTML = counts.Score;
    clearInterval(interval);
    return;
  }
  snake.unshift(Head);
  snake.forEach((segmant) => {
    blocks[`${segmant.x}-${segmant.y}`].classList.remove("fill");
  });
  snake.pop();
  snake.forEach(function (segmant) {
    blocks[`${segmant.x}-${segmant.y}`].classList.add("fill");
  });
  if (Head.x == Food.x && Head.y == Food.y) {
    blocks[`${Food.x}-${Food.y}`].classList.remove("food");
    Food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${Food.x}-${Food.y}`].classList.remove("food");
    snake.unshift(Head);
    counts.Score++;
    InfoList.innerHTML = counts.Score;
    counts.HighScore = Math.max(counts.Score, counts.HighScore);
    document.querySelector("#high-score").innerHTML = counts.HighScore;
    localStorage.setItem("HighScore", counts.HighScore);
  }
}
// interval = setInterval(function () {
//   render();
// }, 300);
startBtn.addEventListener("click", function () {
  modal.style.display = "none";
  interval = setInterval(() => {
    render();
  }, 300);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "d" || event.key === "ArrowRight") {
    direction = "right";
  } else if (event.key === "a" || event.key === "ArrowLeft") {
    direction = "left";
  } else if (event.key === "w" || event.key === "ArrowUp") {
    direction = "up";
  } else if (event.key === "z" || event.key === "ArrowDown") {
    direction = "down";
  } else if (event.key === "s") {
    direction = "pause";
  }

  // console.log(event.key);
});
