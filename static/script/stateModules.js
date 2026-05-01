import StateModule from "./gameStats.js";

export class StorageModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, watterTanks, fuelTanks, fridges, oxygenCylinders, nextLocation) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation);
        this.waterTanks = watterTanks;
        this.fuelTanks = fuelTanks;
        this.fridges = fridges;
        this.oxygenCylinders = oxygenCylinders;
    }
}

export class MainModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation);
    }
}

export class LivingModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, beds) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation);
        this.beds = beds;
    }
}

export class GreenHouseModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation, hydroponics) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, moinsture, nextLocation);
        this.hydroponics = hydroponics;
    }
}

export class ReactorModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation, coreTemperature, fuelProcessing, energyProduction) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation);
        this.coreTemperature = coreTemperature;
        this.fuelProcessing = fuelProcessing;
        this.energyProduction = energyProduction;
    }
}

export class CafeteriaModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation);
    }
}

export class CorridorModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, moinsture, energyConsumption, nextLocation);
    }
}