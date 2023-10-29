let score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickcomputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'rock') {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'rock') {
            result = 'You win.';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'rock') {
            result = 'You lose.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move-player').innerHTML = `<img src="img/${playerMove}.png" class="move-icon">`;

    document.querySelector('.js-move-computer').innerHTML = `<img src="img/${computerMove}.png" class="move-blue-icon">`;
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickcomputerMove(){
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock'
    }else if(randomNumber >= 1/3 && randomNumber <2/3){
        computerMove = 'paper';
    }else if(randomNumber >= 2/3 && randomNumber <1){
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetMove(){
    document.querySelector('.js-result').innerHTML = '';

    document.querySelector('.js-move-player').innerHTML = '';

    document.querySelector('.js-move-computer').innerHTML = '';
}