import { useState } from "react"
import { Player } from "./Components/Player";
import { GameBoard } from "./Components/GameBoard";


function App() { 
  const [activePlayer , setActivePlayer] = useState('X') //we choose to keep the X the first active player
  
  function handleSelectSquare(){
    setActivePlayer((switchPlayer) => switchPlayer === 'X' ? 'O' : 'X' );
  }

  return (
    <main>
        <div id="game-container">
        <ol id="players" className="highlight-player">  
          <Player name="player one" symbol={"X"} isActive={activePlayer === 'X'}/>
          <Player name="player two"symbol={'0'} isActive={activePlayer === 'O'}/> 
         
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePLayerSymbol={activePlayer}/>
        </div>
    </main>

  )
}

export default App

//which player is currently active 
  //change of the color'
  //placing of the symbol on the board
 {/* we only want one box to light up which is the one which is going to play - inside of the player comonent we are checking for the value ture or false -- so the value of the actuall state won't be changed just the prop value will be given based of this check -- i.e at one time the isActive can either be X or Y and just like that after checking fot x and y i will be passing down ture in one and fasle in other*/}


