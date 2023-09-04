import React, { useContext } from 'react';
import { FollowedPathContext } from '../contexts/followedPathContext'; 

import { findPath } from '../functions/findPath';

import '../styles/board.css';

const Square = props => {
    const { x, y, standing_Vertical_Walls, standing_Horizontal_Walls, size } = props;

    const [followedPath, setFollowedPath] = useContext(FollowedPathContext);

    const startRunning = (x,y)=>{
        // let visited = new Set();
        let { correctPath, msg, visited } = findPath(x, y, new Set(), standing_Vertical_Walls, standing_Horizontal_Walls, size, new Set());
        // console.log("clicked", correctPath)
        if(msg) correctPath.add(`${x}-${y}`);
        setFollowedPath({path: correctPath, msg, visited});
    }

    const createSquare = ()=> {
        let type = ''
        if(followedPath?.path?.has(`${x}-${y}`)) type = 'steppedSquare';
        if(!followedPath?.msg && followedPath?.visited?.has(`${x}-${y}`)) type = 'steppedSquare-red';
        // if(followedPath?.visited?.has(`${x}-${y}`) && !followedPath?.path?.has(`${x}-${y}`)) type = 'steppedSquare-red';

        if(x===0) type = 'topSqaure';
        return (
            <div 
            className={`square ${type}`}
            onClick={()=> startRunning(x,y)}
            >
                {/* {x}-{y} */}
            </div>
        )
    }
    return  createSquare();
};

export default Square;