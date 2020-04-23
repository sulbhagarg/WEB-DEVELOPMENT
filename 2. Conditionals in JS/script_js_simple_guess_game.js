// create secretNumber
var secretNumber=4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

while(guess!==secretNumber)
{
	if(guess > secretNumber)
		alert("TOO HIGH. Guess again!");
	else
		alert("TOO LOW. Guess again!");
	var stringGuess = prompt("Guess a number");
	var guess = Number(stringGuess);
}

alert("YOU GOT IT RIGHT!");