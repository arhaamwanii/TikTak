import React, { useCallback, useState } from 'react'

export const Player = ({name , symbol}) => {
 
  const [inputField , setInputField] = useState( <span className="player-name">{name}</span>)
  const [check , setCheck] = useState(false)
  const [buttonValue , setButtonValue] = useState(true)
  const [recieveInput , setRecieveInput] = useState(name)

 //RECIVIGN INPUT OUT OF AN INPUT FIELD

  function handleInput(event){
    const newValue = event.target.value
    setRecieveInput(newValue)

  }

  //ENTER CALL FUNTION

  // function handleKeyPress(e){
  //   if (e.key === 'Enter') {
  //     this.handleName();
        
  //   }
  // }

  //INTERCHANGING INPUT AND SPAN

  function handleName(){

    setCheck((check) => !check )

    if(check){
      setInputField(<input type="text" defaultValue={recieveInput} onChange={handleInput}/> )
    }
    else(
     setInputField( <span className="player-name">{recieveInput}</span>)
    )
      
      setButtonValue(e => !e)

  }

 
  //JSX

  return (

        <li>
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


//when the button is presend i want the user to show the input field 
    //button clicked 
    //text which is being showed direcly gets replaced with an input filed
    //button clicke agian it replaces it again
    //input from the innput field is collected and stored and then showed in old box again



//also when once the button is clicked untill switch it from its previous state save -> edit