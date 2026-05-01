class Player{
    constructor(hunger, thirst, health, mentalHealth, radiation, intoxication, stamina, freeSpace, maxWeight){
        this.hunger = hunger;
        this.thirst = thirst;
        this.health = health;
        this.mentalHealth = mentalHealth;
        this.radiation = radiation;
        this.intoxication = intoxication;
        this.stamina = stamina;
        this.freeSpace = freeSpace;
        this.maxWeight = maxWeight;
    }
}

class StorageModule{
    constructor(title, space){
        this.title = title;
        this.space = space;
    }
}

class GreeHouseModule{
    constructor(light, growSpeed){
        this.light = light;
        this.growSpeed = growSpeed;
    }
}

class SolarPanels{
    constructor(production, dustCovering, damage){
        this.production = production;
        this.dustCovering = dustCovering;
        this.damage = damage;
    }
}

class Item{
    constructor(title, description, space, weight){
        this.title = title;
        this.description = description;
        this.space = space;
        this.weight = weight;
    }
}