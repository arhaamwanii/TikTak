import React, { useState } from 'react'
 

//GAME BOARD STORAGE -- INITIAL

const intialGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
]
console.log(intialGameBoard)

//JSX

export const GameBoard = ({onSelectSquare , activePLayerSymbol }) => { 
    
    const [gameBoard , setGameBoard] = useState(intialGameBoard);
    

/// FUNCTION USED TO  CREATE THE - new game board based on the input it has been given: 1: which button is clicked i.e which value to replace on the board 2: which player clicked it
 
    function handleSelectSqaure(rowIndex , colIndex , xoro){ //which inner array was cliked which null should be replaced 
        setGameBoard((prevGameBoard) => { //change value based of the previous
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])] //copying the inner inner arrays as well - not just the outer array
            updatedBoard[rowIndex][colIndex] = activePLayerSymbol
            return updatedBoard
        })

        onSelectSquare(); //this will call the function in app.jsx
        //we are switching the active player
       };

    

  return (
    <ol id='game-board'>
        {gameBoard.map((row , rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={ () => {handleSelectSqaure(rowIndex , colIndex  )} }> 
                        {playerSymbol} 
                        {/* this is waht will represent 0/x */}
                    </button>
                </li> ) }
            </ol>
        </li>)}
    </ol>

  )
}

//array to store the value of all the values - from which we are going to calculate the winning or loosing of the game
    // initially all is the none
    //this intial will get reRendered and also stored in a new array on the intiation
    //then will store the value based on the click
//well basically in this case, we have have to make every click resonsive and shit but we cant do that one by one becase that is just shit so what we do is we take the .map and make it rerender the whole thing one by one and what happens is that .map renders for every value inside the intial gameBoard renders a li tag and for every li tag and for each list tag we want it to render a col and using a bit of css we make these li items look like a square which makes this thing somewhat of a

//simple tic tak toe game was ment to be finished by like 3 months ago lol not even that it was ment to be finished by like 5 months ago and here i am after all this time -- well here is the thing others might think i am working hard and stuff  you know the reality of that it is all messed up havent out in a complete honest day of work since months -- stream is a pain  in the ass in the scence it takes a lot of time(but tought me a lot so it was worth it) - so basically till some time ago i was half assing two things now that i have decided startups is that what i want to do i have to get over myself and start ACTING -- action produces information -- we certainly lack  info the -- now it is make my parents satisfied with the studied that enough and go all in on the startup side thats the thinng two more days damn

// {/* <ol id='game-board'>
// {intialGameBoard.map((row , rowIndex) => <li key={rowIndex}>
//     <ol>
//         {row.map((playerSymbol , colIndex) => (<li key={colIndex}>
//             <button>{playerSymbol}</button>
//         </li>
//         )) }
//     </ol>
// </li> )}
// </ol> */}

