import { State } from "./gameStats.js";
import { MainModule, StorageModule, GreenHouseModule, LivingModule, ReactorModule, CorridorModule, CafeteriaModule } from "./stateModules.js";

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
	airPollution: 1,
	energyConsumption: 2000,
	moinsture: 20,
	nextLocation: [1]
});

const cafeteriaModule = new CafeteriaModule({
	title: 'Cafeteria Module',
	description: 'Cafeteria module',
	maxSpace: 400,
	freeSpace: 400,
	oxygen: 10000,
	maxOxygen: 11000,
	temperature: 19,
	airPollution: 2,
	energyConsumption: 2700,
	moinsture: 23,
	nextLocation: [1, 7, 3, 11]
})

const mainCorridor = new CorridorModule({
	title: 'Main corridor',
	description: 'Just corridor',
	maxSpace: 250,
	freeSpace: 250,
	oxygen: 3000,
	maxOxygen: 3200,
	temperature: 16,
	airPollution: 2,
	moinsture: 18,
	energyConsumption: 400,
	nextLocation: [2],
})

const technicalCorridor = new CorridorModule({
	title: 'Technical corridor',
	description: 'Straight way to sorages and the reactor',
	maxSpace: 200,
	freeSpace: 200,
	oxygen: 2700,
	maxOxygen: 3000,
	temperature: 17,
	airPollution: 2,
	moinsture: 22,
	energyConsumption: 370,
	nextLocation: [2, 12, 13, 10],
})

const greenCorridor = new CorridorModule({
	title: 'Green Corridor',
	description: 'Way to the green-house modules',
	maxSpace: 200,
	freeSpace: 200,
	oxygen: 3000,
	maxOxygen: 3000,
	temperature: 19,
	airPollution: 0,
	moinsture: 30,
	energyConsumption: 370,
	nextLocation: [2, 8, 9],
})

const livingCorridor = new CorridorModule({
	title: 'Corridor of life',
	description: 'Corridor to the living modules',
	maxSpace: 250,
	freeSpace: 250,
	oxygen: 3000,
	maxOxygen: 3000,
	temperature: 18,
	airPollution: 1,
	moinsture: 18,
	energyConsumption: 390,
	nextLocation: [2, 4, 5, 6],
})

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
	fridges: 3,
	oxygenCylinders: 20,
	energyConsumption: 4000,
	moinsture: 20,
	nextLocation: [11],
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
	oxygenCylinders: 20,
	energyConsumption: 3500,
	moinsture: 21,
	nextLocation: [11]
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
	beds: 2,
	energyConsumption: 1000,
	moinsture: 20,
	nextLocation: [3]
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
	beds: 2,
	energyConsumption: 1000,
	moinsture: 22,
	nextLocation: [3]
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
	beds: 2,
	energyConsumption: 1000,
	moinsture: 21,
	nextLocation: [3]
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
	hydroponics: 6,
	energyConsumption: 5000,
	moinsture: 58,
	nextLocation: [7]
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
	hydroponics: 6,
	energyConsumption: 5000,
	moinsture: 60,
	nextLocation: [7]
})

const reactorModule = new ReactorModule({
	title: 'Reactor Module',
	description: 'Reactor Module Description',
	damage: 0,
	maxSpace: 200,
	freeSpace: 200,
	oxygen: 8000,
	maxOxygen: 8000,
	temperature: 31,
	airPollution: 2,
	coreTemperature: 311,
	fuelProcessing: 5,
	energyProduction: 100000,
	energyConsumption: 2000,
	moinsture: 25,
	nextLocation: [11]
})

mainState.title = 'Main state';
mainState.description = 'Main state description';
mainState.modules = [
	mainModule, //0
	mainCorridor, //1
	cafeteriaModule, //2
	livingCorridor, //3
	livingModuleA, //4
	livingModuleB, //5
	livingModuleC, //6
	greenCorridor, //7
	greenHouseModuleA, //8
	greenHouseModuleB, //9
	reactorModule, //10
	technicalCorridor, //11
	storageModuleA, //12
	storageModuleB, //13
];