const replay = document.querySelector(".restart");
const check = document.querySelector(".play");
const message = document.querySelector(".message");
const square = document.querySelectorAll(".btn");

let initial = 0;
const selectedSquare = [];

replay.addEventListener("click", ReplayGame);
check.addEventListener("click", Attack);

function ReplayGame() {
  window.location.reload();
}

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", Position);
}

function Position() {
  const id = this.getAttribute("id");
  /*   console.log(id, "id"); */

  if (initial == 0) {
    this.style.background = "gray";
    selectedSquare.push(id);
    console.log(selectedSquare);
    initial++;
  } else if (initial == 1) {
    this.style.background = "brown";
    selectedSquare.push(id);
    initial++;
  } else {
    message.style.color = "red";
    message.textContent = `only two square can be selected`;
  }
}

function Attack() {
  console.log(selectedSquare);
  const correct = String.fromCodePoint(128522);
  const wrong = String.fromCodePoint(128531);
  if (selectedSquare.length !== 2) {
    message.style.color = "black";
    message.textContent = " Make two moves to play!";
    setTimeout(() => {
      message.textContent = "";
    }, 1000);
  } else {
    const index1 = selectedSquare[0];
    const index2 = selectedSquare[1];
  /*   console.log(selectedSquare, index1, index2);
 */
    const unit11 = index1.split("", index1)[0];
    const unit12 = index1.split("", index1)[1];

    const unit21 = index2.split("", index2)[0];
    const unit22 = index2.split("", index2)[1];

    console.log(unit11 - unit12);
    console.log(unit21 - unit22);

    if (unit11 === unit21) {
      message.textContent = `Queen attack sucessful ${correct}`;
    } else if (unit12 === unit22) {
      message.textContent = `Queen attack sucessful ${correct}`;
    }  else if (unit11 - unit12 === unit21 - unit22) {
      message.textContent = `Queen attack sucessful ${correct}`;
  } else if(){
    
  }
  }
}
