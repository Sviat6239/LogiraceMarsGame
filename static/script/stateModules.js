import StateModule from "./gameStats.js";

export class StorageModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, watterTanks, fuelTanks, fridges, oxygenCylinders) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution);
        this.waterTanks = watterTanks;
        this.fuelTanks = fuelTanks;
        this.fridges = fridges;
        this.oxygenCylinders = oxygenCylinders;
    }
}

export class MainModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution);
    }
}

export class LivingModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, beds) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption);
        this.beds = beds;
    }
}

export class GreenHouseModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption, hydroponics) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption);
        this.hydroponics = hydroponics;
    }
}

export class ReactorModule extends StateModule {
    constructor(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption,coreTemperature, fuelProcessing, energyProduction) {
        super(title, description, damage, maxSpace, freeSpace, oxygen, maxOxygen, temperature, airPollution, energyConsumption);
        this.coreTemperature = coreTemperature;
        this.fuelProcessing = fuelProcessing;
        this.energyProduction = energyProduction;
    }
}