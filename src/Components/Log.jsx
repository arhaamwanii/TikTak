import { Linter } from 'eslint'
import React from 'react'

export const Log = ({ turns}) => {
  return (
    <div>
        {
            turns.map(turn => <Li>{turn.player}selected{turn.square.row}</Li>)
        }
        <ol id='log'>
        
        </ol>
    </div>
  )
}
//array that grwos with every button click
    //other component has the value for that
    //lift the state up


//well we sure need that thign  in here, will be mapped to l