import { useState } from "react"
import { Gameboard } from "./Components/Gameboard"
import { Player } from "./Components/Player"
import { Log } from "./Components/Log"



function App() { 
  
    const [gameTurns , setGameTurns]= useState([])  //array to manage the gamedata
    const [activePlayer , setActivePlayer] = useState("X") //setting the initial player to X

  function handleSelectSquare(rowIndex , colIndex){
    setActivePlayer((current) => current === 'X' ? 'O' : 'X' ) // swithcing  the value between X and Y 
    setGameTurns(prevTurns => {

      let currentPlayer = "X";

      if(prevTurns.length> 0 && prevTurns[0].player === "X"){
        currentPlayer = "O"
      }
      //taking the ;ook at only the latest playe 

      const updatedTurns = [{square : {row: rowIndex , col : colIndex } , player: currentPlayer} , ...prevTurns];  //updating in a imutable way - object is turned - which player clicked on what score row = row inedez 
      return updatedTurns;
      //store an object --- array full of objects
      //update state before managing the state 
            
    });
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName={"prop one"} symbol="X" isActive={activePlayer === 'X' }/>
          <Player intialName={"prop two"} symbol="O" isActive={activePlayer === 'O'}/>
       </ol>
      <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns}/>
      </div>
      <Log />
    </main>

  )
}

export default App

//
//

//state that manages the info about the progress of our game up,
//onject we are adding we can deg

//game state is updated dynamically to 

//on the basis of which player is playing, we need to  CHANGE THE COLOR of the player heading(player.jsx) 
// also based on the same value we need to we need to place the value "X" or "O" in the game board 

//this code is an internet banger 

//this value i.e which player is playing is found in player.jsx 


// giving both of them acess to this value -- so we lift the state up(acesstor which has acess to both )

// need to knho my perecets

//tyically on edata to be managed by in a single state is considered ppractise calss

// putting info in the gameboaed
//gameboard contaienr already controsl these elements buy they no 
//one state per ingfo'

//quick comment stuff
//quick comment stuff
//the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dgog



