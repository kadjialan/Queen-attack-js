const replay = document.querySelector(".restart");
const message = document.querySelector(".messsage");
const square = document.querySelectorAll(".btn");

let initial = 0;
const selectedCell = [];

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
    selectedCell.push(id);
    initial++;
  } else if (initial == 1) {
    this.style.background = "brown";
    selectedCell.push(id);
    initial++;
  } else {
    alert("Only two squares can be selected");
  }
}
