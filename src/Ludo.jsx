import 'react'
import { useState } from 'react';
export default function Ludo(){
    let [moves,setMoves] = useState({blue:0,Green:0,Red:0,Yellow:0});

    let updateBlue =()=>{
        setMoves(()=>{
            return {...moves,blue:moves.blue+1};
        });
    }
    let updateGreen =()=>{
        setMoves(()=>{
            return {...moves,Green:moves.Green+1};
        });
    }
    let updateRed =()=>{
        setMoves(()=>{
            return {...moves,Red:moves.Red+1};
        });
    }
    let updateYellow =()=>{
        setMoves(()=>{
            return {...moves,Yellow:moves.Yellow+1};
        });
    }
    return(
        <>
            <p>Blue Moves : {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Green Moves :  {moves.Green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>Red Moves :  {moves.Red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            <p>Yellow Moves :  {moves.Yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
        </>
    );
}