import React, { useEffect, useState } from 'react';
//components
import Board from './board';
//contexts
import { FollowedPathContext } from '../contexts/followedPathContext';
//functions
import { createMaze } from '../functions/createWalls';

import { Slider } from '@mui/material';
import '../styles/maze.css';

const Maze = () => {
    const [size, setSize] = useState(15);
    const [verticalWalls, setVerticalWalls] = useState(undefined);
    const [horizontalWalls, setHorizontalWalls] = useState(undefined);
    const [followedPath, setFollowedPath] = useState({path: new Set(), msg:null, visited: new Set(), crossedWalls: new Set()});


    const createWalls = ()=> {
        let data = createMaze(size);
        setVerticalWalls(data.v_walls);
        setHorizontalWalls(data.h_walls);
    }
    
    useEffect(()=> {
        createWalls();
        //clear data
        setFollowedPath({path: new Set(), msg:null, visited: new Set(), crossedWalls: new Set()})
        
    }, [size]);

    

    return (
        <main className='maze'>
            <FollowedPathContext.Provider value={[followedPath, setFollowedPath]}>
                {/* <div></div> */}
                <Board size = {size} standing_Vertical_Walls={verticalWalls} standing_Horizontal_Walls={horizontalWalls}/>
                <div className='mazeSetting'>
                    <span>{size} x {size}</span>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={size}
                        // getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={4}
                        max={50}
                        onChange={e=> setSize(e.target.value)}
                        // color="danger"
                    />
                </div>
            </FollowedPathContext.Provider>
        </main>
    );
};

export default Maze;