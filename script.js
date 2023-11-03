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
const alien1 = new alien("alien1", 0, 0, 0)
console.log(alien1)
// const alien2 = new alien("alien2", 1, 1, 1)
// const alien3 = new alien("alien3", 1, 1, 1)
// const alien4 = new alien("alien4", 1, 1, 1)
// const alien5 = new alien("alien5", 1, 1, 1)
// const alien6 = new alien("alien6", 1, 1, 1)
// console.log(alien1, alien2, alien3, alien4, alien5, alien6)
//--------------------------------------------------------------
// 2. QUERIES


//----------------------------------------------------------
//3. CALL/INVOKE FUNCTIONS
//  ATTACK
if (Math.random() <= ussAssembly.accuracy) {
    alien1.takedamage(ussAssembly.firepower)
    console.log('You shot the enemy!')
    console.log(alien1.hull)
    if (alien1.hull <= 0) { 
        console.log("The enemy has been neutralized")
    }
    } else {
        console.log ('Your shot missed!')
}
