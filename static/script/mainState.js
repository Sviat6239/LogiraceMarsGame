import { State } from "./gameStats.js";
import { MainModule, StorageModule, GreenHouseModule, LivingModule, ReactorModule } from "./stateModules.js";

export let mainState = new State();

const mainModule = new MainModule({
	title: 'Main module',
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
	title: 'Living Module A',
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
	title: 'Living Module B',
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
	title: 'Living Module C',
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

const reactorModule = new ReactorModule({
	title: 'Reactor Module',
	description: 'Reactor Module Description',
	damage: 0,
	maxSpace: 200,
	freeSpace: 200,
	oxygen: 8000,
	maxOxygen: 8000,
	temperature: 27,
	airPollution: 2,
	coreTemperature: 311,
	fuelProcessing: 5,
	energyProduction: 100000,
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
	greenHouseModuleB,
	reactorModule
];