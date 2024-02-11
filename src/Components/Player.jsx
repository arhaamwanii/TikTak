import React from 'react'
import { useState } from 'react'

export const Player = ({intialName , symbol , isActive}) => { // recieveing the inf about which player is active

  const [isEditting , setIsEditting ] = useState(false)
  const [playerName  , setPlayerName ] = useState(intialName)

let edittingCheck = <span className="player-name">{intialName}</span>

function handleEditClick(){
  setIsEditting((e) => !e )

}

function handleChange(event){
  console.log(event)
  setPlayerName(event.target.value);
}

let showField = <span className="player-name">{playerName}</span>

if (isEditting){
  showField = <input type="text" required value={playerName}  onChange={handleChange} autoFocus onFocus={e => e.currentTarget.select() }/>
}


  return (
  
      <li className={isActive ? "active" : undefined}>
                 <span>
                  {showField}
                  <span className="player-symbol">{symbol} </span>
                </span>
                <button onClick={handleEditClick} >{isEditting ? "Save" : "Edit"}</button>
        </li>
     )
}



//feeding this then back into the elements this in that case --- makes the detault value also haha
//based on the value 

//this is used to make react alter the value of the state handle click
//to get the text on the
// each instance of a component reuse it nothing else changes, in the other use case  - most powerful super comlex stuff is going to be editted
//name should be what is the function of the component
//props is the main thing that interconnects all of this
//when the buttin is clicked the name input filed should be replaced by an real input fiels where we could enter in our name and stuff we
//when the edit button is cliked the the value of a variable should be altered and based on that the ui should be updated such that the input field jumps into existance and and the input should be taked 
//doing such that the edit button says save and also the main but

//ternary expression can change the value

//prepopulating the input field  with the current player name

//the ternary ! will flip the value in case of what is before

//react is funndamentally -- does not exicute commands inmmediately it


