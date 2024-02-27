import { useState } from "react"
import { Player } from "./Components/Player";


function App() { 

  return (
    <main>
        <div id="game-container">
        <ol id="players">  
          <Player name="player one" symbol={"X"}/>
          <Player name="player two"symbol={'0'}/>
        </ol>

        </div>
    </main>

  )
}

export default App





