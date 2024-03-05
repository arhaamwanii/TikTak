import React from 'react'

//GAME BOARD STORAGE -- INITIAL

const intialGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
]
console.log(intialGameBoard)


//JSX

export const GameBoard = () => {
  return (
    <ol id='game-board'>
        {intialGameBoard.map((row , rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol , colIndex) => (<li key={colIndex}>
                    <button>{playerSymbol}</button>
                </li>
                )) }
            </ol>
        </li> )}
    </ol>
  )
}


//simple tic tak toe game was ment to be finished by like 3 months ago lol not even that it was ment to be finished by like 5 months ago and here i am after all this time -- well here is the thing others might think i am working hard and stuff  you know the reality of that it is all messed up havent out in a complete honest day of work since months -- stream is a pain  in the ass in the scence it takes a lot of time(but tought me a lot so it was worth it) - so basically till some time ago i was half assing two things now that i have decided startups is that what i want to do i have to get over myself and start ACTING -- action produces information -- we certainly lack  info the -- now it is make my parents satisfied with the studied that enough and go all in on the startup side thats the thinng two more days damn
