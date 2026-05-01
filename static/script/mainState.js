import {State} from "./gameStats";
import {MainModule, StorageModule, GreenHouseModule, LivingModule} from "./stateModules.js";

let mainModule = new MainModule();

let storageModuleA = new StorageModule();
let storageModuleB = new StorageModule();

let livingModuleA = new LivingModule();
let livingModuleB = new LivingModule();
let livingModuleC = new LivingModule();

let greenHouseModuleA = new GreenHouseModule();
let greenHouseModuleB = new GreenHouseModule();

let mainState = new State();

mainModule.title = 'Main module';
mainModule.description = 'Main module description';
mainModule.damage = 0;
mainModule.maxSpace = 500;
mainModule.freeSpace = 500;
mainModule.oxygen = 18400;
mainModule.maxOxygen = 20000;
mainModule.temperature = 20;
mainModule.airPollution = 1;

storageModuleA.title = 'Storage module A';
storageModuleA.description = 'Storage module A description';
storageModuleA.damage = 0;
storageModuleA.maxSpace = 2000;
storageModuleA.freeSpace = 2000;
storageModuleA.oxygen = 8000;
storageModuleA.maxOxygen = 10000;
storageModuleA.temperature = 18;
storageModuleA.airPollution = 1;
storageModuleA.waterTanks = 4;
storageModuleA.fuelTanks = 3;
storageModuleA.fridges = 2;
storageModuleA.oxygenCylinders = 20;

storageModuleB.title = 'Storage module B';
storageModuleB.description = 'Storage module B description';
storageModuleB.damage = 0;
storageModuleB.maxSpace = 2000;
storageModuleB.freeSpace = 2000;
storageModuleB.oxygen = 8000;
storageModuleB.maxOxygen = 10000;
storageModuleB.temperature = 18;
storageModuleB.airPollution = 1;
storageModuleB.waterTanks = 4;
storageModuleB.fuelTanks = 3;
storageModuleB.fridges = 2;
storageModuleB.oxygenCylinders = 20;

livingModuleA.title = 'Living module A';
livingModuleA.description = 'Living module A description';
livingModuleA.damage = 0;
livingModuleA.maxSpace = 300;
livingModuleA.freeSpace = 300;
livingModuleA.oxygen = 5000;
livingModuleA.maxOxygen = 7000;
livingModuleA.temperature = 22;
livingModuleA.airPollution = 1;
livingModuleA.beds = 2;

livingModuleB.title = 'Living module B';
livingModuleB.description = 'Living module B description';
livingModuleB.damage = 0;
livingModuleB.maxSpace = 300;
livingModuleB.freeSpace = 300;
livingModuleB.oxygen = 5000;
livingModuleB.maxOxygen = 7000;
livingModuleB.temperature = 22;
livingModuleB.airPollution = 1;
livingModuleB.beds = 2;

livingModuleC.title = 'Living module C';
livingModuleC.description = 'Living module C description';
livingModuleC.damage = 0;
livingModuleC.maxSpace = 300;
livingModuleC.freeSpace = 300;
livingModuleC.oxygen = 5000;
livingModuleC.maxOxygen = 7000;
livingModuleC.temperature = 22;
livingModuleC.airPollution = 1;
livingModuleC.beds = 2;

greenHouseModuleA.title = 'GreenHouse module A';
greenHouseModuleA.description = 'GreenHouse module A description';
greenHouseModuleA.damage = 0;
greenHouseModuleA.maxSpace = 500;
greenHouseModuleA.freeSpace = 500;
greenHouseModuleA.oxygen = 18500;
greenHouseModuleA.maxOxygen = 22000;
greenHouseModuleA.temperature = 26;
greenHouseModuleA.airPollution = 1;
greenHouseModuleA.hydroponics = 6;

greenHouseModuleB.title = 'GreenHouse module B';
greenHouseModuleB.description = 'GreenHouse module B description';
greenHouseModuleB.damage = 0;
greenHouseModuleB.maxSpace = 500;
greenHouseModuleB.freeSpace = 500;
greenHouseModuleB.oxygen = 19800;
greenHouseModuleB.maxOxygen = 22000;
greenHouseModuleB.temperature = 26;
greenHouseModuleB.airPollution = 1;
greenHouseModuleB.hydroponics = 6;

mainState.title = 'Main state';
mainState.description = 'Main state description';
mainState.modules = [
	mainModule,
	storageModuleA,
	storageModuleB,
	livingModuleA,
	livingModuleB,
	livingModuleC,
	greenHouseModuleA,
	greenHouseModuleB
];