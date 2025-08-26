const box = document.getElementById("moveable");
const boxSize = 80;
const moveAmount = 20;

// Startposisjon
let pos = { x: 40, y: 40 };

// Flytt objektet og hold det synlig
function moveBox(x, y) {
  const maxX = window.innerWidth - boxSize;
  const maxY = window.innerHeight - boxSize;
  pos.x = Math.max(0, Math.min(x, maxX));
  pos.y = Math.max(0, Math.min(y, maxY));
  box.style.left = pos.x + "px";
  box.style.top = pos.y + "px";
}

// Flytt objektet med piltaster
function handleArrowMove(e) {
  switch (e.key) {
    case "ArrowUp":
      moveBox(pos.x, pos.y - moveAmount);
      e.preventDefault();
      break;
    case "ArrowDown":
      moveBox(pos.x, pos.y + moveAmount);
      e.preventDefault();
      break;
    case "ArrowLeft":
      moveBox(pos.x - moveAmount, pos.y);
      e.preventDefault();
      break;
    case "ArrowRight":
      moveBox(pos.x + moveAmount, pos.y);
      e.preventDefault();
      break;
  }
}

// Flytt objektet med museklikk
function handleClick(e) {
  if (e.target === box) return;
  const x = e.clientX - boxSize / 2;
  const y = e.clientY - boxSize / 2;
  moveBox(x, y);
}

// Startposisjon
moveBox(pos.x, pos.y);

// Event Listeners
document.addEventListener("keydown", handleArrowMove);
document.addEventListener("click", handleClick);
window.addEventListener("resize", () => moveBox(pos.x, pos.y));
