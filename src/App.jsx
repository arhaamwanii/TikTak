import { useState } from "react"
import { Player } from "./Components/Player";
import { GameBoard } from "./Components/GameBoard";
import { Log } from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/winning-combinations";
import { Gameover } from "./Components/Gameover";

const intialGameBoard = [
  [null , null , null],
  [null , null , null],
  [null , null , null],
]
console.log(intialGameBoard)


function deriveActivePlayer(gameTurns){
   let currentPlayer = 'X'; 

      if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'
      }

      return currentPlayer
}


function App() { 
  const [gameTurns , setGameTurns ] = useState([]);
  const [players , setPlayers] = useState({
    X : ' Player 1',
    O : ' Player 2'
  })
  // const [hasWinner , setHasWinner ] = useState(false)
  // const [activePlayer , setActivePlayer] = useState('X') //we choose to keep the X the first active player

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...intialGameBoard.map(array => [...array])];

  for (const turn of gameTurns){
      const {square , player} = turn;
      const {row  , col } = square;
  
      gameBoard[row][col] = player;
  }
  let winner 

for(const combination of WINNING_COMBINATIONS ){
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

  if (firstSquareSymbol
     && firstSquareSymbol === secondSquareSymbol 
    && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
}

const hasDraw = gameTurns.length === 9 && !winner //so in that

  function handleSelectSquare(rowIndex , colIndex){
    // setActivePlayer((switchPlayer) => switchPlayer === 'X' ? 'O' : 'X' );
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [ 
        {square: {row: rowIndex , col: colIndex} , player: currentPlayer } , ...prevTurns]

        return updatedTurns
    })
  }

function handleRestart(){
  setGameTurns([])
}


  return (
    <main>
        <div id="game-container">
        <ol id="players" className="highlight-player">  
          <Player name="player one" symbol={"X"} isActive={activePlayer === 'X'}/>
          <Player name="player two"symbol={'0'} isActive={activePlayer === 'O'}/> 
         
        </ol>
        {(winner || hasDraw ) && <Gameover winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
    </main>

  )
}

export default App

//which player is currently active 
  //change of the color'
  //placing of the symbol on the board
 {/* we only want one box to light up which is the one which is going to play - inside of the player comonent we are checking for the value ture or false -- so the value of the actuall state won't be changed just the prop value will be given based of this check -- i.e at one time the isActive can either be X or Y and just like that after checking fot x and y i will be passing down ture in one and fasle in other*/}



//well you have to consider this what is your goal -
  //goal is to get to shipping as fast as possible so here is the deal what you do is you finish the course as fast as possibl you don't need to  learn everythign but yuou need to learn most and the you get to building projects so  in that case there will be a minimal loss of time as well and will be working on things that matter not the ones that don't



//we are going to check for the match of the vlaues in the intial game baord and

//draw - if all the fields arepopulated
    //and still the WINNING_COMBIANTIONS are not matched


//RESTARTING THE GAME 
    //- all we have to do is to set the gameTurn state back to [] nothing