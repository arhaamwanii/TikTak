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
//array that grwos with every button click
    //other component has the value for that
    //lift the state up 


//well we sure need that thign  in here, will be mapped to l