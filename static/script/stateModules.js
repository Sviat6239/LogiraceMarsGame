import StateModule from "./gameStats.js";

class StorageModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, watterTanks, fuelTanks, fridges, oxygenCylinders) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution);
        this.waterTanks = watterTanks;
        this.fuelTanks = fuelTanks;
        this.fridges = fridges;
        this.oxygen = oxygenCylinders;
    }
}

class MainModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution);
    }
}

class LivingModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, beds) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution);
        this.beds = beds;
    }
}

class GreenHouseModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, hydroponics) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution);
        this.hydroponics = hydroponics;
    }
}