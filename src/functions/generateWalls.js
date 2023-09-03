

const randomOdd = (min, max)=> {
    let num = Math.abs(Math.floor((Math.random() * (max - min)) + min)*2+1);
    // console.log(num)
    return num
}
const randomEven = (min, max)=> {
    let num = Math.abs(Math.floor((Math.random() * (max - min)) + min))*2;
    return num
}


//no of v-walls in maze of size S;
//4S-6

//no of h-walls in maze of size S;
//4S-6


export const generateVerticalWalls = (size, maxWalls)=> {
    // vertical walls are present only on even rows && odd cols
    // therefore, x = even && y = odd
    // x range: 0 to 2*size - 2
    // y range: 1 to 2*size - 3
    // using set to create unique numbers
    let xCord = []; 
    let yCord = []; 
    //using insert this uniques numbers as coords in array
    let map = new Map();

    while(xCord.length < maxWalls){
        xCord.push(randomEven(0, size));
    }
    while(yCord.length < maxWalls){
        yCord.push(randomOdd(0, size));
    }

    // console.log(xCord, yCord);
    for(let i = 0; i < xCord.length; i++){
        map.set(`${xCord[i]}-${yCord[i]}`, `${xCord[i]}-${yCord[i]}`);
    }

    return map;
}

export const generateHorizontalWalls = (size, maxWalls)=> {
    //horizontal wall are present only on odd rows and even cols
    //x = odd and y = even

    let xCord = []; 
    let yCord = []; 
    //using insert this uniques numbers as coords in array
    let map = new Map();

    while(xCord.length < maxWalls){
        xCord.push(randomOdd(0, size));
    }
    while(yCord.length < maxWalls){
        yCord.push(randomEven(0, size));
    }

    // console.log(xCord, yCord);
    for(let i = 0; i < xCord.length; i++){
        map.set(`${xCord[i]}-${yCord[i]}`, `${xCord[i]}-${yCord[i]}`);
    }

    return map;
}


// export default generateWallsArray;