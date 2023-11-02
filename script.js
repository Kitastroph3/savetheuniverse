// Creating ship class
class ship { 
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accurary = accuracy;
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

//instantiate USS ship
const ussAssembly = new ship("USS Assembly", 20, 5, .7)
console.log(ussAssembly)
//instantiate alien ship
const alien1 = new alien("alien1", 1, 1, 1)
const alien2 = new alien("alien2", 1, 1, 1)
const alien3 = new alien("alien3", 1, 1, 1)
const alien4 = new alien("alien4", 1, 1, 1)
const alien5 = new alien("alien5", 1, 1, 1)
const alien6 = new alien("alien6", 1, 1, 1)
console.log(alien1, alien2, alien3, alien4, alien5, alien6)