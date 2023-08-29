import React from 'react';

import '../styles/board.css';

const Wall = props => {
    const { type, x, y } = props
    return (
        <div 
        className={`wall ${type}`}
        onClick={()=> console.log({obj:"Wall",x,y})}
        >

        </div>
    );
};

export default Wall;