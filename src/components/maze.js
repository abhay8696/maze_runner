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
                <p>Size: {size}</p>
                <Slider
                    aria-label="Temperature"
                    defaultValue={size}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={2}
                    // marks
                    min={8}
                    max={20}
                    onChange={e=> setSize(e.target.value)}
                />
            </div>
        </main>
    );
};

export default Maze;