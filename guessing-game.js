document.getElementById("Win").style.display = "none";
document.getElementById("Lose").style.display = "none";

findOut.addEventListener("click", function () {
  Win.textContent = "";
  Win.style.color = "blue";
  Win.textContent = "You Win!";
  Lose.textContent = "You Lose...";
  Lose.style.color = "red";
  Win.style.backgroundColor = "gold";
  Lose.style.backgroundColor = "silver";
  document.getElementById("Win").style.display = "block";

  findOut.addEventListener("click", function () {
    document.getElementById("Lose").style.display = "block";
  });
});
