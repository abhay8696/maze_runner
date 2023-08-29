import React from 'react';

import '../styles/board.css';
import Square from './square';
import Wall from './wall';
const Board = props => {
    //props
    const { size } = props;

    const createBoard = size=> {
        let arr = [];

        let createSquareRow = ()=> {
            let row = [];
            for(let i = 0; i < (size*2)-1; i++){
                if(i%2 === 0) row.push(<Square />);
                else row.push(<Wall type={"verticalWall"} />)
            }
            return row;
        }
        let createWallRow = ()=> {
            let row = [];
            for(let i = 0; i < (size*2)-1; i++){
                if(i%2 === 0) row.push(<Wall type="horizontalWall"/>)
                else row.push(<Wall type="dummyWall"/>)
            }
            return row;
        }

        for(let i = 0; i < (size*2)-1; i++){
            let rowItems = [];
            
            if(i%2 === 0) rowItems.push(createSquareRow());
            else rowItems.push(createWallRow());

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