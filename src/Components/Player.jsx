import React, { useCallback, useState } from 'react'

export const Player = ({name , symbol , isActive }) => {

  const [inputField , setInputField] = useState( <span className="player-name">{name}</span>)
  const [check , setCheck] = useState(true)
  const [buttonValue , setButtonValue] = useState(true)
  const [recieveInput , setRecieveInput] = useState(name)

 //RECIVIGN INPUT OUT OF AN INPUT FIELD

  function handleInput(event){
    const newValue = event.target.value
    setRecieveInput(newValue)

  }

  //HANDLE FOCUS

  const handleFocus = (event) => {
    // Select the text inside the input field
      event.target.select();

  };

  //INTERCHANGING INPUT AND SPAN --



  function handleName(){

    setCheck((check) => !check ) 

    if(check){
      setInputField(<input type="text" defaultValue={recieveInput} onChange={handleInput}  onFocus={handleFocus} autoFocus/> )
    }
    else(
     setInputField( <span className="player-name">{recieveInput}</span>)
    )
      
      setButtonValue(e => !e)

  }
//in the end we all die 
 
  //JSX 

  
  return (

        <li className={isActive ? "active" : undefined } >
            <span className="player">
              {inputField}
              <span className="player-symbol">{symbol}</span>  
            </span>  
            <button onClick={handleName}>
              {buttonValue ? "Edit" : "Save" }
            </button>
        </li>

    )
}
