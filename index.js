// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
//npc.walkEast()

// have the NPC walking east 2 seconds then south 
///* Add this function async function NPC walks 2 sec east then 2 sec south*/
//async function moveNPC(){
  //  await npc.walkEast(2000)
  //  npc.walkSouth(2000)
  // }
//moveNPC()
//build a more complex track. Program a path for the NPC using the following directions and durations:

    /*North for 1400 ms
    East for 1200 ms
    South for 300 ms
    East for 1500 ms
    South for 1500 ms
    West for 2700 ms
    North for 400 ms*/

npc.walkNorth(1400)                               
npc.walkEast(1200)                              
npc.walkSouth(300)                              
npc.walkEast(1500)                              
npc.walkSouth(1500)                              
npc.walkWest(2700)                              
npc.walkNorth(400)                                           


// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)