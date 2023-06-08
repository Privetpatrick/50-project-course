const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");

let size = 20;
let isPressed = false;
let color = colorEl.value;
let x;
let y;

renderSize();

clearBtn.addEventListener("click", () => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

incBtn.addEventListener("click", () => {
  if (size >= 50) return;
  size += 5;
  renderSize();
});

decBtn.addEventListener("click", () => {
  if (size <= 5) return;
  size -= 5;
  renderSize();
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function renderSize() {
  sizeEl.innerText = size;
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
