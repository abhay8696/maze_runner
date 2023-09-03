import React from 'react';

import '../styles/board.css';
import Square from './square';
import Wall from './wall';
const Board = props => {
    //props
    const { size, verticalWalls, horizontalWalls } = props;

    console.log(verticalWalls, horizontalWalls)
    const createBoard = size=> {
        let arr = [];

        let createSquareRow = i=> {
            let row = [], type = "verticalWall"
            for(let j = 0; j < (size*2)-1; j++){
                if(verticalWalls && verticalWalls.has(`${i}-${j}`)){
                    type = "verticalWall builtWall"
                }else type = "verticalWall";

                if(j%2 === 0) row.push(<Square x={i} y={j}/>);
                else row.push(<Wall type={type}  x={i} y={j}/>)
            }
            return row;
        }
        let createWallRow = i=> {
            let row = [];
            let type= 'horizontalWall'
            for(let j = 0; j < (size*2)-1; j++){
                if(horizontalWalls && horizontalWalls.has(`${i}-${j}`)){
                    type = "horizontalWall builtWall"
                }else type = "horizontalWall";

                if(j%2 === 0) row.push(<Wall type={type} x={i} y={j}/>)
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