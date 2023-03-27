console.log("start game");
let pacManDOM = document.querySelector("#pacMan");

let newTop = 0;
let newLeft = 0;

// add event listener at document to rotate id pacManaccording to keyboard press
document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "ArrowUp") {
    console.log("I press up");
    pacManDOM.style.transform = "rotate(90deg)";
    if (newTop > 0) {
      newTop = newTop - 10;
      pacManDOM.style.top = `${newTop}px`;
    }
  }
  if (event.key === "ArrowDown") {
    pacManDOM.style.transform = "rotate(270deg)";
    if (newTop <= 550) {
      newTop = newTop + 10;
      pacManDOM.style.top = `${newTop}px`;
    }
    // console.log(newTop);
  }
  if (event.key === "ArrowRight") {
    pacManDOM.style.transform = "rotate(180deg)";
    if (newLeft <= 550) {
      newLeft = newLeft + 10;
      pacManDOM.style.left = `${newLeft}px`;
    }
    // console.log(newLeft);
  }
  if (event.key === "ArrowLeft") {
    pacManDOM.style.transform = "rotate(0deg)";
    if (newLeft > 0) {
      newLeft = newLeft - 10;
      pacManDOM.style.left = `${newLeft}px`;
    }
  }
});

// complete the challenge implement newTop and newLeft for ArrowLeft, ArrowUp
