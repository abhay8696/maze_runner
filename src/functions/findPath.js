

export const findPath = (x, y, visited, v_walls, h_walls, boardSize, correctPath, crossedWalls)=> {
    // 1.
    if(x === 0) return {correctPath, visited, crossedWalls, msg: true};
    if(!correctPath.has(`${x}-${y}`)) correctPath.set(`${x}-${y}`, correctPath.size+1);
    // 2.
    visited.add(`${x}-${y}`);

    let topWall = `${x-1}-${y}`, topSqaure = `${x-2}-${y}`;
    let leftWall = `${x}-${y-1}`, leftSqaure = `${x}-${y-2}`;
    let rightWall = `${x}-${y+1}`, rightSqaure = `${x}-${y+2}`;
    let bottomWall = `${x+1}-${y}`, bottomSqaure = `${x+2}-${y}`;

    // console.log(h_walls)
    // console.log("topWall: ", topWall, ", topSquqare: ", topSqaure);
    // console.log("leftWall: ", leftWall, ", leftSquqare: ", leftSqaure);
    // console.log("rightWall: ", rightWall, ", rightSquqare: ", rightSqaure);
    // console.log("bottomWall: ", bottomWall, ", bottomSquqare: ", bottomSqaure);
    // console.log("************************************", boardSize);
    
    const checkTop = ()=>{
        if(!h_walls.has(topWall) && !visited.has(topSqaure)) {
            let goTop = findPath(x-2, y, visited, v_walls, h_walls, boardSize, correctPath, crossedWalls);
            // console.log(visited);
            if(goTop.msg === true) {
                // console.log("up",x-2,y)
                if(!correctPath.has(topSqaure)) correctPath.set(topSqaure, correctPath.size+1)
                if(!crossedWalls.has(topWall)) crossedWalls.set(topWall, crossedWalls.size+1);
                return {correctPath, visited, crossedWalls, msg: true};
            }
        }
        correctPath.clear();
        
        return checkLeft();
    }

    const checkLeft = ()=>{
        if(!v_walls.has(leftWall) && !visited.has(leftSqaure) && y-2 >= 0) {
            let goLeft = findPath(x, y-2, visited, v_walls, h_walls, boardSize, correctPath, crossedWalls);
            if(goLeft.msg === true) {
                // console.log("left",x,y-2)
                if(!correctPath.has(leftSqaure)) correctPath.set(leftSqaure, correctPath.size+1)
                if(!crossedWalls.has(leftWall)) crossedWalls.set(leftWall, crossedWalls.size+1);
                return {correctPath, visited, crossedWalls, msg: true};
            }
        }
        correctPath.clear();
        return checkRight();
    }
    const checkRight = ()=>{
        // console.log("checking right from, ", x,y);
        if(!v_walls.has(rightWall) && !visited.has(rightSqaure) && y+2 <= ((boardSize * 2) -2)) {
            let goRight = findPath(x, y+2, visited, v_walls, h_walls, boardSize, correctPath, crossedWalls);
            if(goRight.msg === true) {
                // console.log("right",x,y+2)
                if(!correctPath.has(rightSqaure)) correctPath.set(rightSqaure, correctPath.size+1)
                if(!crossedWalls.has(rightWall)) crossedWalls.set(rightWall, crossedWalls.size+1);
                return {correctPath, visited, crossedWalls, msg: true};
            }
            // else console.log("went right found dead end", x,y, "wall: ", v_walls.has(rightWall), "square: ", visited.has(rightSqaure))
        }
        // else console.log("no right way", "wall: ", v_walls.has(rightWall), "square: ", visited.has(rightSqaure))
        correctPath.clear();
        return checkBottom();
    }
    const checkBottom = ()=>{
        if(!h_walls.has(bottomWall) && !visited.has(bottomSqaure) && x+2 <= ((boardSize * 2) -2)) {
            let goBottom = findPath(x+2, y, visited, v_walls, h_walls, boardSize, correctPath, crossedWalls);
            if(goBottom.msg === true) {
                // console.log("down",x+2,y)
                if(!correctPath.has(bottomSqaure)) correctPath.set(bottomSqaure, correctPath.size+1);
                if(!crossedWalls.has(bottomWall)) crossedWalls.set(bottomWall, crossedWalls.size+1);
                return {correctPath, visited, crossedWalls, msg: true};
            }
        }
        
        return {correctPath, visited, crossedWalls, msg: false};
    }
    correctPath.clear();
    return checkTop();
}


/*
function findPath()
    if current cell is at top row
        return true
    add current cell to visited array
    check top
        if current cell doesnt have top wall and cell above current cell is not visited
            let msg = call function findPath with above cell
            if msg is true
                return true
        goto: check left
    check left
        if current cell doesnt have left wall and cell left to the current cell is not visited
            let msg = call function findPath with left cell
            if msg is true
                return true
        goto: check right
    check right
        if current cell doesnt have right wall and cell right to the current cell is not visited
            let msg = call function findPath with right cell
            if msg is true
                return true
        goto: check bottom
    check bottom
        if current cell doesnt have bottom wall and cell bottom to the current cell is not visited
            let msg = call function findPath with bottom cell
            if msg is true
                return true
        return false
*/


/*

0. start (x,y, visited) 
1. if(x is 0) return true
2. push x,y to visited
3. check top: 
    3.1 if(x-1==wall || x-2 is visited)
        check left
    3.2 else 
        goTop: start(x-2, y, visited)
        3.2.1 if(goTop is true) return true
        3.2.2 else check left and check right
        3.2.3 return shortest path

4 check left: 
    4.1 if(y-1==wall || y-2 is visited || y-2 !exist) 
        check right
    4.2 else 
        goLeft: start(x, y-2, visited)
        4.2.1 if(goLeft is true) return true
        4.2.2 else check Right

5 check right: 
    5.1 if(y+1==wall || y+2 is visited || y+2 !exist) 
        check bottom
    5.2 else 
        goRight: start(x, y+2, visited)
        5.2.1 if(goRight is true) return true
        5.2.2 else check bottom
6 check bottom: 
    6.1 if(x+1==wall || x+2 is visited || x+2 !exist) 
        return false
    6.2 else 
        return start(x+2, y, visited)

 */