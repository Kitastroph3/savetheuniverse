//-----------------------------MAKING PLAYERS--------------------------
class ship { 
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack() { 

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

const alien1 = new alien("alien1", 0, 0, 0)
const alien2 = new alien("alien2", 0, 0, 0)
const alien3 = new alien("alien3", 0, 0, 0)
const alien4 = new alien("alien4", 0, 0, 0)
const alien5 = new alien("alien5", 0, 0, 0)
const alien6 = new alien("alien6", 0, 0, 0)

//---THE PLAYERS-----------------------------------------------
let alienfleet = [alien1, alien2, alien3, alien4, alien5, alien6]

const ussAssembly = new ship("USS Assembly", 20, 5, .7)
//---------------------------------------------------
//--------------------ACTIONS---------------------------------
