let score =  JSON.parse(localStorage.getItem
    ('score')) ||  {
            wins: 0,
            losses: 0,
            ties: 0 
        }

        updateScore();

    /* short cut above

    if (!score) {
        score = {
            wins: 0,
            losses: 0,
            ties: 0                
        };
    }
*/

let isAutoPlaying = false;
let intervalID;

function autoplay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(function() {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}

    function playGame(playerMove) {

        const computerMove = pickComputerMove ();

        let result = '';

        if (playerMove === 'scissor') {

        if(computerMove === 'rock'){
            result = 'You lost.';
        } else if (computerMove === 'paper'){
            result = 'You won.';
        } else if (computerMove === 'scissor'){
            result = 'Tie.';
        }
        } else if (playerMove === 'paper'){
                
            if(computerMove === 'rock'){
                result = 'You won.';
            } else if (computerMove === 'paper'){
                result = 'Tie.';
            } else if (computerMove === 'scissor'){
                result = 'You lost.';
                }


      } else if (playerMove === 'rock'){

                if(computerMove === 'rock'){
                    result = 'Tie.';
                } else if (computerMove === 'paper'){
                    result = 'You lost.';
                } else if (computerMove === 'scissor'){
                    result = 'You won.';
                }
    }

    if (result === 'You won.') {
        score.wins += 1;
    } else if (result === 'You lost.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').
    innerHTML = result;

    document.querySelector('.js-moves').innerHTML =
     ` Your move is
        <img src ="images/${playerMove}.png"
        class=" image-icon">
        <img src ="images/${computerMove}.png"
        class="image-icon">
        By Computer`;
        
    }

    function updateScore() {
        document.querySelector('.js-score').innerHTML 
        = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
    }

    function  pickComputerMove(){
        const randomNumber = Math.random();

         let computerMove = '';
       
        if (randomNumber >= 0 && randomNumber <1/3 ) {
            computerMove= 'rock';
        } else if (randomNumber >= 1/3 && randomNumber <2/3){
            computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber <1) {
            computerMove = 'scissor';
        }

        return computerMove;
    }