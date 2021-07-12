const frog = 'Frog';
const slug = 'Slug';
const snake = 'Snake';
const frogArray = [frog, slug, snake];

let score = [0, 0]; // you, comp
let successfullGames = 0;

const frogCard = document.getElementById('frog-card');
const slugCard = document.getElementById('slug-card');
const snakeCard = document.getElementById('snake-card');
const cardArray = [frogCard, slugCard, snakeCard];

const textDisplay = document.getElementById('score-text');
const scoreDisplay = document.getElementById('score');

function computerPlay() {
    let rand = Math.floor(Math.random() * 2.9999999999);
    return frogArray[rand];
}

function playRound(playerSelection, computerSelection) {
//    prompt();
//    playerSelection = playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
    if (playerSelection == computerSelection) {
        return "You both chose " + computerSelection+ ", it's a tie.";
    } else if (playerSelection == 'Frog' && computerSelection == 'Slug' ||
            playerSelection == 'Slug' && computerSelection == 'Snake' ||
            playerSelection == 'Snake' && computerSelection == 'Frog') {
        score[0]++;
        successfullGames++;
        return playerSelection + " beats " + computerSelection + ", you win this round!";
    } else {
        score[1]++;
        successfullGames++;
        return computerSelection + " beats " + playerSelection + ", you lose this round.";
    }
};

function game(playerSelection, computerSelection) {
//    while (successfullGames < 5) {
//        let playerSelection = prompt("Frog, Slug, or Snake?");
//        let computerSelection = computerPlay();
//        console.log(playRound(playerSelection, computerSelection));
//    }
    if (successfullGames == 5 && score[0] > score[1]) {
        textDisplay.innerHTML = computerSelection + " beats " + playerSelection + ", you lose the game. Commiserations.";
        score = [0, 0];
        successfullGames = 0;
    } else if (successfullGames == 5 && score[0] < score[1]) {
        textDisplay.innerHTML = playerSelection + " beats " + computerSelection + ", you win the game! Congratulations!";
        score = [0, 0];
        successfullGames = 0;
    }
}


function flashCard(card) {
    card.classList.add('comp-selected');
    console.log(card);
    let id = null;
    let flash = 0;
    clearInterval(id);
    id = setInterval (frame, 200);
    function frame() {
        if (flash == 1) {
            card.classList.remove('comp-selected');
            clearInterval(id);
        } else {
            flash++;
        }
    }
    
}
//game(); 

function roundChoice(e) {
//    console.log(e.target);
    let computerChoice = computerPlay();
//    console.log(frogArray.indexOf(computerChoice));
    let card = cardArray[frogArray.indexOf(computerChoice)];
    console.log(card);
    flashCard(card);
    
//    let playerCard = cardArray.indexOf(e.target);
    let playerChoice = frogArray[cardArray.indexOf(e.target)]
    textDisplay.innerHTML = playRound(playerChoice, computerChoice);
    scoreDisplay.innerHTML = score[0] + ' - ' + score[1];
    game(playerChoice, computerChoice);
    
}


frogCard.addEventListener('click', roundChoice);
slugCard.addEventListener('click', roundChoice);
snakeCard.addEventListener('click', roundChoice);