const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const scoreDisplay = document.getElementById("score");

let playerX = window.innerWidth / 2 - 20;
let score = 0;
let gameRunning = true;

// Move player with arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 20;
  } else if (e.key === "ArrowRight" && playerX < window.innerWidth - 40) {
    playerX += 20;
  }
  player.style.left = `${playerX}px`;
});

// Create obstacles
function createObstacle() {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  obstacle.style.left = `${Math.random() * (window.innerWidth - 40)}px`;
  obstacle.style.top = "0px";
  gameArea.appendChild(obstacle);

  let obstacleY = 0;
  const moveInterval = setInterval(() => {
    if (!gameRunning) {
      clearInterval(moveInterval);
      return;
    }

    obstacleY += 5;
    obstacle.style.top = `${obstacleY}px`;

    // Collision detection
    const obstacleRect = obstacle.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    if (
      obstacleRect.bottom > playerRect.top &&
      obstacleRect.top < playerRect.bottom &&
      obstacleRect.left < playerRect.right &&
      obstacleRect.right > playerRect.left
    ) {
      gameRunning = false;
      alert("💥 Crash! Game Over.\nYour score: " + score);
      location.reload();
    }

    // Remove obstacle if off screen
    if (obstacleY > window.innerHeight) {
      obstacle.remove();
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }
  }, 30);
}

// Game loop
setInterval(() => {
  if (gameRunning) createObstacle();
}, 1000);
