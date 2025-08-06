<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Don't Look Back</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: black;
      overflow: hidden;
      font-family: 'Courier New', Courier, monospace;
    }
    canvas {
      display: block;
      background: black;
    }
    #overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background: rgba(0, 0, 0, 0.8);
      font-size: 36px;
      z-index: 10;
      flex-direction: column;
    }
    .btn {
      background: #ff0000;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      margin-top: 20px;
      cursor: pointer;
      box-shadow: 0 0 10px red;
    }
  </style>
</head>
<body>
  <div id="overlay">
    DON'T LOOK BACK<br>
    <button class="btn" onclick="startGame()">ENTER</button>
  </div>
  <canvas id="game" width="800" height="600"></canvas>
  <script>
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    const overlay = document.getElementById('overlay');

    let player = { x: 400, y: 300, size: 20, speed: 2 };
    let enemy = { x: 100, y: 100, size: 20 };
    let key = { x: 600, y: 450, found: false };
    let door = { x: 750, y: 50 };
    let flashlightOn = true;
    let gameRunning = false;
    let jumpscare = false;

    const keysPressed = {};
    document.addEventListener('keydown', e => {
      keysPressed[e.key] = true;
      if (e.key === 'f') flashlightOn = !flashlightOn;
    });
    document.addEventListener('keyup', e => keysPressed[e.key] = false);

    function startGame() {
      overlay.style.display = 'none';
      gameRunning = true;
      gameLoop();
    }

    function movePlayer() {
      if (keysPressed['ArrowUp']) player.y -= player.speed;
      if (keysPressed['ArrowDown']) player.y += player.speed;
      if (keysPressed['ArrowLeft']) player.x -= player.speed;
      if (keysPressed['ArrowRight']) player.x += player.speed;
      player.x = Math.max(0, Math.min(canvas.width, player.x));
      player.y = Math.max(0, Math.min(canvas.height, player.y));
    }

    function drawScene() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (flashlightOn) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(player.x, player.y, 120, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-in';
        ctx.arc(player.x, player.y, 150, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.restore();
      }

      if (!key.found) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(key.x, key.y, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      if (key.found) {
        ctx.fillStyle = '#00ff00';
        ctx.beginPath();
        ctx.arc(door.x, door.y, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#0ff';
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
      ctx.fill();

      if (!flashlightOn) {
        let dx = player.x - enemy.x;
        let dy = player.y - enemy.y;
        let dist = Math.hypot(dx, dy);
        if (dist > 5) {
          enemy.x += dx / dist * 1.5;
          enemy.y += dy / dist * 1.5;
        }
      }

      ctx.fillStyle = '#f00';
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, enemy.size, 0, Math.PI * 2);
      ctx.fill();

      if (Math.hypot(player.x - key.x, player.y - key.y) < 25) {
        key.found = true;
      }

      if (key.found && Math.hypot(player.x - door.x, player.y - door.y) < 25) {
        endGame("You Escaped...");
      }

      if (Math.hypot(player.x - enemy.x, player.y - enemy.y) < 25) {
        showJumpscare();
      }
    }

    function gameLoop() {
      if (!gameRunning) return;
      movePlayer();
      drawScene();
      requestAnimationFrame(gameLoop);
    }

    function endGame(text) {
      gameRunning = false;
      overlay.innerHTML = text + '<br><button class="btn" onclick="location.reload()">RESTART</button>';
      overlay.style.display = 'flex';
    }

    function showJumpscare() {
      if (!jumpscare) {
        jumpscare = true;
        const img = new Image();
        img.src = 'https://i.imgur.com/klbE84I.png'; // creepy face (change to scarier one if needed)
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          setTimeout(() => {
            endGame("You Were Caught");
          }, 1000);
        }
      }
    }
  </script>
</body>
</html>
