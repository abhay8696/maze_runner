
export const createMaze = size=> {
    //create v_wall and h_walls
    let v_walls = createV_walls(size);
    let h_walls = createH_walls(size);
    let cell = randomCell(size);
    //delete walls by visiting each cell
    let data = walk(size, cell, new Set(), v_walls, h_walls);
    // console.log(data)
    return data;
}

const randomCell = size=> {
    let max = size*2-2
    const x = Math.floor(Math.random() * (max + 1));
    const y = Math.floor(Math.random() * (max + 1));
  
    // Ensure the number is even by using the modulo operator (%)
    const evenX = x % 2 === 0 ? x : x + 1;
    const evenY = y % 2 === 0 ? y : y + 1;
  
    return `${evenX}-${evenY}`;
  }
const createV_walls = size=> {
    // vertical walls are present only on even rows && odd cols
    // therefore, x = even && y = odd
    // x range: 0 to 2*size - 2
    // y range: 1 to 2*size - 3
    let v_walls = new Set();
    for(let x = 0; x <= (2*size-2); x += 2){
        for(let y = 1; y <= (2*size-3); y += 2){
            v_walls.add(`${x}-${y}`)
        }
    }

    return v_walls;
}

const createH_walls = size=> {
    //horizontal walls are present only on odd rows and even cols
    //x = odd and y = even
    let h_walls = new Set();

    for(let x = 1; x <= (2*size-3); x += 2){
        for(let y = 0; y <= (2*size-2); y += 2){
            h_walls.add(`${x}-${y}`);
        }
    }

    return h_walls;
}

const shuffleArray = array=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

const walk = (size, currCell, visited, v_walls, h_walls)=>{
    if(!visited) visited = new Set();
    visited.add(currCell);
    
    // let arr = [`${x-2}-${y}`, `${x+2}-${y}`, `${x}-${y-2}`, `${x}-${y+2}`];
    let arr = [`up`, `down`, `left`, `right`];

    arr = shuffleArray(arr);

    let [x,y] = currCell.split("-");
    x = Number(x);
    y = Number(y);
    while(arr.length){
        // console.log("at: ", currCell);
        let direction = arr.shift(), midWall, nextCell

        //remove wall in between currCell and cell

        //if direction is up delete h_wall and go up
        if(direction === "up"){
            nextCell = `${x-2}-${y}`;
            if(visited.has(nextCell) || x <= 0) continue;
            midWall = `${x-1}-${y}`;
            // console.log("going up");
            // console.log(v_walls, h_walls)

            if(h_walls.has(midWall)) {
                // console.log("deleting ", midWall);
                h_walls.delete(midWall);
            }
            let newData = walk(size, nextCell, visited, v_walls, h_walls);
            visited = newData.visited;
            h_walls = newData.h_walls;
            v_walls = newData.v_walls;
        }

        //if direction is down delete h_wall and go down
        else if(direction === "down"){
            nextCell = `${x+2}-${y}`;
            if(visited.has(nextCell) || x >= (2*size-2)) continue;
            midWall = `${x+1}-${y}`;
            // console.log("going down");
            // console.log(v_walls, h_walls)

            if(h_walls.has(midWall)) {
                // console.log("deleting ", midWall);
                h_walls.delete(midWall);
            }
            let newData = walk(size, nextCell, visited, v_walls, h_walls);
            visited = newData.visited;
            h_walls = newData.h_walls;
            v_walls = newData.v_walls;
        }

        //if direction is left delete v_wall and go left
        else if(direction === "left"){
            nextCell = `${x}-${y-2}`;
            if(visited.has(nextCell) || y <= 0) continue;
            midWall = `${x}-${y-1}`;
            // console.log("going left");
            // console.log(v_walls, h_walls)

            if(v_walls.has(midWall)) {
                // console.log("deleting ", midWall);
                v_walls.delete(midWall);
            }
            let newData = walk(size, nextCell, visited, v_walls, h_walls);
            visited = newData.visited;
            h_walls = newData.h_walls;
            v_walls = newData.v_walls;
        }

        //if direction is right delete v_wall and go right
        else if(direction === "right"){
            nextCell = `${x}-${y+2}`;
            if(visited.has(nextCell) || y >= (2*size-2)) continue;
            midWall = `${x}-${y+1}`;
            // console.log("going right");
            // console.log(v_walls, h_walls)

            if(v_walls.has(midWall)) {
                // console.log("deleting ", midWall);
                v_walls.delete(midWall);
            }
            let newData = walk(size, nextCell, visited, v_walls, h_walls);
            visited = newData.visited;
            h_walls = newData.h_walls;
            v_walls = newData.v_walls;
        }

    }
    // console.log("no more directions for ", currCell);
    return {visited, v_walls, h_walls};
}
//  create all walls
//  take random cell
//  function walk ()
//      create arr of directions randomly
//      if(all directions are visited) return
//      
//      for each unvisited direction 
//          remove wall in between
//          return walk(that deirection)

/**
start(size, currCell, visited, wall)
add currCell to visited
create array for 4 random direction(up,down,left, right)
while(array is not empty)
 {
    take 1st item from array
    if(already visited that direction) skip iteration
    else {
        let nextCell = cell in direction
        delete wall between currCell and nextCell
        let newData = Start(size, nextCell, visited, wall)
        let {visited, walls) = {newData}
    }
 return {visited, walls}
}
 */