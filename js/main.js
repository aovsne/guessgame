
var secretNumber = Math.floor((Math.random() * 100) + 1)
var guess = Number(prompt('Choose number between 1 - 100'))
var guesses = 1
var tries = 10

while(guess != secretNumber){
	console.log(guesses)
	if(guesses >= tries){
		document.write('you lose')
		break

	}else if(guess > secretNumber){
		guesses++
		guess = prompt('guess lower')
		
	}else if(guess < secretNumber){
		guesses++
		guess = prompt('guess higher')
		
	}
}
if( guesses < tries){
	document.write('you win')
}