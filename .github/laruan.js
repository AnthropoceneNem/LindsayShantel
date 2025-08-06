const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Node {
  constructor(x, y, size = 10) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
}

class Lizard {
  constructor(segments = 60, segmentLength = 12) {
    this.nodes = [];
    this.segmentLength = segmentLength;

    for (let i = 0; i < segments; i++) {
      this.nodes.push(new Node(mouse.x, mouse.y, segmentLength));
    }
  }

  update() {
    let x = mouse.x;
    let y = mouse.y;

    for (let i = this.nodes.length - 1; i >= 0; i--) {
      const node = this.nodes[i];
      const dx = node.x - x;
      const dy = node.y - y;
      const angle = Math.atan2(dy, dx);

      node.x = x + Math.cos(angle) * this.segmentLength;
      node.y = y + Math.sin(angle) * this.segmentLength;

      x = node.x;
      y = node.y;
    }
  }

  draw() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;

    // Draw spine
    ctx.beginPath();
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const nodeA = this.nodes[i];
      const nodeB = this.nodes[i + 1];
      ctx.moveTo(nodeA.x, nodeA.y);
      ctx.lineTo(nodeB.x, nodeB.y);
    }
    ctx.stroke();

    // Draw legs every few segments
    for (let i = 8; i < this.nodes.length - 10; i += 7) {
      this.drawLeg(this.nodes[i], this.nodes[i + 1], i % 2 === 0 ? 1 : -1);
    }
  }

  drawLeg(node, nextNode, direction = 1) {
    const angle = Math.atan2(nextNode.y - node.y, nextNode.x - node.x);
    const legAngle = angle + Math.PI / 2 * direction;
    const legLength = 20;
    const jointX = node.x + Math.cos(legAngle) * legLength;
    const jointY = node.y + Math.sin(legAngle) * legLength;

    // Upper leg
    ctx.beginPath();
    ctx.moveTo(node.x, node.y);
    ctx.lineTo(jointX, jointY);

    // Lower leg
    const footX = jointX + Math.cos(legAngle) * 15;
    const footY = jointY + Math.sin(legAngle) * 15;
    ctx.lineTo(footX, footY);

    // Fingers
    const fingerSpread = 0.5;
    for (let i = -1; i <= 1; i++) {
      const fingerAngle = legAngle + i * fingerSpread;
      const fx = footX + Math.cos(fingerAngle) * 5;
      const fy = footY + Math.sin(fingerAngle) * 5;
      ctx.moveTo(footX, footY);
      ctx.lineTo(fx, fy);
    }

    ctx.stroke();
  }
}

const lizard = new Lizard();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lizard.update();
  lizard.draw();
  requestAnimationFrame(animate);
}

animate();