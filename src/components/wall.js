import React from 'react';

import '../styles/board.css';

const Wall = props => {
    const { type } = props
    return (
        <div className={`wall ${type}`}></div>
    );
};

export default Wall;