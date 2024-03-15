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
