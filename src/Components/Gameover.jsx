import React from 'react'

export const Gameover = ({winner}) => {
  return (
    <div id='game-over'>
        <h2>
            Game Over!
        </h2>
        <p>
            {winner}won!
        </p>
        <p>
            <button>Rematch!</button>
        </p>
    </div>
  )
}
