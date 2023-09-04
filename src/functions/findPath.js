

export const findPath = (x, y, visited, v_walls, h_walls, boardSize, correctPath)=> {
    // 1.
    if(x === 0) return {correctPath, visited, msg: true};
    correctPath.add(`${x}-${y}`);
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
            let goTop = findPath(x-2, y, visited, v_walls, h_walls, boardSize, correctPath);
            // console.log(visited);
            if(goTop.msg === true) {
                // console.log("up",x-2,y)
                correctPath.add(topSqaure)
                return {correctPath, visited, msg: true};
            }
        }
        correctPath.clear();
        return checkLeft();
    }

    const checkLeft = ()=>{
        if(!v_walls.has(leftWall) && !visited.has(leftSqaure) && y-2 >= 0) {
            let goLeft = findPath(x, y-2, visited, v_walls, h_walls, boardSize, correctPath);
            if(goLeft.msg === true) {
                // console.log("left",x,y-2)
                correctPath.add(leftSqaure)
                return {correctPath, visited, msg: true};
            }
        }
        correctPath.clear();
        return checkRight();
    }
    const checkRight = ()=>{
        if(!v_walls.has(rightWall) && !visited.has(rightSqaure) && y+2 <= ((boardSize * 2) -2)) {
            let goRight = findPath(x, y+2, visited, v_walls, h_walls, boardSize, correctPath);
            if(goRight.msg === true) {
                // console.log("right",x,y+2)
                correctPath.add(rightSqaure)
                return {correctPath, visited, msg: true};
            }
        }
        correctPath.clear();
        return checkBottom();
    }
    const checkBottom = ()=>{
        if(!h_walls.has(bottomWall) && !visited.has(bottomSqaure) && x+2 <= ((boardSize * 2) -2)) {
            let goBottom = findPath(x+2, y, visited, v_walls, h_walls, boardSize, correctPath);
            if(goBottom.msg === true) {
                // console.log("down",x+2,y)
                correctPath.add(bottomSqaure);
                return {correctPath, visited, msg: true};
            }
        }
        
        return {correctPath, visited, msg: false};
    }

    return checkTop();
}




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
        3.2.2 else check left

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