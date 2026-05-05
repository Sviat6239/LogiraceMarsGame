import { State } from "./gameStats.js";
import { MainModule, StorageModule, GreenHouseModule, LivingModule, ReactorModule, CorridorModule, CafeteriaModule } from "./stateModules.js";
import { cannedTuna, botleOfWater, cannedBeans, cannedBeefStew, cannedChicken, cannedCorn } from "./items.js";

export let mainState = new State();

const mainModule = new MainModule({
	title: 'Main module',
	description: 'Main module description',
	damage: 0,
	maxSpace: 600,
	freeSpace: 600,
	oxygen: 18400,
	maxOxygen: 20000,
	temperature: 20,
	airPollution: 1,
	energyConsumption: 2000,
	moinsture: 20,
	nextLocation: [1],
	inventory: {
		cannedTuna: 7,
		bottle1L: 3,
		galetaClassic: 10,
		batteryAA: 4,
		batteryAAA: 6,
		multitool: 1,
		screwdriverPhillips: 1,
		screwdriverFlat: 1,
		pliers: 1,
		emptyBottle1L: 2,
		scrapMetalSmall: 1
	}

});

const cafeteriaModule = new CafeteriaModule({
	title: 'Cafeteria Module',
	description: 'Cafeteria module',
	maxSpace: 500,
	freeSpace: 500,
	oxygen: 10000,
	maxOxygen: 11000,
	temperature: 19,
	airPollution: 2,
	energyConsumption: 2700,
	moinsture: 23,
	nextLocation: [1, 7, 3, 11],
	inventory: {
		cannedBeans: 5,
		cannedCorn: 4,
		cannedChicken: 3,
		cannedBeefStewSmall: 2,
		fruitCocktail: 2,
		emptyCanSmall: 6,
		emptyCanLarge: 3,
		plasticBag: 4,
		brokenGlass: 2,
		tinFragments: 3,
		canLidPile: 2
	},
})

const mainCorridor = new CorridorModule({
	title: 'Main corridor',
	description: 'Just corridor',
	maxSpace: 350,
	freeSpace: 350,
	oxygen: 3000,
	maxOxygen: 3200,
	temperature: 16,
	airPollution: 2,
	moinsture: 18,
	energyConsumption: 400,
	nextLocation: [0, 2],
	inventory: {
		crushedPlasticBottle: 2,
		cardboardBox: 1,
		brokenGlass: 1
	},
})

const technicalCorridor = new CorridorModule({
	title: 'Technical corridor',
	description: 'Straight way to sorages and the reactor',
	maxSpace: 350,
	freeSpace: 350,
	oxygen: 2700,
	maxOxygen: 3000,
	temperature: 17,
	airPollution: 2,
	moinsture: 22,
	energyConsumption: 370,
	nextLocation: [2, 12, 13, 10],
	inventory: {
		screwdriverFlat: 1,
		screwdriverPhillips: 1,
		emptyBottleCrushed: 2,
		scrapMetalSmall: 1
	},
})

const greenCorridor = new CorridorModule({
	title: 'Green Corridor',
	description: 'Way to the green-house modules',
	maxSpace: 350,
	freeSpace: 350,
	oxygen: 3000,
	maxOxygen: 3000,
	temperature: 19,
	airPollution: 0,
	moinsture: 30,
	energyConsumption: 370,
	nextLocation: [2, 8, 9],
	inventory: {
		plasticScrapLarge: 1,
		emptyBottleLarge: 1
	},
})

const livingCorridor = new CorridorModule({
	title: 'Corridor of life',
	description: 'Corridor to the living modules',
	maxSpace: 350,
	freeSpace: 350,
	oxygen: 3000,
	maxOxygen: 3000,
	temperature: 18,
	airPollution: 1,
	moinsture: 18,
	energyConsumption: 390,
	nextLocation: [2, 4, 5, 6],
	inventory: {
		crushedPlasticBottle: 1,
		plasticBag: 2,
		emptyBottle0_5L: 1
	},
})

const storageModuleA = new StorageModule({
	title: 'Storage module A',
	description: 'Storage module A description',
	maxSpace: 5000,
	freeSpace: 5000,
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
	inventory: {
		canister35L: 2,
		barrel50L: 1,
		barrel100L: 1,
		boxLarge: 3,
		boxMedium: 4,
		palletLarge: 1,
		palletSmall: 2,
		scrapMetalLarge: 2,
		metalBoltPile: 3,
		emptyCanisterSmall: 3,
		emptyCanisterLarge: 2
	},
});

const storageModuleB = new StorageModule({
	title: 'Storage module B',
	description: 'Storage module B description',
	maxSpace: 5000,
	freeSpace: 5000,
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
	nextLocation: [11],
	inventory: {
		canister20L: 2,
		canister25L: 2,
		canister35L: 1,
		palletSmall: 1,
		woodenCrateLarge: 2,
		woodenCrateSmall: 3,
		scrapMetal: 3,
		scrapMetalSmall: 2,
		cardboardBundle: 2,
		plasticScrapLarge: 2
	},
});

const livingModuleA = new LivingModule({
	title: 'Living Module A',
	description: 'Living module A description',
	maxSpace: 400,
	freeSpace: 400,
	oxygen: 5000,
	maxOxygen: 9000,
	temperature: 22,
	airPollution: 1,
	beds: 2,
	energyConsumption: 1000,
	moinsture: 20,
	nextLocation: [3],
	inventory: {
		bottle0_5L: 2,
		galetaCompact: 4,
		foldingKnife: 1,
		batteryAAA: 2,
		emptyBottle0_5L: 1,
		cardboardBox: 1
	},
});

const livingModuleB = new LivingModule({
	title: 'Living Module B',
	description: 'Living module B description',
	maxSpace: 400,
	freeSpace: 400,
	oxygen: 5000,
	maxOxygen: 9000,
	temperature: 22,
	airPollution: 1,
	beds: 2,
	energyConsumption: 1000,
	moinsture: 22,
	nextLocation: [3],
	inventory: {
		bottle1L: 1,
		galetaHoney: 3,
		swissKnife: 1,
		batteryAA: 3,
		plasticBagPile: 1,
		emptyCanTiny: 2
	},
});

const livingModuleC = new LivingModule({
	title: 'Living Module C',
	description: 'Living module C description',
	maxSpace: 400,
	freeSpace: 400,
	oxygen: 5000,
	maxOxygen: 9000,
	temperature: 22,
	airPollution: 1,
	beds: 2,
	energyConsumption: 1000,
	moinsture: 21,
	nextLocation: [3],
	inventory: {
		galetaClassic: 5,
		bottle0_5L: 1,
		batteryCR2032: 2,
		emptyBottle0_5L: 1,
		cardboardBundle: 1
	},
});

const greenHouseModuleA = new GreenHouseModule({
	title: 'GreenHouse Module A',
	description: 'GreenHouse Module A description',
	damage: 0,
	maxSpace: 700,
	freeSpace: 700,
	oxygen: 18500,
	maxOxygen: 28000,
	temperature: 26,
	airPollution: 1,
	hydroponics: 6,
	energyConsumption: 5000,
	moinsture: 58,
	nextLocation: [7],
	inventory: {
		bottle3L: 2,
		bottle5L: 1,
		canister15L: 1,
		shovel: 1,
		hatchet: 1,
		emptyCanister2L: 2,
		sandFine: 1,
		regolithBag: 1
	},
})

const greenHouseModuleB = new GreenHouseModule({
	title: 'GreenHouse Module B',
	description: 'GreenHouse Module B description',
	damage: 0,
	maxSpace: 700,
	freeSpace: 700,
	oxygen: 18500,
	maxOxygen: 28000,
	temperature: 26,
	airPollution: 1,
	hydroponics: 6,
	energyConsumption: 5000,
	moinsture: 60,
	nextLocation: [7],
	inventory: {
		bottle4L: 1,
		bottle5L: 2,
		canister20L: 1,
		canister25L: 1,
		pliers: 1,
		emptyBottle1L: 2,
		sandCoarse: 1,
		regolithDustSmall: 2
	},
})

const reactorModule = new ReactorModule({
	title: 'Reactor Module',
	description: 'Reactor Module Description',
	damage: 0,
	maxSpace: 400,
	freeSpace: 400,
	oxygen: 8000,
	maxOxygen: 8000,
	temperature: 31,
	airPollution: 2,
	coreTemperature: 311,
	fuelProcessing: 5,
	energyProduction: 100000,
	energyConsumption: 2000,
	moinsture: 25,
	nextLocation: [11],
	inventory: {
		wrench: 1,
		adjustableWrench: 1,
		crowbar: 1,
		batteryCR123A: 2,
		battery18650: 3,
		scrapMetal: 2,
		metalPipe: 1,
		tinFragments: 2
	},
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