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
    attack(x) { 
        
    }
}

class alien extends ship{ 
    constructor(a, b, c, d) { 
        super(a,
        b = Math.floor(Math.random() * 4) + 3,
        c = Math.floor(Math.random() * 3) + 2,
        d = (Math.floor(Math.random() * 3) + 6) / 10,
    )}
}

//Make USSAssembly
const ussAssembly = new ship("USS Assembly", 20, 5, .7)
//Instantiate alien ships
//----> create array of alien ships and remove once hull = 0???
const alienfleet = []
for (let i = 0; i < 6; i++) { 
    alienfleet.push(new alien(`Alien${i+1}`, 0, 0, 0))
}

// function win () {
//     console.log("You win!")
// }

//next alien removes alien ship from beginning of the array
const nextalien = function () {
    if (alienfleet.length > 0) {
        console.log(`The alien fleet has ${(alienfleet.length-1)} remaining ships`)
        alienfleet.shift()
        if (alienfleet.length <= 0) {
            console.log('You win!')
            
        } 
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
// function attack() {
//     if (Math.random() <= ussAssembly.accuracy) {
//         // you shoot.
//         alienfleet[0].takedamage(ussAssembly.firepower)
//         console.log('You shot the enemy!')
//         if (alienfleet[0].hull) {
//             console.log("An enemy ship has been neutralized")
//             if (alienfleet.length > 0){
//                 nextalien()
//             } else {
//                 console.log ("you win!")
//                 }
//         } else {
//             console.log("Hit landed! Enemy ship still active")
//             if (Math.random() <= alienfleet[0].accuracy) {
//                 ussAssembly.takedamage(alienfleet[0].firepower)
//                 if (ussAssembly.hull <= 0) {
//                     console.log("The enemy shot you!")
//                 }
//             }
//             else {
//                 console.log('The enemy missed! No damage')
//             }
//         }
//     } else {
//         console.log('Your shot missed!')
//         //you shoot & miss. alien attacks.
//         if (Math.random() <= alienfleet[0].accuracy) {
//             ussAssembly.takedamage(alienfleet[0].firepower)
//             console.log('The alien ship shot you!')
//             if (ussAssembly.hull >= 1) {
//                 console.log(ussAssembly)
//             } else {
//                 console.log("you died")
//             }
//         } else {
//             console.log('The enemy missed! No damage')
//         }
//     }
// }

function attack() { 
    //step 1: you shoot alien
    //  you hit alien
    if (alienfleet.length > 0 && Math.random() <= ussAssembly.accuracy) {
        //alien ship takes damage
        alienfleet[0].takedamage(ussAssembly.firepower)
        console.log("You shot the alien ship!")
        //A alien neutralized
        if (alienfleet[0].hull <= 0) {
            console.log("You neutralized an alien ship")
            nextalien()
        } else {
        //B alien ship survives and shoots at you
            console.log("Hit landed... but it looks like enemys ship is still active")
            // 1. you get HIT
            if (ussAssembly.hull > 0 &&  alienfleet.length >= 1 && Math.random() <= alienfleet[0].accuracy) {
                ussAssembly.takedamage(alienfleet[0].firepower)
                console.log("You got hit!")
            } else if (ussAssembly.hull > 0 && Math.random() > alienfleet[0].accuracy) {
                console.log("The alien misses!")
            // } else { 
            //     console.log("edge cases")
            }
        }
    } else {
        console.log ("your hit misses!")
        if (ussAssembly.hull > 0 && Math.random() <= alienfleet[0].accuracy) {
            ussAssembly.takedamage(alienfleet[0].firepower)
            console.log("You got hit!")
        } else if (ussAssembly.hull > 0 && Math.random() > alienfleet[0].accuracy) {
            console.log("The alien misses!")
        } else { 
            console.log("You lose")
        }
    }
}
attack()
attack()
attack()
attack()
attack()
attack()
attack()
attack()
attack()
console.log(alienfleet)
console.log(ussAssembly)