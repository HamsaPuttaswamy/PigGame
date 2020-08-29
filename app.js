/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, previousScore, roundscore, activePlayer, roundscore, gamePlaying , winningTotal;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('#current-'+ activePlayer).textContent = dice;

        document.querySelector('.dice').style.display = 'block';
        imgDom = document.querySelector('.dice')
        imgDom.src = 'dice-' + dice +'.png'

        if(dice !== 1){
            console.log('score',dice,previousScore);
            if (dice === 6 &&  previousScore === 6){
                roundscore = 0;
                console.log('inside',dice,previousScore)
                document.querySelector('#current-'+ activePlayer).textContent = roundscore;
                document.getElementById('score-'+ activePlayer).textContent = '0';
                previousScore = 0;
                nextplayer();
            }
            else {
                roundscore += dice;
                previousScore = dice;
                document.querySelector('#current-'+ activePlayer).textContent = roundscore;
            }
        }
        if(dice === 1){ 
            previousScore = 0;
            nextplayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundscore;
        console.log(scores[activePlayer]);
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer] ;

        var totalCount = document.querySelector('.final-score').value;
        if(totalCount){
            winningTotal = totalCount;
        }
        else{
            winningTotal = 0;
        }
        if(scores[activePlayer] >= winningTotal){
            document.getElementById('name-'+activePlayer).textContent ='Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            document.querySelector('#current-'+ activePlayer).textContent = '0';
            gamePlaying = false;
            
        }
        else{
            previousScore = 0;
            nextplayer();
        }
    }    
});



document.querySelector('.btn-new').addEventListener('click',init);



function init(){

    scores = [0,0]
    roundscore = 0;
    activePlayer = 0;
    roundscore = 0;
    gamePlaying = true;
    previousScore = 0;
    
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none' ;

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextplayer(){

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#current-'+ activePlayer).textContent = '0';
    roundscore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
}

