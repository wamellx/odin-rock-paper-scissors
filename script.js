function getComputerChoice() {
    let compChoiceBasis = Math.random()
    compChoiceBasis = compChoiceBasis * 100
    compChoiceBasis = Math.round(compChoiceBasis)

    let x = compChoiceBasis
    //console.log(x)

    if (x <= 33) {
        x = "Rock"
    }
    else if (x <= 66) {
        x = "Paper"
    }
    else {
        x = "Scissors"
    }

    return x

}

// let computerChoice = getComputerChoice()

// console.log(computerChoice)

function getHumanChoice() {

    // Asks the user for their input

    let input = prompt("Choose rock, paper, or scissors.")

    // Transforms the user input into proper case

    let inputStart = input.slice(0, 1)
    inputStart = inputStart.toUpperCase()
    let inputEnd = input.slice(1)
    inputEnd = inputEnd.toLowerCase()

    input = inputStart + inputEnd
    console.log(input)

    // Checks the input variable to see if it is valid, if not it will return an error.

    if (input == "Rock" || input == "Paper" || input == "Scissors") {
        return input
    } else {
        console.log("Error! Input must be 'Rock', 'Paper', or 'Scissors'")
    }
        
}

// let humanChoice = getHumanChoice()

// let humanScore = 0
// let computerScore = 0

function playRound(humanChoice, computerChoice) {

    let winner = ""

    if (humanChoice == computerChoice) {
        winner = "Tie"
    } else if (humanChoice == "Rock") {
        if (computerChoice == "Scissors"){
            winner = "Human"
        } else {
            winner = "Computer"
        }
    } else if (humanChoice == "Scissors") {
        if (computerChoice == "Paper"){
            winner = "Human"
        } else {
            winner = "Computer"
        }
    } else { // humanChoice = Paper
        if (computerChoice == "Rock"){
            winner =="Human"
        } else {
            winner = "Computer"
        }
    }

    return winner
}

// let roundWinner = playRound(humanChoice, computerChoice)
// console.log(roundWinner)

function playGame() {

    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        roundWinner = playRound(humanChoice, computerChoice)

        if (roundWinner == "Human") {
            humanScore = humanScore + 1
            console.log(`You win! Human: ${humanScore}; Computer: ${computerScore}`)
        }
        
        else if (roundWinner == "Computer") {
            computerScore = computerScore + 1
            console.log(`You lose! Human: ${humanScore}; Computer: ${computerScore}`)
        }

        else {
            console.log(`Tie! Human: ${humanScore}; Computer: ${computerScore}`)
        }
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    }

    else if (computerScore > humanScore) {
        console.log("You lost the game.")
    }

    else {
        console.log("You tied!")
    }


}

playGame()