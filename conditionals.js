//Part I

let userChoice = prompt("Heads or Tails");
let randomNumber = Math.random();
let computerChoice;

if (randomNumber < 0.5){
    computerChoice = "Heads";
}

else {computerChoice = "Tails";
}

if ( userChoice == computerChoice){
   alert ("You guessed right! The coin flip landed on " + userChoice + "."); 
}

else {
    alert ("Sorry, the coin flip landed on " + computerChoice + "." );
}

//Part II

let birthYear = prompt("Enter the year you were born");
const currentYear = 2023;
let age = currentYear - birthYear;

if (age > 21){
    alert ("You are old enough to drink in the US.")
}

else if (age == 21){
    alert ("You are old enough to drink in the US...barely")
}

else if (age < 21){
    alert ("Sorry, you are not old enough to drink in the US")
}