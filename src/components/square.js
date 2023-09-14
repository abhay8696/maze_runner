import React, { useContext } from 'react';
import { FollowedPathContext } from '../contexts/followedPathContext'; 

import { findPath } from '../functions/findPath';

import '../styles/board.css';

const Square = props => {
    const { x, y, standing_Vertical_Walls, standing_Horizontal_Walls, size } = props;

    const [followedPath, setFollowedPath] = useContext(FollowedPathContext);

    const startRunning = (x,y)=>{
        //clear previous path  
        setFollowedPath({path: new Set(), msg:null, visited: new Set(), crossedWalls: new Map()})

        // let visited = new Set();
        let { correctPath, msg, visited, crossedWalls } = findPath(x, y, new Set(), standing_Vertical_Walls, standing_Horizontal_Walls, size, new Map(), new Map());
        // if(!msg) console.log("failed. ratio: ", (visited.size/(size*size)*100));
        
        if(msg && !correctPath.has(`${x}-${y}`)) correctPath.set(`${x}-${y}`, correctPath.size+1);
        // console.log(correctPath)

        setFollowedPath({path: correctPath, msg, visited, crossedWalls});
    }

    const createSquare = ()=> {
        let type = '', delay=0;
        if(followedPath?.path?.has(`${x}-${y}`)) {
            type = 'steppedSquare';
            delay = followedPath?.path?.size - followedPath?.path?.get(`${x}-${y}`);
        }
        if(!followedPath?.msg && followedPath?.visited?.has(`${x}-${y}`)) type = 'steppedSquare-red';
        // if(followedPath?.visited?.has(`${x}-${y}`) && !followedPath?.path?.has(`${x}-${y}`)) type = 'steppedSquare-red';

        if(x===0) type = 'topSqaure';
        return (
            <div 
            className={`square ${type} delay-${delay}`}
            onClick={()=> startRunning(x,y)}
            style={{animationDelay: `${delay}00ms`}}
            key={x-y}
            >
                {/* {x}-{y} */}
            </div>
        )
    }
    return  createSquare();
};

export default Square;