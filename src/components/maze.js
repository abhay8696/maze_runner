import React, { useState } from 'react';
import Board from './board';

import { Slider } from '@mui/material';
import '../styles/maze.css';

const Maze = () => {
    const [size, setSize] = useState(8);

    return (
        <main className='maze'>
            <div></div>
            <Board size = {size}/>
            <div className='mazeSetting'>
                <span>Size: {size} x {size}</span>
                <Slider
                    aria-label="Temperature"
                    defaultValue={size}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={4}
                    max={12}
                    onChange={e=> setSize(e.target.value)}
                />
            </div>
        </main>
    );
};

export default Maze;