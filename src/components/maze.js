import React, { useEffect, useState } from 'react';
import Board from './board';

//functions
import { generateHorizontalWalls, generateVerticalWalls } from '../functions/generateWalls'

import { Slider } from '@mui/material';
import '../styles/maze.css';

const Maze = () => {
    const [size, setSize] = useState(12);
    const [verticalWalls, setVerticalWalls] = useState(undefined);
    const [horizontalWalls, setHorizontalWalls] = useState(undefined);


    const createWalls = ()=> {
        let difficulty = 12;
        if(size >= 12 && size <= 16) difficulty = 8;
        if(size < 12) difficulty = 6;
        let max = difficulty * size - difficulty;
        setVerticalWalls(generateVerticalWalls(size, max));
        setHorizontalWalls(generateHorizontalWalls(size, max));
    }
    
    useEffect(()=> {
        console.log("useeffect")
        createWalls();
    }, [size])

    

    return (
        <main className='maze'>
            <div></div>
            <Board size = {size} standing_Vertical_Walls={verticalWalls} standing_Horizontal_Walls={horizontalWalls}/>
            <div className='mazeSetting'>
                <span>Size: {size} x {size}</span>
                <Slider
                    aria-label="Temperature"
                    defaultValue={size}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={9}
                    max={20}
                    onChange={e=> setSize(e.target.value)}
                />
            </div>
        </main>
    );
};

export default Maze;