import React, { useContext } from 'react';
import { FollowedPathContext } from '../contexts/followedPathContext'; 

import { findPath } from '../functions/findPath';

import '../styles/board.css';

const Square = props => {
    const { x, y, standing_Vertical_Walls, standing_Horizontal_Walls, size } = props;

    const [followedPath, setFollowedPath] = useContext(FollowedPathContext);

    const startRunning = (x,y)=>{
        let visited = new Set();
        let { correctPath } = findPath(x, y, visited, standing_Vertical_Walls, standing_Horizontal_Walls, size, [])
        // console.log("clicked", correctPath)
        setFollowedPath(correctPath);
    }
    return (
        <div 
        className='square'
        onClick={()=> startRunning(x,y)}
        >
            {/* {x}-{y} */}
        </div>
    );
};

export default Square;