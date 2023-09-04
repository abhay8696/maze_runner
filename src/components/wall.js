import React from 'react';

import '../styles/board.css';

const Wall = props => {
    const { type, x, y } = props
    let top = '';
    if(x === 0) top = 'topWall';
    return (
        <div 
        className={`wall ${type} ${top}`}
        onClick={()=> {
            console.log({obj:"Wall",x,y})
        }}
        >

        </div>
    );
};

export default Wall;