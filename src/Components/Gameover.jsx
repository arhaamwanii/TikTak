import React from 'react'

export const Gameover = ({winner , onRestart}) => {
  return (
    <div id='game-over'>
        <h2>
            Game Over!
        </h2>

        {winner && <p>{winner}won!</p>}
        {!winner && <p>You have a Draw - !</p> }
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
  )
}
