import React, { useContext } from 'react';

import '../styles/board.css';
import { FollowedPathContext } from '../contexts/followedPathContext';

const Wall = props => {
    const { type, x, y } = props

    const [followedPath, setFollowedPath] = useContext(FollowedPathContext);

    let crossedWall = '', topWalls = '', delay = 0;
    if(followedPath && followedPath?.crossedWalls?.has(`${x}-${y}`)){
        crossedWall = 'crossedWall';
        delay = followedPath?.crossedWalls?.size - followedPath?.crossedWalls?.get(`${x}-${y}`);
    }
    if(x===0) topWalls = 'topWall';


    return (
        <div 
        className={`wall ${type} ${crossedWall} ${topWalls}`}
        onClick={()=> {
            console.log({obj:"Wall",x,y})
        }}
        style={{animationDelay: `${delay}00ms`}}
        key={`wall-${x}-${y}`}
        >

        </div>
    );
};

export default Wall;