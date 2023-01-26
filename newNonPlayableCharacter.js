function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 50)

    // Makes the function walkEast asynchronous using the async keyword
    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        // invokes the sleep function and passed it time as an argument and use the await keyword to pause the execution of the function 
        await sleep(time)
        // after the promise is resolved it calls the stop function to stop the movement of the NPC
        stop()
    }
//now use the same logic/pattern to make the following functions asynchronous 
    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        stop()
    }

    async function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

/* add sleep function */

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}

//Continuation for moveNPC() function. 3- build a more complex track. Program a path for the NPC using the following directions and durations:

    /*North for 1400 ms
    East for 1200 ms
    South for 300 ms
    East for 1500 ms
    South for 1500 ms
    West for 2700 ms
    North for 400 ms*/

//synchronous implementation; **character will go only in the last direction that was specified**
/*npc.walkNorth(1400)                               
npc.walkEast(1200)                              
npc.walkSouth(300)                              
npc.walkEast(1500)                              
npc.walkSouth(1500)                              
npc.walkWest(2700)                              
npc.walkNorth(400)*/

//B Asynchronous Callback Functions implementation
/*npc.walkNorth(1400, () => {
    npc.walkEast(1200, () => {
        npc.walkSouth(300, () => {
            npc.walkEast(1500, () => {
                npc.walkSouth(1500, () => {
                    npc.walkWest(2700, () => {
                        npc.walkNorth(400)
                    })
                })
            })
        })
    })
})*/
//This method uses promises to clean up my code
/*npc.walkNorth(1400)
    .then(() => npc.walkEast(1200))
    .then(() => npc.walkSouth(300))
    .then(() => npc.walkEast(1500))
    .then(() => npc.walkSouth(1500))
    .then(() => npc.walkWest(2700))
    .then(() => npc.walkNorth(400))
*/
//Finally we'll use the Asynchronous way Using Async and Await
/*async function moveNPC(){
    await npc.walkNorth(1400)
    await npc.walkEast(1200)
    await npc.walkSouth(300)
    await npc.walkEast(1500)
    await npc.walkSouth(1500)
    await npc.walkWest(2700)
    await npc.walkNorth(400)
}*/

//*BONUS : loop over the track create infinite loop, adjust timing to make it circle a bigger portion of the screen :0
async function moveNPC() {
    while(true) {
        await npc.walkNorth(4000)
        await npc.walkNorth(2400)
        await npc.walkEast(4200)
        await npc.walkSouth(900)
        await npc.walkEast(3500)
        await npc.walkSouth(3500)
        await npc.walkWest(2700)
        await npc.walkNorth(3400)
    }
}