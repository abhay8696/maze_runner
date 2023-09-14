import React from 'react';

import '../styles/board.css';
import Square from './square';
import Wall from './wall';
const Board = props => {
    //props
    const { size, standing_Vertical_Walls, standing_Horizontal_Walls } = props;

    // console.log(standing_Vertical_Walls, standing_Horizontal_Walls)
    const createBoard = ()=> {
        let arr = [], sqrCount = 0;

        let createSquareRow = i=> {
            let row = [], type = "verticalWall"
            for(let j = 0; j < (size*2)-1; j++){
                if(standing_Vertical_Walls && standing_Vertical_Walls.has(`${i}-${j}`)){
                    type = "verticalWall standingWall"
                }else type = "verticalWall";

                if(j%2 === 0){ 
                    sqrCount++;
                    row.push(
                        <Square 
                        x={i} 
                        y={j}
                        standing_Vertical_Walls={standing_Vertical_Walls}
                        standing_Horizontal_Walls={standing_Horizontal_Walls}
                        size={size}
                        />
                    );
                }
                else row.push(<Wall type={type}  x={i} y={j}/>)
            }
            return row;
        }
        let createWallRow = i=> {
            let row = [];
            let type= 'horizontalWall'
            for(let j = 0; j < (size*2)-1; j++){
                if(standing_Horizontal_Walls && standing_Horizontal_Walls.has(`${i}-${j}`)){
                    type = "horizontalWall standingWall"
                }else type = "horizontalWall";

                if(j%2 === 0) row.push(<Wall type={type} x={i} y={j}/>)
                else row.push(<Wall type="dummyWall" x={i} y={j}/>)
            }
            return row;
        }

        for(let i = 0; i < (size*2)-1; i++){
            let rowItems = [], rowType;
            
            if(i%2 === 0) {
                rowItems.push(createSquareRow(i));
                rowType = 'squareRow';
            }
            else {
                rowItems.push(createWallRow(i));
                rowType = 'wallRow';
            }

            let row = <div className={`row ${rowType}`} key = {`${rowType}-${i}`}>{rowItems}</div>
            arr.push(row)
        }
        // console.log('boardSize: ', size, "sqrCount: ", sqrCount)
        return arr;
    }
    return (
        <div className='board'>
            {createBoard()}
        </div>
    );
};

export default Board;