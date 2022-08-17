const GAME_SIZE = 600;
const SQUARE_SIZE = 20;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const snake = new Snake(SQUARE_SIZE);
const food = new Food();

let currentDirection = "right";
let snakeLength = 1;

function detecKeyPressed() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
      case "ArrowUp":
        currentDirection = "up";
        break;
      case "ArrowDown":
        currentDirection = "down";
        break;

      default:
        break;
    }
  });
}

function clearScreen() {
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
  clearScreen();
  food.draw();
  snake.update();
  if (snake.alive) {
    setTimeout(update, 150);
  } else {
    alert(`Votre Serpent est mort !
Il a atteint une logneur totale de ${snakeLength} blocks
    `);
  }
}

function start() {
  detecKeyPressed();
  update();
}

start();
