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
        d = (Math.floor(Math.random() * 3) + 6) / 10,)
    }
    attack() { 
        if (Math.random() <= alienfleet[0].accuracy) {
            ussAssembly.takedamage(alienfleet[0].firepower)
            console.log('The alien ship shot at you!')
            if (ussAssembly.hull > 0) {
                console.log('you got hit!')
            } else {
                console.log("you died")
                //play again?
            }
        } else {
            console.log('The enemy missed! No damage')
        }
    }
}

//Make USSAssembly
const ussAssembly = new ship("USS Assembly", 20, 5, .7)
//Instantiate alien ships
//----> create array of alien ships and remove once hull = 0???
const alienfleet = []
for (let i = 0; i < 6; i++) { 
    alienfleet.push(new alien(`Alien ${i+1}`, 0, 0, 0))
}
//next alien removes alien ship from beginning of the array
const nextalien = function () {
    if (alienfleet.length > 0) {
        alienfleet.shift()
        console.log(`The alien fleet has ${(alienfleet.length)} remaining ships`)
        } 
    } 
//--------------------------------------------------------------
// 2. QUERIES
const fight = document.querySelector('#fight')
const fly = document.querySelector('#fly')
//----------------------------------------------------------
//3. FUNCTIONS
function attack() {
    //step 1: you shoot at alien
    if (alienfleet.length > 0 ) { 
        if (Math.random() < ussAssembly.accuracy) {
            alienfleet[0].takedamage(ussAssembly.firepower)
            console.log("You shot the alien ship!")
            //A alien neutralized
            if (alienfleet[0].hull <= 0) {
                console.log("You neutralized an alien ship")
                nextalien()
            //B alien ship survives and shoots at you
            } else {
                console.log("Hit landed... but it looks like enemys ship is still active")
                //alien attacks
                alienfleet[0].attack()
            }
            //C your attack misses
        } else {
            console.log("your hit misses!")
            alienfleet[0].attack()
        }
    } else { 
        console.log(winnerwinner())
    }
}
function flee() { 
    console.log("Phew that was close!")
}

function winnerwinner() {
    return "You win!"
}

function alienstats() { 
    console.log(alienfleet[0].name,
        `hull:`, alienfleet[0].hull,
        `firepower:`, alienfleet[0].firepower,
        `accuracy:`, alienfleet[0].accuracy)
}

function ussAssemblystats() { 
    console.log(ussAssembly.name,
        `hull:`, ussAssembly.hull,
        `firepower:`, ussAssembly.firepower,
        `accuracy:`, ussAssembly.accuracy)
}