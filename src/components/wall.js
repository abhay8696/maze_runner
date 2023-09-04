import React, { useContext } from 'react';

import '../styles/board.css';
import { FollowedPathContext } from '../contexts/followedPathContext';

const Wall = props => {
    const { type, x, y } = props

    const [followedPath, setFollowedPath] = useContext(FollowedPathContext);

    let crossedWall = '', topWalls = '';
    if(followedPath && followedPath?.crossedWalls?.has(`${x}-${y}`)) crossedWall = 'crossedWall';
    if(x===0) topWalls = 'topWall';
    return (
        <div 
        className={`wall ${type} ${crossedWall} ${topWalls}`}
        onClick={()=> {
            console.log({obj:"Wall",x,y})
        }}
        >

        </div>
    );
};

export default Wall;