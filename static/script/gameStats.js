export class Player {
    constructor(hunger, thirst, health, mentalHealth, radiation, intoxication, stamina, maxSpace, freeSpace, maxWeight, equipedSpacesuit, inventory, location) {
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
        this.location = location;
    }
}

export class Spacesuit {
    constructor(title, description, maxWeight, weight, maxSpace, freeSpace, maxOxygen, oxygen, durability) {
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

export class State {
    constructor(title, description, modules, temperature, oxygen, maxOxygen, maxSpace, freeSpace, airPollution) {
        this.title = title;
        this.description = description;
        this.modules = modules;
        this.temperature = temperature;
        this.oxygen = oxygen;
        this.maxSpace = maxSpace;
        this.freeSpace = freeSpace;
        this.airPolution = airPollution;
    }
}

export default class StateModule {
    constructor({
        title, description,
        damage = 0,
        maxSpace = 0,
        freeSpace = 0,
        oxygen = 0,
        maxOxygen = 100,
        temperature = 20,
        airPollution = 0,
        energyConsumption = 0,
        moinsture = 20,
        nextLocation = [],
        inventory = {},
    }) {
        this.title = title;
        this.description = description;
        this.damage = damage;
        this.maxSpace = maxSpace;
        this.freeSpace = freeSpace;
        this.oxygen = oxygen;
        this.maxOxygen = maxOxygen;
        this.temperature = temperature;
        this.airPollution = airPollution;
        this.energyConsumption = energyConsumption;
        this.moinsture = moinsture;
        this.nextLocation = nextLocation;
        this.invetory = inventory;
    }
}

export class SolarPanels {
    constructor(production, dustCovering, damage) {
        this.production = production;
        this.dustCovering = dustCovering;
        this.damage = damage;
    }
}

export class Item {
    constructor(title, description, space, weight) {
        this.title = title;
        this.description = description;
        this.space = space;
        this.weight = weight;
    }
}