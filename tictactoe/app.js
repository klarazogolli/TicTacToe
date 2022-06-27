const playerX = 'x',
    playerO = 'circle',
    winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

const cellElements = document.getElementsByClassName('grid-cell');
const game = document.getElementById('game');
const gameOver = document.getElementsByClassName('game-over');
const text = document.getElementsByClassName('game-over-text');
const restartBtn = document.getElementsByClassName('restartBtn');
let isplayerOTurn = false;

startGame();
document.getElementsByClassName("restartBtn")[0].addEventListener('click', startGame);
function startGame(){
     isplayerOTurn = false;
    for(let i=0; i<cellElements.length; i++) {
        cellElements[i].addEventListener('click', function() {
            if(this.classList.contains('o'))
            this.classList.remove('o');
            if(this.classList.contains('x'))
            this.classList.remove('x');
            if( isplayerOTurn){
               this.classList.add('o');
               isplayerOTurn = false;

            }else{
                this.classList.add('x');
                isplayerOTurn = true;
            }
            checkForWinners();
        });
    };
}
function checkForWinners(){
    let winsx = false;
    let winso = false;
    xcells=[]; ocells=[];
    for(let i=0; i<cellElements.length; i++){
       if( cellElements[i].classList.contains('o')){
       ocells.push(i);
       }else if(cellElements[i].classList.contains('x')){
            xcells.push(i);
       }
    }
    for(let i=0; i<winningCombinations.length; i++){
         winsx = winningCombinations[i].every(element => {
            return xcells.includes(element);
          });
          winso = winningCombinations[i].every(element => {
            return ocells.includes(element);
          });   
          if(winsx || winso)
          break;
    }
    if(winsx){
        document.getElementsByClassName('game-over-text')[0].innerHTML='X is the winner!'; 
        resetGame();
    }
    if(winso){
        document.getElementsByClassName('game-over-text')[0].innerHTML='O is the winner!'; 
        resetGame();
    }
    

}
function resetGame(){
    for(i=0; i<cellElements.length; i++){
        cellElements[i].classList.remove('o','x');
    }
    document.getElementsByClassName('game-over-text')[0].innerHTML=''; 
}


