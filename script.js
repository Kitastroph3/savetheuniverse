// 1. Creating ship class/ DECLARE DATA
class Ship { 
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

class Alien extends Ship{ 
    constructor(a, b, c, d) { 
        super(a,
        b = Math.floor(Math.random() * 4) + 3,
        c = Math.floor(Math.random() * 3) + 2,
        d = (Math.floor(Math.random() * 3) + 6) / 10,)
    }
    // attack method added for aliens because player chooses to attack
    attack() { 
        if (Math.random() <= alienfleet[0].accuracy) {
            ussAssembly.takedamage(alienfleet[0].firepower)
            console.log('The alien ship shot at you!')
            addtolist('The alien ship shot you!')
            updateScroll()
            if (ussAssembly.hull > 0) {
                console.log('you got hit!')
                addtolist('you got hit')
                ussAssemblystats()
                updateScroll()
            } else {
                console.log("you died")
                addtolist('you died')
                updateScroll()
                //play again?
            }
        } else {
            console.log('The enemy missed! No damage')
            addtolist('The enemy missed! No damage')
            ussAssemblystats()
            updateScroll()

        }
    }
}

//Make USSAssembly
const ussAssembly = new Ship("USS Assembly", 20, 5, .7)
//Instantiate alien ships
//----> create array of alien ships and remove once hull = 0???
const alienfleet = []
for (let i = 0; i < 6; i++) { 
    alienfleet.push(new Alien(`Alien ${i+1}`, 0, 0, 0))
}
//--------------------------------------------------------------
// 2. QUERIES
const fight = document.querySelector('#fight')
const fly = document.querySelector('#fly')
const record = document.querySelector('ul')
//----------------------------------------------------------
//3. FUNCTIONS

//fight next alien in fleet
function nextalien() {
    if (alienfleet.length > 0) {
        alienfleet.shift()
        console.log(`The alien fleet has ${(alienfleet.length)} remaining ships`)
        addtolist(`The alien fleet has ${(alienfleet.length)} remaining ships`)
        updateScroll()
        if (alienfleet.length === 0) {
            winnerwinner()
        }
    }
}

//USS assembly attacks!
function attack() {
    // parameters: the alien fleet has ships & the uss assembly has health (hull)
    if (alienfleet.length > 0 && ussAssembly.hull > 0) {
        //1. you shoot at alien and the hit lands
        if (Math.random() < ussAssembly.accuracy) {
            alienfleet[0].takedamage(ussAssembly.firepower)
            console.log("You shot the alien ship!")
            addtolist("You shot the alien")
            updateScroll()
            //A alien neutralized
            if (alienfleet[0].hull <= 0) {
                console.log("You neutralized an alien ship")
                addtolist("You neutralized the alien ship!")
                alienstats()
                nextalien()
                updateScroll()
            //B alien ship survives and shoots at you
            } else {
                console.log("Hit landed... but it looks like the enemy target is still active")
                addtolist("Hit landed... but it looks like the enemy target is still active")
                //alien attacks
                updateScroll()
                alienstats()
                alienfleet[0].attack()
            }
        //2. you shoot at the alien and your attack misses
        } else {
            console.log("your hit misses!")
            addtolist("your hit misses!")
            alienstats()
            updateScroll()
            alienfleet[0].attack()
        }
    // parameters not met & play again prompts. 
    // USS loss determined by alien attack function. 
    // USS win determined by nextalien function.    
    } else { 
        console.log("playagain?")
    }
}
function flee() { 
    console.log("Phew that was close!")
    alert(`Phew that was close! \n Are you sure you want to risk leaving?`)
    location.reload()
}

function winnerwinner() {
    alert("You won!")
    location.reload()
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

function addtolist(newtext) { 
    const text = document.createElement(`li`)
    text.textContent = newtext
    record.appendChild(text)
}

function updateScroll(){
    record.scrollIntoView(false)
}