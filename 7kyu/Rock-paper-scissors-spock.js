// In this kata, your task is to implement an extended version of the famous rock - paper - scissors game.The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// 	Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

//solution 
function rpsls(p1, p2) {
	if(p1 == p2) {
		return 'Draw!'
	}

	if(p1 === 'scissors' && p2 === 'paper') {
		return "Player 1 Won!"
	} else if(p1 === 'rock' && p2 === 'lizard') {
		return "Player 1 Won!"
	} else if(p1 === 'lizard' && p2 === 'spock') {
		return "Player 1 Won!"
	} else if(p1 === 'spock' && p2 === 'scissors') {
		return "Player 1 Won!"
	} else if(p1 === 'scissors' && p2 === 'lizard') {
		return "Player 1 Won!"
	} else if(p1 === 'lizard' && p2 === 'paper') {
		return "Player 1 Won!"
	} else if(p1 === 'paper' && p2 === 'spock') {
		return "Player 1 Won!"
	} else if(p1 === 'spock' && p2 === 'rock') {
		return "Player 1 Won!"
	} else if(p1 === 'rock' && p2 === 'scissors') {
		return "Player 1 Won!"
	} else if(p1 === 'paper' && p2 === 'rock') {
		return "Player 1 Won!"
	} else {
		return "Player 2 Won!"
	}

}