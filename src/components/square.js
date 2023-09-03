import React from 'react';

import '../styles/board.css';

const Square = props => {
    const { x, y } = props;
    return (
        <div 
        className='square'
        onClick={()=> console.log({obj:"Square",x,y})}
        >
            {x}-{y}
        </div>
    );
};

export default Square;