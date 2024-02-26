import { useState } from "react"
import { Player } from "./Components/Player";


function App() { 

  return (
    <main>
        <div id="game-container">
        <ol id="players">  
          <Player/>
          <Player/>
        </ol>

        </div>
    </main>

  )
}

export default App





