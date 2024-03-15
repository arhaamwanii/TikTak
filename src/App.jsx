import { useState } from "react"
import { Player } from "./Components/Player";
import { GameBoard } from "./Components/GameBoard";
import { Log } from "./Components/Log";

function deriveActivePlayer(gameTurns){
   let currentPlayer = 'X'; 

      if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'
      }

      return currentPlayer
}


function App() { 
  const [gameTurns , setGameTurns ] = useState([]);
  // const [activePlayer , setActivePlayer] = useState('X') //we choose to keep the X the first active player

  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex , colIndex){
    // setActivePlayer((switchPlayer) => switchPlayer === 'X' ? 'O' : 'X' );
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [ 
        {square: {row: rowIndex , col: colIndex} , player: currentPlayer } , ...prevTurns]

        return updatedTurns
    })
  }

  return (
    <main>
        <div id="game-container">
        <ol id="players" className="highlight-player">  
          <Player name="player one" symbol={"X"} isActive={activePlayer === 'X'}/>
          <Player name="player two"symbol={'0'} isActive={activePlayer === 'O'}/> 
         
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
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