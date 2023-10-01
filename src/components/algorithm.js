import React from 'react';


import '../styles/algorithm.css';


const algorithm1 = ()=> {
    return (
        <section className='algorithm1'>
            <h3>Algorithm For Maze Creation</h3>
            <ul>
                <li>Create all walls.</li>
                <li>Select any random cell.</li>
                <li>Function Walk()
                    <ul>
                        <li>Create array of directions (left, right, up, down) in random order</li>
                        <li>If all directions are already visited
                            <ul>
                                <li>return</li>
                            </ul>
                        </li>
                        <li>else
                            <ul>
                                <li>For each unvisited direction,
                                    <ul>
                                        <li>Remove wall in between.</li>
                                        <li>return: call function walk() for that direction.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>
        </section>
    )
}

const algorithm2 = ()=> {
    return(
        <section className='algorithm2'>
            <h3>Algorithm For Finding Path</h3>
            <ul className='algorithm2Text'>
                <li>start function findPath()
                    <ul>
                        <li>If current cell is at top row
                            <ul>
                                <li>return true</li>
                            </ul>
                        </li>
                        <li>Add current cell to visited array</li>
                        <li>Check top:
                            <ul>
                                <li>If current cell doesnt have top wall and cell above current cell is not visited,
                                    <ul>
                                        <li>Let msg = call function findPath with above cell.</li>
                                        <li>if msg is true,
                                            <ul>
                                                <li>return true.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Goto: check left</li>
                            </ul>
                        </li>
                        <li>Check left:
                            <ul>
                                <li>If current cell doesnt have left wall and cell left to current cell is not visited,
                                    <ul>
                                        <li>Let msg = call function findPath with left cell.</li>
                                        <li>if msg is true,
                                            <ul>
                                                <li>return true.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Goto: check right</li>
                            </ul>
                        </li>
                        <li>Check right:
                            <ul>
                                <li>If current cell doesnt have right wall and cell right to current cell is not visited,
                                    <ul>
                                        <li>Let msg = call function findPath with right cell.</li>
                                        <li>if msg is true,
                                            <ul>
                                                <li>return true.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Goto: check bottm</li>
                            </ul>
                        </li>
                        <li>Check bottom:
                            <ul>
                                <li>If current cell doesnt have bottom wall and cell bottom to current cell is not visited,
                                    <ul>
                                        <li>Let msg = call function findPath with bottom cell.</li>
                                        <li>if msg is true,
                                            <ul>
                                                <li>return true.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>return false</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
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
}
const Algorithm = () => {
    return (
        <section className='algorithm' id='algorithmSection'>
            {algorithm1()}
            {algorithm2()}
        </section>
    );
};

export default Algorithm;

