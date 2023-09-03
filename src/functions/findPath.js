/*

1. start (x,y, visited) 
2. if(x is 0) return true
3. push x,y to visited
4. check top: 
    4.1 if(x-1==wall || x-2 is visited) 
        check left
    4.2 else 
        return: start(x-2, y, visited)
5 check left: 
    5.1 if(y-1==wall || y-2 is visited || y-2 !exist) 
        check right
    5.2 else 
        return start(x, y-2, visited)
6 check right: 
    6.1 if(y+1==wall || y+2 is visited || y+2 !exist) 
        check bottom
    6.2 else 
        return start(x, y+2, visited)
7 check bottom: 
    4.1 if(x+1==wall || x+2 is visited || x+2 !exist) 
        return false
    4.2 else 
        return start(x+2, y, visited)

 */