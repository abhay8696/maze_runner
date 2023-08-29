import React from 'react';

import '../styles/board.css';
import Square from './square';
import Wall from './wall';
const Board = props => {
    //props
    const { size } = props;

    const createBoard = size=> {
        let arr = [];

        let createSquareRow = i=> {
            let row = [];
            for(let j = 0; j < (size*2)-1; j++){
                if(j%2 === 0) row.push(<Square x={i} y={j}/>);
                else row.push(<Wall type={"verticalWall"}  x={i} y={j}/>)
            }
            return row;
        }
        let createWallRow = i=> {
            let row = [];
            for(let j = 0; j < (size*2)-1; j++){
                if(j%2 === 0) row.push(<Wall type="horizontalWall" x={i} y={j}/>)
                else row.push(<Wall type="dummyWall" x={i} y={j}/>)
            }
            return row;
        }

        for(let i = 0; i < (size*2)-1; i++){
            let rowItems = [];
            
            if(i%2 === 0) rowItems.push(createSquareRow(i));
            else rowItems.push(createWallRow(i));

            let row = <div className={`row`}>{rowItems}</div>
            arr.push(row)
        }

        return arr;
    }
    return (
        <div className='board'>
            {createBoard(size)}
        </div>
    );
};

export default Board;