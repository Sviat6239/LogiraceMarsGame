export class Player{
    constructor(hunger, thirst, health, mentalHealth, radiation, intoxication, stamina, maxSpace, freeSpace, maxWeight, equipedSpacesuit, inventory){
        this.hunger = hunger;
        this.thirst = thirst;
        this.health = health;
        this.mentalHealth = mentalHealth;
        this.radiation = radiation;
        this.intoxication = intoxication;
        this.stamina = stamina;
        this.maxSpace = maxSpace;
        this.freeSpace = freeSpace;
        this.maxWeight = maxWeight;
        this.equipedScafander = equipedSpacesuit;
        this.inventory = inventory;
    }
}

export class Spacesuit{
    constructor(title, description, maxWeight, weight, maxSpace, freeSpace, maxOxygen, oxygen, durability){
        this.title = title;
        this.description = description;
        this.maxWeight = maxWeight;
        this.weight = weight;
        this.maxSpace = maxSpace;
        this.freeSpace = freeSpace;
        this.maxOxygen = maxOxygen;
        this.oxygen = oxygen;
        this.durability = durability;
    }
}

export class State{
    constructor(title, description, modules) {
        this.title = title;
        this.description = description;
        this.modules = modules;
    }
}

export class StateModules{
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen){
        this.title = title;
        this.description = description;
        this.damage = damage;
        this.maxSpace = maxSpace;
        this.freeSpace = freeSpace;
        this.oxygen = oxygen;
        this.maxOxygen = maxOxygen;
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