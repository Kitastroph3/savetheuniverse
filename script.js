// 1. Creating ship class/ DECLARE DATA
class ship { 
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    takedamage(x) { 
        this.hull -= x
    }
}

class alien extends ship{ 
    constructor(a, b, c, d) { 
        super(a,
        b = Math.floor(Math.random() * 4) + 3,
        c = Math.floor(Math.random() * 3) + 2,
        d = (Math.floor(Math.random() * 3) + 6) / 10
    )}
}

//Make USSAssembly
const ussAssembly = new ship("USS Assembly", 20, 5, .7)
//Instantiate alien ships
//----> create array of alien ships and remove once hull = 0???
const alienfleet = []
for (let i = 0; i < 6; i++) { 
    alienfleet.push(new alien(`Alien${i}`, 0, 0, 0))
}

//next alien removes alien ship from beginning of the array
const nextalien = function () {
    if (alienfleet.length > 0) {
        alienfleet.shift()
        return `The alien fleet has ${(alienfleet.length)+1} remaining ships`
    } else { 
        return "You Win!"
    }
}

//--------------------------------------------------------------
// 2. QUERIES
// const fleebtn = document.querySelector('#fly')
//----------------------------------------------------------
//3. CALL/INVOKE FUNCTIONS
//  2. you hit alien but do not kill them
//      you get attacked
//      if your hull = 0, you lose!
//      make attack function?
//  3. you miss the alien
//      you get attacked
//      if your hull = 0, you lose!
    if (Math.random() <= ussAssembly.accuracy) {
        // you shoot. enemy neutralized
        alienfleet[0].takedamage(ussAssembly.firepower)
        console.log('You shot the enemy!')
        if (alienfleet[0].hull <= 0) {
            console.log("An enemy ship has been neutralized")
            nextalien()
        } else {
            console.log("Hit landed! Enemy ship still active")
            if (Math.random() <= alienfleet[0].accuracy) {
                ussAssembly.takedamage(alienfleet[0].firepower)
                if (ussAssembly.hull <= 0) {
                    console.log("The enemy shot you!")
                }
            }
            else {
                console.log('The enemy missed! No damage')
            }
        }
    } else {
        console.log('Your shot missed!')
        //your shot misses. alien attacks ussAssembly
        if (Math.random() <= alienfleet[0].accuracy) {
            ussAssembly.takedamage(alienfleet[0].firepower)
            console.log('The alien ship shot you!')
            if (ussAssembly.hull >= 1) {
                console.log(ussAssembly)
            } else {
                console.log("you died")
            }
        } else {
            console.log('The enemy missed! No damage')
        }
    }
console.log(alienfleet)
console.log(ussAssembly)