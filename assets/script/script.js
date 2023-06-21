const replay = document.querySelector(".restart");
const message = document.querySelector(".message");
const square = document.querySelectorAll(".btn");

let initial = 0;
const selectedSquare = [];

replay.addEventListener("click", replayGame);

function replayGame() {
  window.location.reload();
}

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", Position);
}

function Position() {
  const id = this.getAttribute("id");
  console.log(id, "id");

  const selectedIndex = 1;
  console.log(selectedIndex, "selected index");

  if (initial == 0) {
    this.style.background = "gray";
    selectedSquare.push(parseInt(id));
    console.log(selectedSquare);
    initial++;
  } else if (initial == 1) {
    this.style.background = "brown";
    selectedSquare.push(parseInt(id));
    initial++;
  } else {
    message.style.color = "red";
    message.textContent = "only two square can be selected";
  }
}
