const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set up game variables
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let playerSpeed = 5;
let bulletSpeed = 10;
let bullets = [];
let enemies = [];
let score = 0;

// Draw player
function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(playerX, playerY, 50, 50);
}

// Draw bullets
function drawBullets() {
    for (let i = 0; i < bullets.length; i++) {
        ctx.fillStyle = 'red';
        ctx.fillRect(bullets[i].x, bullets[i].y, 10, 20);
        bullets[i].y -= bulletSpeed;
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
}

// Draw enemies
function drawEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(enemies[i].x, enemies[i].y, 50, 50);
        enemies[i].y += 2;
        if (enemies[i].y > canvas.height) {
            enemies.splice(i, 1);
        }
    }
}

// Check collisions
function checkCollisions() {
    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemies.length; j++) {
            if (bullets[i].x > enemies[j].x && bullets[i].x < enemies[j].x + 50 && bullets[i].y > enemies[j].y && bullets[i].y < enemies[j].y + 50) {
                bullets.splice(i, 1);
                enemies.splice(j, 1);
                score++;
            }
        }
    }
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    drawEnemies();
    checkCollisions();
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Score: ' + score, 10, 10);
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        playerX -= playerSpeed;
    } else if (e.key === 'ArrowRight') {
        playerX += playerSpeed;
    } else if (e.key === ' ') {
        bullets.push({ x: playerX + 25, y: playerY });
    }
});

// Add enemies
setInterval(() => {
    enemies.push({ x: Math.random() * (canvas.width - 50), y: 0 });
}, 1000);

// Main game loop
setInterval(() => {
    draw();
}, 16);
