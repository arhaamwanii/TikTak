import React from 'react'

export const Log = ({ turns}) => {
  return (
    <div> <ol id='log'>
        {
            turns.map(turn => <li key={`${turn.square.row} ${turn.square.col}`} >{turn.player}selected{turn.square.row} , {turn.square.col}</li>)
        }
        </ol>
    </div>
  )
}
