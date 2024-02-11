import React from 'react'

export const Log = ({turns }) => {
  return (
    <ol id='log'>
       {turns.map(turn => <li key={`${turn.square.row} ${turn.square.col}`}>{turn.player}selected{turn.player}, {turn.square.col}</li> )}'
      
    </ol>
  )
}
// 
//
//
//
///
//