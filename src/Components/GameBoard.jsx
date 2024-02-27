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
