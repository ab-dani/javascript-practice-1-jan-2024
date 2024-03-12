document.getElementById("Win").style.display = "none";
document.getElementById("Lose").style.display = "none";

findOut.addEventListener("click", function () {

  
  alert("Lets Play A Game");

  confirm("Its a guessing game!");

  let g = prompt("Guess a number...");
 
  let guess = parseInt(g);
  
  if (guess === 12) {
    alert("You got it!");
    Win.style.color = "blue";
    Win.textContent = "You Win!";
    Win.style.backgroundColor = "gold";
    document.getElementById("Win").style.display = "block";
    document.getElementById("Lose").style.display = "none";
    
  } else {
    alert("No!");
    Lose.textContent = "You Lose...";
    Lose.style.color = "red";
    Lose.style.backgroundColor = "silver";
    document.getElementById("Lose").style.display = "block";
    document.getElementById("Win").style.display = "none";
    
  }

  alert("Thanks for playing!");
});
