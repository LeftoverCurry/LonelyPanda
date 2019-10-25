//pulls the html tags
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultDisplay = document.querySelector('#resultDisplay');

const buttons = document.querySelectorAll('#playSpace');

//outputs the number of wins and losses to the tracker
let wins = 0;
let losses = 0;



//recieves user input and increments win counter
paper.addEventListener('click', () => {
  increment(playRound("paper")); 
});


scissors.addEventListener('click', () => {
  increment(playRound("scissors"));
});

rock.addEventListener('click', () => {
  increment(playRound("rock"));
});

function increment(round) {
	if (round === 2){ ++losses; 
	} else if(round === 1) {++wins}
};
//displays user input on a tracker
buttons.forEach((button) => {
	button.addEventListener('click', () => {
	const gameLog = document.querySelector('#gameLog');
	if ((wins < 3) && (losses < 3)){
	gameLog.textContent = `You have won ${wins} times and the lonely panda has won ${losses} times.`
	} else if ((wins === 3) && (losses < 3)){
		gameLog.textContent = "You won the match, but the panda was less lonely for awhile, so they're still pretty happy!"
	} else if ((wins < 3) && (losses === 3)){
gameLog.textContent = "You lost the match, but the panda seems less lonely, so you're still pretty happy!"
	} else {
		gameLog.textContent = "You already decided who won, but the panda seems content to play forever."
	}

});
});


//plays a round and returns win, loss, or tie
function playRound(playerSelection){
	let xresult = null;
	const computerSelection = computerPlay()
	
	if (playerSelection === computerSelection){
		resultDisplay.textContent = `You chose ${playerSelection} and the lonely panda chose ${computerSelection}.  It's a tie! Play again!`
		xresult = 0
	} else if (playerSelection === "rock" && computerSelection === "scissors"){
		resultDisplay.textContent = "You chose " + playerSelection + " and the lonely panda chose " + computerSelection + ".";
		xresult = 1
	}
	else if (playerSelection === "paper" && computerSelection === "rock"){
		resultDisplay.textContent = "You chose " + playerSelection + " and the lonely panda chose " + computerSelection + ".";
		xresult = 1
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		resultDisplay.textContent = "You chose " + playerSelection + " and the lonely panda chose " + computerSelection + ".";
		xresult = 1
	} else {
		resultDisplay.textContent = "You chose " + playerSelection + " and the lonely panda chose " + computerSelection + ".";
		xresult = 2
	}
	
	return xresult
}	

//function to play the computer side
function computerPlay() {
	let computerResult = Math.floor(Math.random() * 3);

	//Take the result of the RNG and apply it to a string.  We have to declare a variable outside of the logic because hoisting is a thing?
	let computerSelection = null;

	if (computerResult === 0){
		computerSelectionString = "rock"
	} else if (computerResult === 1){
		computerSelectionString = "paper"
	} else if (computerResult === 2){
		computerSelectionString = "scissors"
	};

	return computerSelectionString;
	}


//determines who won a best of five
function game(){
	let wins = 0
	let losses = 0
	for (i = 1; i < 6; i++){
		console.log("Game " + i)
		let result = playRound()
		if (result === "win"){
			wins++
		} else if (result === "loss"){
			losses++
		}
		console.log(wins + " Wins and " + losses + " Losses.")
		}
	if (wins > losses){
		return "You have won!"
	} else {
		return "I'm sorry, you lost!"
	}
	}

//executes game
