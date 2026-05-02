import StateModule from "./gameStats.js";

export class StorageModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, watterTanks, inventory, fuelTanks, fridges, oxygenCylinders, nextLocation) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory);
        this.waterTanks = watterTanks;
        this.fuelTanks = fuelTanks;
        this.fridges = fridges;
        this.oxygenCylinders = oxygenCylinders;
    }
}

export class MainModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory);
    }
}

export class LivingModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory, beds) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory);
        this.beds = beds;
    }
}

export class GreenHouseModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory, hydroponics) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, inventory);
        this.hydroponics = hydroponics;
    }
}

export class ReactorModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, inventory, coreTemperature, fuelProcessing, energyProduction) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, inventory);
        this.coreTemperature = coreTemperature;
        this.fuelProcessing = fuelProcessing;
        this.energyProduction = energyProduction;
    }
}

export class CafeteriaModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, inventory) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, inventory);
    }
}

export class CorridorModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, inventory) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, inventory);
    }
}