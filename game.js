const moves = ["r", "p", "s"]
let humanScore = 0
let computerScore = 0
const humanChoice = window.prompt( "do you want r p or s?").toLocaleLowerCase


if (moves.includes(humanChoice)) {
    window.alert("Please enter a valid choice.");
  } else {
    console.log("good choice")
}

const randomIndex = Math.floor( Math.random() * moves.length)
const computerChoice = moves[randomIndex]
console.log(computerChoice)
if (
    (humanChoice === 'r' && computerChoice === 's') || 
    (humanChoice === 'p' && computerChoice === 'r') || 
    (humanChoice === 's' && computerChoice === 'p')
) {
    alert("youwon")
    humanScore++
} else if (humanChoice === computerChoice) {
    alert("it was a tie!")
} else {
    alert("you lost")
    computerScore++
}

alert (`human: ${humanScore} | Computer: ${computerScore}`)
// if humanChoice = moves {
//     console.log

// }
// variables


// humanScore
//computerScore
//array of move options r, p, s

//humanChoice chooses r, p, or s

// get random index
// use random index to determine computer choice
//computerChoice chooses r, p, or s

// winning conditions for human
//ifhumanChoice 'r' && computerChoice 's' || humanCHoice 'p' && computerChoice 'r' || hC 's' && cC 'p'
    //increase humanScore
    //log YOU WON HOLY CRAP
//if computer won
    // increase computerScore

//if tie
    // log 'it was a tie'

// do you want to play again
    //if yes
        //repeat the game
    //if no 
        //stop