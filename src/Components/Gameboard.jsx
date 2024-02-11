import React from 'react'


const initailGameBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null]
]

export const Gameboard = ({onSelectSquare , turns }) => {

    let gameBoard = initailGameBoard;

    for(const turn of turns){
        const {square , player} = turn;
        const { row , col} = square;

        gameBoard[row][col] = player; //this line was failing 
    }
    //every object will have a the symbol in
    //mangage as many state as possible
    
    // const [gameBoard , setGameBoard] = useState(initailGameBoard); 


    // function handleSelectSquare(rowIndexRecieve , colIndexRecieve){
    //     setGameBoard((prevGameBoard) => { //set game board which contains the copy of the value of the intial gameBoard -- we copy that
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndexRecieve ][colIndexRecieve] = activePlayerSymbol //where ever the click has took place change the value of the that place from null to X 
    //         return updatedBoard;
    //     });
    //     onSelectSquare()// calling the F in the ancestor/app.jsx file which will switch the value form X to O or otherwise 
    //     //in this code here is the info about which buttons  were clicked and what were there cordinates
    // }

    //


  return (
   <ol id='game-board'>
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((col, colIndex)  =>
             <li key={colIndex}>

                 <button onClick={() => onSelectSquare(rowIndex , colIndex)}>{col}</button> 

            </li> )}
        </ol>
    </li> )}
   </ol>
  )
}




//hadleSectSquare, this function is used determine the value which will be shown on to the screen -- and will update the game board based on the prvios state of the gameboard -- in which case it also has to update the value inside of the intial game boad which we build to store the data
//for this function to do change the value of the inital game board -- it needs to know exactly which value it has to change in that case we need to pass the location of the change which is in this case passed by row and col INDEX
//updated board which
//

//          prevGameBoard[rowIndex ][colIndex]
// as in this case what we have is that, prevGameBoard is just th  instance of the inital gameBoard we used  inside of this  funciton 
//as it is just a copy of the inital array we can then use the rwoIndex and colIndex to change the value specifically

// const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
////we got a brand new array with a brand new nested arrays which still stores all the previous values 
// in this way we are updating the value in an imutable

//need to update the gameBoard which is the cpy of the inital board based on where the user clicked one click at a time i.e every time a square is clicked based off of its row and col index we need to  update it such that the value stored in the ne instantc or stae 


//we take the intial game board we make a copy of it then we use that i.e we have our intial game board then we have which is just full of nulls... what we do is we initailzie a state which is then used in which we we put the itial value to b


//while calling a function in an array in which 

//now insted of upgrading the value direlctly we update the array in an imutalble way which being that
//when your value is  an object or an array you are dealing with a reffernce value in js -- when we try to udate the value directly like --  prevGameBoard[rowIndex ][colIndex] = 'X'
// if we do it in the direct way     "prevGameBoard[rowIndex ][colIndex] = 'X'" the value will be updated immediately, 


//intial game board representing the value of the game board
//  .map takes an function as an input that will be called for every item it is being used on
// row index -- is a positon based valeing not the value based, here we can use it cause we are not swaping the values

//outer list item uses is used to createle list rows 
//inside of the same thing we use the inner value of the array to create the coulums

//once we got this arrangemet then we putt the buttons we want to be clicked and represent the value X or 0 inside there, for which we want the default value to be empty

   







// const [newGameBoard , setNewGameBoard] = useState(initailGameBoard)

    // function handleCordinates(rowIndexRecive , colIndexRecieve){
    //     //this is the fuction that will be called in the button and will recive the cordinats of the button we need to change 
    //     //  -- as we recieve the value we need to change based off of that we need to create a new state of the intial gameboard whcih we then use to update the ui 
    //     //  -- we then use this state and based off of the previous value we change its value in the place where the used clicked
    //     //  -- but BUT, we can chang the value of the array or an orbejct based on the previous prctise dirctly but it is not a best Practise 
    //     //  -- so we first create a copy of the inital state and then based off of that we  change the value of the state and use that to update the UI... so we first need to make a copy of this to do this
    
    //     setGameBoard ((inNew) => {
    //         copyInNew = [...inNew.map(e => [...e])]
    //         copyInNew[rowIndexRecive, colIndexRecieve] = "X"
    //         return vopy 
    //     })        

    // }
    //     connectihg the open ai api with th

    //      uisng open ai api

    
    
    