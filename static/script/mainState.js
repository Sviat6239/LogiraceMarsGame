import {State} from "./gameStats.js";
import {MainModule, StorageModule, GreenHouseModule, LivingModule} from "./stateModules.js";

export let mainState = new State();

const mainModule = new MainModule({
	title:'Main module',
	description: 'Main module description',
	damage: 0,
	maxSpace: 500,
	freeSpace: 500,
	oxygen: 18400,
	maxOxygen: 20000,
	temperature: 20,
	airPollution: 1
});

const storageModuleA = new StorageModule({
	title: 'Storage module A',
	description: 'Storage module A description',
	maxSpace: 2000,
	freeSpace: 2000,
	oxygen: 6000,
	maxOxygen: 8000,
	temperature: 18,
	airPollution: 1,
	waterTanks: 4,
	fuelTanks: 3,
	fridges: 2,
	oxygenCylinders: 20
});

const storageModuleB = new StorageModule({
	title: 'Storage module B',
	description: 'Storage module B description',
	maxSpace: 2000,
	freeSpace: 2000,
	oxygen: 6000,
	maxOxygen: 8000,
	temperature: 18,
	airPollution: 1,
	waterTanks: 4,
	fuelTanks: 3,
	fridges: 2,
	oxygenCylinders: 20
});

const livingModuleA = new LivingModule({
	title: 'LivingModule A',
	description: 'Living module A description',
	maxSpace: 300,
	freeSpace: 300,
	oxygen: 5000,
	maxOxygen: 9000,
	temperature: 22,
	airPollution: 1,
	beds: 2
});

const livingModuleB = new LivingModule({
	title: 'LivingModule B',
	description: 'Living module B description',
	maxSpace: 300,
	freeSpace: 300,
	oxygen: 5000,
	maxOxygen: 9000,
	temperature: 22,
	airPollution: 1,
	beds: 2
});

const livingModuleC = new LivingModule({
	title: 'LivingModule C',
	description: 'Living module C description',
	maxSpace: 300,
	freeSpace: 300,
	oxygen: 5000,
	maxOxygen: 9000,
	temperature: 22,
	airPollution: 1,
	beds: 2
});

const greenHouseModuleA = new GreenHouseModule({
	title: 'GreenHouse Module A',
	description: 'GreenHouse Module A description',
	damage: 0,
	maxSpace: 500,
	freeSpace: 500,
	oxygen: 18500,
	maxOxygen: 28000,
	temperature: 26,
	airPollution: 1,
	hydroponics: 6
})

const greenHouseModuleB = new GreenHouseModule({
	title: 'GreenHouse Module B',
	description: 'GreenHouse Module B description',
	damage: 0,
	maxSpace: 500,
	freeSpace: 500,
	oxygen: 18500,
	maxOxygen: 28000,
	temperature: 26,
	airPollution: 1,
	hydroponics: 6
})

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