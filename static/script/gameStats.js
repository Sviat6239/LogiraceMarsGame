export class Player{
    constructor(hunger, thirst, health, mentalHealth, radiation, intoxication, stamina, freeSpace, maxWeight, equipedSpacesuit, inventory){
        this.hunger = hunger;
        this.thirst = thirst;
        this.health = health;
        this.mentalHealth = mentalHealth;
        this.radiation = radiation;
        this.intoxication = intoxication;
        this.stamina = stamina;
        this.freeSpace = freeSpace;
        this.maxWeight = maxWeight;
        this.equipedScafander = equipedSpacesuit;
        this.inventory = inventory;
    }
}

export class Spacesuit{
    constructor(title, description, maxWeight, weight, freeSpace, maxOxygen, oxygen, durability){
        this.title = title;
        this.description = description;
        this.maxWeight = maxWeight;
        this.weight = weight;
        this.freeSpace = freeSpace;
        this.maxOxygen = maxOxygen;
        this.oxygen = oxygen;
        this.durability = durability;
    }
}

export class StorageModule{
    constructor(title, space){
        this.title = title;
        this.space = space;
    }
}

export class GreeHouseModule{
    constructor(light, growSpeed){
        this.light = light;
        this.growSpeed = growSpeed;
    }
}

export class SolarPanels{
    constructor(production, dustCovering, damage){
        this.production = production;
        this.dustCovering = dustCovering;
        this.damage = damage;
    }
}

export class Item{
    constructor(title, description, space, weight){
        this.title = title;
        this.description = description;
        this.space = space;
        this.weight = weight;
    }
}