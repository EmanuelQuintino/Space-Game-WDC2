const inputName = document.querySelector("#name");
const newGameForm = document.querySelector("#newGameForm");
const buttonRank = document.querySelector(".buttonRank");

function handleSubmitNewGame(event) {
  event.preventDefault();
  localStorage.setItem("@spaceshipGame:playerName", inputName.value);
}

newGameForm.addEventListener("submit", handleSubmitNewGame);
