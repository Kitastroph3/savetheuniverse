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
console.log(ussAssembly)

//Instantiate alien ships
//----> create array of alien ships and remove once hull = 0???
let alienfleet = []
for (i = 0; i < 6; i++) { 
    alienfleet.push(new alien(`Alien${i}`, 0, 0, 0))
}
console.log(alienfleet)
//--------------------------------------------------------------
// 2. QUERIES

//----------------------------------------------------------
//3. CALL/INVOKE FUNCTIONS

//THE 'ATTACK' BUTTON MAKES FOLLOWING HAPPEN:
//  USS Assembly ATTACK
if (Math.random() <= ussAssembly.accuracy) {
    alienfleet[0].takedamage(ussAssembly.firepower)
    console.log('You shot the enemy!')
    console.log(alienfleet[0].hull)
        if (alienfleet[0].hull <= 0) {     
            console.log("An enemy ship has been neutralized")
        }
    } else {
        console.log('Your shot missed!')
    }
// if USS assembly attacks, then Alien Attacks
if (Math.random() <= alienfleet[0].accuracy) { 
    ussAssembly.takedamage(alienfleet[0].firepower)
    console.log('The alien ship shot you!')
    console.log(ussAssembly.hull)
        if (ussAssembly.hull <= 0) {
            console.log("The enemy shot you!")
   
        }
    } else {
        console.log('The enemy missed! No damage')
    }


//left off at making an array of aliens.... that way array can be updated in code later, as aliens die.