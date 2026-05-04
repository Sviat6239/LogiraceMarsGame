import { Item } from "./gameStats.js";

class Food extends Item {
    constructor(title, description, space, weight, feed, liquid, expirationDate) {
        super(title, description, space, weight);
        this.feed = feed;
        this.liquid = liquid;
        this.expirationDate = expirationDate;
    }
}

class Tool extends Item {
    constructor(title, description, space, weight, damage, durability, sharpness, hardness) {
        super(title, description, space, weight);
        this.damage = damage;
        this.durability = durability;
        this.sharpness = sharpness;
        this.hardness = hardness;
    }
}

class EmptyCan extends Item {
    constructor(title, description, space, weight, volume) {
        super(title, description, space, weight);
        this.volume = volume;
    }
}

class Canister extends Item {
    constructor(title, description, space, weight, volume) {
        super(title, description, space, weight);
        this.volume = volume;
    }
}

class Container extends Item {
    constructor(title, description, space, weight, maxSpace, freeSpace, inventory) {
        super(title, description, space, weight);
        this.maxSpace = maxSpace;
        this.freeSpace = freeSpace;
        this.inventory = {};
    }
}

class Battery extends Item {
    constructor(title, description, space, weight, maxCurrent, maxVoltage, leftCurrent, leftVoltage) {
        super(title, description, space, weight);
        this.maxCurrent = maxCurrent;
        this.maxVoltage = maxVoltage;
        this.leftCurrent = leftCurrent;
        this.leftVoltage = leftVoltage;
    }
}

export const cannedTuna = new Food({
    title: 'Canned Tuna',
    description: 'Tasty tuna in a can',
    space: 0.1,
    weight: 0.35,
    feed: 5,
    liquid: 0.2,
    expirationDate: 365 * 5,
})

export const botleOfWater = new Food({
    title: 'Botle of water',
    description: 'Just water',
    space: 0.15,
    weight: 1,
    feed: 0.01,
    liquid: 20,
    expirationDate: 365 * 10,
})

export const cannedBeans = new Food({
    title: 'Canned Beans',
    description: 'Hearty baked beans',
    space: 0.5,
    weight: 0.6,
    feed: 8,
    liquid: 0.1,
    expirationDate: 365 * 3,
});

export const cannedCorn = new Food({
    title: 'Canned Corn',
    description: 'Sweet corn kernels',
    space: 0.4,
    weight: 0.45,
    feed: 6,
    liquid: 0.05,
    expirationDate: 365 * 4,
});

export const cannedChicken = new Food({
    title: 'Canned Chicken',
    description: 'Shredded chicken in broth',
    space: 0.6,
    weight: 0.8,
    feed: 12,
    liquid: 0.3,
    expirationDate: 365 * 4,
});

export const cannedBeefStew = new Food({
    title: 'Canned Beef Stew (Large)',
    description: 'Thick beef stew, big can',
    space: 1.2,
    weight: 1.4,
    feed: 20,
    liquid: 0.6,
    expirationDate: 365 * 3,
});

export const cannedBeefStewSmall = new Food({
    title: 'Canned Beef Stew (Small)',
    description: 'Small portion of beef stew',
    space: 0.7,
    weight: 0.8,
    feed: 11,
    liquid: 0.35,
    expirationDate: 365 * 3,
});

export const sardinesInOil = new Food({
    title: 'Sardines in Oil',
    description: 'Oily fish, rich in fat',
    space: 0.3,
    weight: 0.5,
    feed: 7,
    liquid: 0.25,
    expirationDate: 365 * 2,
});

export const cannedSalmon = new Food({
    title: 'Canned Salmon',
    description: 'Flaked salmon, protein-rich',
    space: 0.5,
    weight: 0.9,
    feed: 13,
    liquid: 0.2,
    expirationDate: 365 * 3,
});

export const fruitCocktail = new Food({
    title: 'Fruit Cocktail',
    description: 'Mixed canned fruits in syrup',
    space: 0.6,
    weight: 0.7,
    feed: 6,
    liquid: 0.5,
    expirationDate: 365 * 2,
});

export const condensedMilk = new Food({
    title: 'Condensed Milk',
    description: 'Sweetened condensed milk',
    space: 0.4,
    weight: 0.9,
    feed: 4,
    liquid: 0.6,
    expirationDate: 365 * 5,
});

export const tomatoSoup = new Food({
    title: 'Tomato Soup',
    description: 'Rich tomato soup',
    space: 0.8,
    weight: 1.0,
    feed: 10,
    liquid: 0.9,
    expirationDate: 365 * 3,
});

export const galetaClassic = new Food({
    title: 'Galeta Classic',
    description: 'Sealed dry galetas, classic',
    space: 0.05,
    weight: 0.08,
    feed: 18,
    liquid: 0.02,
    expirationDate: 365 * 15,
});

export const galetaProtein = new Food({
    title: 'Galeta Protein',
    description: 'Galetas with added protein are more filling',
    space: 0.06,
    weight: 0.12,
    feed: 22,
    liquid: 0.03,
    expirationDate: 365 * 15,
});

export const galetaCompact = new Food({
    title: 'Galeta Compact',
    description: 'Compact, sealed portion, very light',
    space: 0.03,
    weight: 0.05,
    feed: 12,
    liquid: 0.01,
    expirationDate: 365 * 15,
});

export const galetaHighCal = new Food({
    title: 'Galeta High-Cal',
    description: 'Calorie galetas in airtight packaging',
    space: 0.07,
    weight: 0.15,
    feed: 28,
    liquid: 0.02,
    expirationDate: 365 * 15,
});

export const galetaHoney = new Food({
    title: 'Galeta Honey',
    description: 'Honey-filled galetas in a sealed container',
    space: 0.06,
    weight: 0.11,
    feed: 20,
    liquid: 0.04,
    expirationDate: 365 * 15,
});

export const bottle0_5L = new Food({
    title: 'Bottle 0.5L',
    description: 'Small water bottle 0.5L',
    space: 0.10,
    weight: 0.55,
    feed: 0.01,
    liquid: 10,
    expirationDate: 365 * 10,
});

export const bottle1L = new Food({
    title: 'Bottle 1L',
    description: 'Water bottle 1L',
    space: 0.15,
    weight: 1.05,
    feed: 0.01,
    liquid: 20,
    expirationDate: 365 * 10,
});

export const bottle1_5L = new Food({
    title: 'Bottle 1.5L',
    description: 'Water bottle 1.5L',
    space: 0.20,
    weight: 1.55,
    feed: 0.01,
    liquid: 30,
    expirationDate: 365 * 10,
});

export const bottle2L = new Food({
    title: 'Bottle 2L',
    description: 'Big water bottle 2L',
    space: 0.25,
    weight: 2.05,
    feed: 0.01,
    liquid: 40,
    expirationDate: 365 * 10,
});

export const bottle3L = new Food({
    title: 'Bottle 3L',
    description: 'Large water container 3L',
    space: 0.35,
    weight: 3.05,
    feed: 0.01,
    liquid: 60,
    expirationDate: 365 * 10,
});

export const bottle4L = new Food({
    title: 'Bottle 4L',
    description: 'Very large water container 4L',
    space: 0.45,
    weight: 4.05,
    feed: 0.01,
    liquid: 80,
    expirationDate: 365 * 10,
});

export const bottle5L = new Food({
    title: 'Bottle 5L',
    description: 'Huge water canister 5L',
    space: 0.55,
    weight: 5.05,
    feed: 0.01,
    liquid: 100,
    expirationDate: 365 * 10,
});

export const axe = new Tool({
    title: 'Axe',
    description: 'Heavy axe for chopping wood/doors',
    space: 1.0,
    weight: 3.5,
    damage: 25,
    durability: 80,
    sharpness: 60,
    hardness: 70,
});

export const hatchet = new Tool({
    title: 'Hatchet (Small Axe)',
    description: 'Small light axe, easier to carry',
    space: 0.6,
    weight: 1.2,
    damage: 14,
    durability: 60,
    sharpness: 55,
    hardness: 50,
});

export const hammer = new Tool({
    title: 'Hammer',
    description: 'Standard hammer, good for nails and blunt force',
    space: 0.8,
    weight: 1.1,
    damage: 10,
    durability: 85,
    sharpness: 5,
    hardness: 65,
});

export const sledgehammer = new Tool({
    title: 'Sledgehammer',
    description: 'Big heavy hammer for breaking stuff',
    space: 1.3,
    weight: 5.0,
    damage: 35,
    durability: 70,
    sharpness: 2,
    hardness: 75,
});

export const wrench = new Tool({
    title: 'Wrench',
    description: 'Fixed wrench for bolts',
    space: 0.6,
    weight: 0.9,
    damage: 6,
    durability: 90,
    sharpness: 1,
    hardness: 60,
});

export const adjustableWrench = new Tool({
    title: 'Adjustable Wrench',
    description: 'One wrench fits many bolts',
    space: 0.7,
    weight: 1.2,
    damage: 7,
    durability: 80,
    sharpness: 1,
    hardness: 62,
});

export const knifeCombat = new Tool({
    title: 'Knife (Combat)',
    description: 'Sharp fixed blade, good for cutting and defense',
    space: 0.2,
    weight: 0.25,
    damage: 18,
    durability: 50,
    sharpness: 90,
    hardness: 40,
});

export const foldingKnife = new Tool({
    title: 'Folding Knife',
    description: 'Small folding knife, light and handy',
    space: 0.1,
    weight: 0.12,
    damage: 8,
    durability: 40,
    sharpness: 70,
    hardness: 30,
});

export const screwdriverFlat = new Tool({
    title: 'Screwdriver (Flat)',
    description: 'Flat-head screwdriver',
    space: 0.15,
    weight: 0.15,
    damage: 2,
    durability: 60,
    sharpness: 5,
    hardness: 30,
});

export const screwdriverPhillips = new Tool({
    title: 'Screwdriver (Phillips)',
    description: 'Phillips-head screwdriver',
    space: 0.15,
    weight: 0.16,
    damage: 5,
    durability: 60,
    sharpness: 5,
    hardness: 30,
});

export const pliers = new Tool({
    title: 'Pliers',
    description: 'Useful for gripping and cutting wires',
    space: 0.25,
    weight: 0.35,
    damage: 4,
    durability: 75,
    sharpness: 10,
    hardness: 40,
});

export const crowbar = new Tool({
    title: 'Crowbar',
    description: 'Prying and levering tool',
    space: 1.0,
    weight: 2.2,
    damage: 20,
    durability: 85,
    sharpness: 2,
    hardness: 70,
});

export const shovel = new Tool({
    title: 'Shovel',
    description: 'Digging shovel, also for clearing debris',
    space: 1.2,
    weight: 2.8,
    damage: 12,
    durability: 80,
    sharpness: 10,
    hardness: 60,
});

export const swissKnife = new Tool({
    title: 'Swiss Army Knife',
    description: 'Multi-blade pocket knife with tools',
    space: 0.08,
    weight: 0.09,
    damage: 6,
    durability: 45,
    sharpness: 65,
    hardness: 25,
});

export const multitool = new Tool({
    title: 'Multitool',
    description: 'Modern multitool: pliers, blade, screwdriver etc.',
    space: 0.2,
    weight: 0.3,
    damage: 9,
    durability: 70,
    sharpness: 40,
    hardness: 45,
});

export const emptyCanSmall = new EmptyCan({
    title: 'Empty Can (Small)',
    description: 'An empty small tin can',
    space: 0.1,
    weight: 0.05,
    volume: 0.25,
});

export const emptyCanLarge = new EmptyCan({
    title: 'Empty Can (Large)',
    description: 'An empty large tin can',
    space: 0.2,
    weight: 0.12,
    volume: 0.6,
});

export const emptyBottle0_5L = new EmptyCan({
    title: 'Empty Bottle 0.5L',
    description: 'Empty plastic bottle 0.5L',
    space: 0.08,
    weight: 0.03,
    volume: 0.5,
});

export const emptyBottle1L = new EmptyCan({
    title: 'Empty Bottle 1L',
    description: 'Empty plastic bottle 1L',
    space: 0.12,
    weight: 0.05,
    volume: 1,
});

export const crushedPlasticBottle = new EmptyCan({
    title: 'Crushed Plastic Bottle',
    description: 'Crumpled plastic bottle (garbage)',
    space: 0.03,
    weight: 0.01,
    volume: 0.2,
});

export const brokenGlass = new Item({
    title: 'Broken Glass',
    description: 'Glass fragments, fragile debris',
    space: 0.2,
    weight: 0.2,
});

export const scrapMetal = new Item({
    title: 'Scrap Metal',
    description: 'Scrap metal, can be resold/recycled',
    space: 0.6,
    weight: 1.2,
});

export const plasticBag = new Item({
    title: 'Plastic Bag (empty)',
    description: 'Empty plastic bag',
    space: 0.02,
    weight: 0.01,
});

export const cardboardBox = new Item({
    title: 'Cardboard Box (flattened)',
    description: 'Folded cardboard box (garbage)',
    space: 0.1,
    weight: 0.05,
});

export const emptyCanisterSmall = new Canister({
    title: 'Empty Canister 2L',
    description: 'Empty 2L water canister',
    space: 0.3,
    weight: 0.2,
    volume: 2,
});

export const emptyCanisterLarge = new Canister({
    title: 'Empty Canister 5L',
    description: 'Empty 5L water canister',
    space: 0.5,
    weight: 0.35,
    volume: 5,
});

export const canister15L = new Canister({
    title: 'Canister 15L',
    description: 'Plastic canister 15 liters',
    space: 0.9,
    weight: 0.9,
    volume: 15,
});

export const canister20L = new Canister({
    title: 'Canister 20L',
    description: 'Plastic canister 20 liters',
    space: 1.1,
    weight: 1.2,
    volume: 20,
});

export const canister25L = new Canister({
    title: 'Canister 25L',
    description: 'Sturdy canister 25 liters',
    space: 1.3,
    weight: 1.6,
    volume: 25,
});

export const canister35L = new Canister({
    title: 'Canister 35L',
    description: 'Big canister 35 liters',
    space: 1.6,
    weight: 2.0,
    volume: 35,
});

export const barrel50L = new Canister({
    title: 'Barrel 50L',
    description: 'Metal barrel 50 liters (empty)',
    space: 2.2,
    weight: 6.0,
    volume: 50,
});

export const barrel100L = new Canister({
    title: 'Barrel 100L',
    description: 'Large metal drum 100 liters (empty)',
    space: 3.5,
    weight: 10.0,
    volume: 100,
});

export const emptyCanTiny = new EmptyCan({
    title: 'Empty Can (tiny)',
    description: 'Very small empty can',
    space: 0.05,
    weight: 0.02,
    volume: 0.15,
});

export const emptyCanPile = new EmptyCan({
    title: 'Pile of Empty Cans',
    description: 'Several crushed empty cans stuck together',
    space: 0.4,
    weight: 0.6,
    volume: 1.5,
});

export const emptyBottleLarge = new EmptyCan({
    title: 'Empty Bottle Large',
    description: 'Big empty plastic bottle',
    space: 0.25,
    weight: 0.08,
    volume: 2,
});

export const emptyBottleCrushed = new EmptyCan({
    title: 'Crushed Empty Bottle',
    description: 'Crushed plastic bottle, small volume',
    space: 0.03,
    weight: 0.02,
    volume: 0.3,
});

export const scrapMetalSmall = new Item({
    title: 'Scrap Metal (small)',
    description: 'Small pieces of metal, rusty',
    space: 0.5,
    weight: 1.5,
});

export const scrapMetalLarge = new Item({
    title: 'Scrap Metal (large)',
    description: 'Bigger metal scrap, heavy',
    space: 1.8,
    weight: 6.0,
});

export const metalPipe = new Item({
    title: 'Metal Pipe',
    description: 'Hollow metal pipe, useful for crafting',
    space: 1.2,
    weight: 3.0,
});

export const metalBoltPile = new Item({
    title: 'Pile of Bolts',
    description: 'Assorted bolts and screws',
    space: 0.15,
    weight: 0.4,
});

export const plasticScrapLarge = new Item({
    title: 'Plastic Scrap (large)',
    description: 'Sheets of plastic and broken containers',
    space: 1.0,
    weight: 0.8,
});

export const plasticBagPile = new Item({
    title: 'Plastic Bag Pile',
    description: 'Bundle of empty plastic bags',
    space: 0.12,
    weight: 0.05,
});

export const cardboardBundle = new Item({
    title: 'Cardboard Bundle',
    description: 'Crushed cardboard pieces',
    space: 0.6,
    weight: 0.3,
});

export const glassBottleBroken = new Item({
    title: 'Broken Glass Bottles',
    description: 'Shards and broken bottles (dangerous)',
    space: 0.4,
    weight: 0.9,
});

export const tinFragments = new Item({
    title: 'Tin Fragments',
    description: 'Sharp tin fragments from cans',
    space: 0.2,
    weight: 0.25,
});

export const canLidPile = new Item({
    title: 'Pile of Can Lids',
    description: 'Loose lids from opened cans',
    space: 0.08,
    weight: 0.12,
});

export const emptyCanister2L = new Canister({
    title: 'Empty Canister 2L',
    description: 'Small empty canister 2L',
    space: 0.35,
    weight: 0.18,
    volume: 2,
});

export const palletSmall = new Container({
    title: 'Pallet Small',
    description: 'Wooden pallet small',
    space: 1.0,
    weight: 5.0,
    maxSpace: 10,
    freeSpace: 10,
    inventory: {},
});

export const palletLarge = new Container({
    title: 'Pallet Large',
    description: 'Large pallet',
    space: 2.0,
    weight: 10.0,
    maxSpace: 25,
    freeSpace: 25,
    inventory: {},
});

export const woodenCrateSmall = new Container({
    title: 'Wooden Crate (Small)',
    description: 'Small wooden box',
    space: 0.8,
    weight: 3.0,
    maxSpace: 6,
    freeSpace: 6,
    inventory: {},
});

export const woodenCrateLarge = new Container({
    title: 'Wooden Crate (Large)',
    description: 'Large wooden box',
    space: 1.6,
    weight: 6.0,
    maxSpace: 14,
    freeSpace: 14,
    inventory: {},
});

export const metalChest = new Container({
    title: 'Metal Chest',
    description: 'Hard metal chest',
    space: 1.2,
    weight: 12.0,
    maxSpace: 12,
    freeSpace: 12,
    inventory: {},
});

export const lockerSmall = new Container({
    title: 'Locker Small',
    description: 'A small locker with a door',
    space: 0.9,
    weight: 8.0,
    maxSpace: 8,
    freeSpace: 8,
    inventory: {},
});

export const lockerLarge = new Container({
    title: 'Locker Large',
    description: 'Tall locker cabinet',
    space: 2.0,
    weight: 18.0,
    maxSpace: 22,
    freeSpace: 22,
    inventory: {},
});

export const shelfSingle = new Container({
    title: 'Shelf Single',
    description: 'One metal shelf',
    space: 0.6,
    weight: 4.0,
    maxSpace: 5,
    freeSpace: 5,
    inventory: {},
});

export const shelfDouble = new Container({
    title: 'Shelf Double',
    description: 'Two shelves, medium size',
    space: 1.0,
    weight: 7.0,
    maxSpace: 10,
    freeSpace: 10,
    inventory: {},
});

export const shelfIndustrial = new Container({
    title: 'Industrial Shelf',
    description: 'Industrial shelving unit',
    space: 3.0,
    weight: 25.0,
    maxSpace: 50,
    freeSpace: 50,
    inventory: {},
});

export const boxSmall = new Container({
    title: 'Box Small',
    description: 'The cardboard box is small',
    space: 0.2,
    weight: 0.2,
    maxSpace: 2,
    freeSpace: 2,
    inventory: {},
});

export const boxMedium = new Container({
    title: 'Box Medium',
    description: 'Medium cardboard box',
    space: 0.5,
    weight: 0.6,
    maxSpace: 5,
    freeSpace: 5,
    inventory: {},
});

export const boxLarge = new Container({
    title: 'Box Large',
    description: 'Large cardboard box',
    space: 1.0,
    weight: 1.2,
    maxSpace: 12,
    freeSpace: 12,
    inventory: {},
});

export const storageRack = new Container({
    title: 'Storage Rack',
    description: 'Modular shelving with compartments',
    space: 2.5,
    weight: 20.0,
    maxSpace: 40,
    freeSpace: 40,
    inventory: {},
});

export const drawerUnit = new Container({
    title: 'Drawer Unit',
    description: 'Chest of drawers',
    space: 1.4,
    weight: 12.0,
    maxSpace: 16,
    freeSpace: 16,
    inventory: {},
});

export const cabinetLocker = new Container({
    title: 'Cabinet Locker',
    description: 'Closed cabinet with shelves',
    space: 1.8,
    weight: 15.0,
    maxSpace: 20,
    freeSpace: 20,
    inventory: {},
});

export const marsPebbleTiny = new Item({
    title: 'Mars Pebble (Tiny)',
    description: 'A small Martian pebble',
    space: 0.02,
    weight: 0.03,
});
marsPebbleTiny.ironYield = 0.1;

export const marsPebbleSmall = new Item({
    title: 'Mars Pebble (Small)',
    description: 'A small stone with a small iron content',
    space: 0.04,
    weight: 0.06,
});
marsPebbleSmall.ironYield = 0.3;

export const marsPebbleMedium = new Item({
    title: 'Mars Pebble (Medium)',
    description: 'Medium stone, can be melted down',
    space: 0.08,
    weight: 0.16,
});
marsPebbleMedium.ironYield = 0.8;

export const marsPebbleLarge = new Item({
    title: 'Mars Rock (Large)',
    description: 'Big stone, lots of minerals',
    space: 0.2,
    weight: 0.6,
});
marsPebbleLarge.ironYield = 2.2;

export const ironNoduleSmall = new Item({
    title: 'Iron Nodule (Small)',
    description: 'A small glandular nodule',
    space: 0.1,
    weight: 0.4,
});
ironNoduleSmall.ironYield = 4;

export const ironNoduleMedium = new Item({
    title: 'Iron Nodule (Medium)',
    description: 'Medium iron piece, good for processing',
    space: 0.25,
    weight: 1.1,
});
ironNoduleMedium.ironYield = 10;

export const ironNoduleLarge = new Item({
    title: 'Iron Nodule (Large)',
    description: 'A large lump of iron ore',
    space: 0.7,
    weight: 3.5,
});
ironNoduleLarge.ironYield = 28;

export const hematiteChunk = new Item({
    title: 'Hematite Chunk',
    description: 'Hematite piece (rich in iron)',
    space: 0.3,
    weight: 0.9,
});
hematiteChunk.ironYield = 8;

export const basaltPieceSmall = new Item({
    title: 'Basalt Piece (Small)',
    description: 'Basalt chips, low in iron',
    space: 0.06,
    weight: 0.12,
});
basaltPieceSmall.ironYield = 0.2;

export const basaltPieceLarge = new Item({
    title: 'Basalt Piece (Large)',
    description: 'Large basalt fragment',
    space: 0.4,
    weight: 1.2,
});
basaltPieceLarge.ironYield = 1.0;

export const meteoriteFragment = new Item({
    title: 'Meteorite Fragment',
    description: 'The meteorite fragment is valuable and contains rare metals.',
    space: 0.15,
    weight: 0.7,
});
meteoriteFragment.ironYield = 6;
meteoriteFragment.rare = true;

export const glassyShard = new Item({
    title: 'Glassy Shard',
    description: 'A glassy piece, sharp, of volcanic glass',
    space: 0.05,
    weight: 0.08,
});
glassyShard.ironYield = 0.1;

export const regolithDustSmall = new Item({
    title: 'Regolith Dust (Small)',
    description: 'A packet of Martian dust (regolith), fine material',
    space: 0.02,
    weight: 0.02,
});
regolithDustSmall.ironYield = 0.05;

export const regolithBag = new Item({
    title: 'Regolith Bag (1kg)',
    description: '1 kg bag of Martian sand/dust',
    space: 0.12,
    weight: 1.0,
});
regolithBag.ironYield = 0.3;

export const regolithSackLarge = new Item({
    title: 'Regolith Sack (10kg)',
    description: 'A large bag of Martian sand (~10 kg)',
    space: 0.9,
    weight: 10.0,
});
regolithSackLarge.ironYield = 3;

export const sandFine = new Item({
    title: 'Martian Fine Sand',
    description: 'Fine Martian sand, good for filtering',
    space: 0.2,
    weight: 1.5,
});
sandFine.ironYield = 0.6;

export const sandCoarse = new Item({
    title: 'Martian Coarse Sand',
    description: 'Coarse-grained Martian sand',
    space: 0.25,
    weight: 2.0,
});
sandCoarse.ironYield = 0.8;

export const rockBoulderSmall = new Item({
    title: 'Rock Boulder (Small)',
    description: 'A small boulder, heavy and bulky',
    space: 1.6,
    weight: 12.0,
});
rockBoulderSmall.ironYield = 20;

export const rockBoulderLarge = new Item({
    title: 'Rock Boulder (Large)',
    description: 'Large boulder, requires equipment to move',
    space: 4.0,
    weight: 40.0,
});
rockBoulderLarge.ironYield = 80;

export const batteryCR2032 = new Battery({
    title: 'CR2032 (Coin)',
    description: 'Small coin cell, low capacity',
    space: 0.01,
    weight: 0.005,
    maxCurrent: 0.1,
    maxVoltage: 3.0,
    leftCurrent: 0.1,
    leftVoltage: 3.0,
});

export const batteryAAA = new Battery({
    title: 'AAA Battery',
    description: 'Standard small cylindrical alkaline cell',
    space: 0.02,
    weight: 0.011,
    maxCurrent: 0.5,
    maxVoltage: 1.5,
    leftCurrent: 0.5,
    leftVoltage: 1.5,
});

export const batteryAA = new Battery({
    title: 'AA Battery',
    description: 'Common household cell, moderate capacity',
    space: 0.03,
    weight: 0.024,
    maxCurrent: 1.0,
    maxVoltage: 1.5,
    leftCurrent: 1.0,
    leftVoltage: 1.5,
});

export const batteryC = new Battery({
    title: 'C Battery',
    description: 'Larger alkaline cell for higher loads',
    space: 0.08,
    weight: 0.095,
    maxCurrent: 2.5,
    maxVoltage: 1.5,
    leftCurrent: 2.5,
    leftVoltage: 1.5,
});

export const batteryD = new Battery({
    title: 'D Battery',
    description: 'Large alkaline cell, high capacity',
    space: 0.18,
    weight: 0.26,
    maxCurrent: 5.0,
    maxVoltage: 1.5,
    leftCurrent: 5.0,
    leftVoltage: 1.5,
});

export const battery9V = new Battery({
    title: '9V Battery',
    description: 'Rectangular 9V battery, multiple cells inside',
    space: 0.06,
    weight: 0.045,
    maxCurrent: 1.0,
    maxVoltage: 9.0,
    leftCurrent: 1.0,
    leftVoltage: 9.0,
});

export const batteryCR123A = new Battery({
    title: 'CR123A',
    description: 'High-drain camera cell, compact',
    space: 0.025,
    weight: 0.017,
    maxCurrent: 2.0,
    maxVoltage: 3.0,
    leftCurrent: 2.0,
    leftVoltage: 3.0,
});

export const battery18650 = new Battery({
    title: '18650 Li-ion Cell',
    description: 'Common rechargeable cell, good capacity',
    space: 0.04,
    weight: 0.048,
    maxCurrent: 5.0,
    maxVoltage: 3.7,
    leftCurrent: 5.0,
    leftVoltage: 3.7,
});

export const battery21700 = new Battery({
    title: '21700 Li-ion Cell',
    description: 'Larger Li-ion cell with higher capacity',
    space: 0.06,
    weight: 0.065,
    maxCurrent: 7.0,
    maxVoltage: 3.7,
    leftCurrent: 7.0,
    leftVoltage: 3.7,
});

export const battery26650 = new Battery({
    title: '26650 Li-ion Cell',
    description: 'High-capacity cylindrical cell',
    space: 0.09,
    weight: 0.12,
    maxCurrent: 10.0,
    maxVoltage: 3.7,
    leftCurrent: 10.0,
    leftVoltage: 3.7,
});

export const batteryPowerBankSmall = new Battery({
    title: 'Powerbank (5Wh)',
    description: 'Small USB powerbank, for phones',
    space: 0.2,
    weight: 0.12,
    maxCurrent: 2.0,
    maxVoltage: 5.0,
    leftCurrent: 2.0,
    leftVoltage: 5.0,
});

export const batteryPowerBankMedium = new Battery({
    title: 'Powerbank (20Wh)',
    description: 'Medium powerbank, multi-charge capacity',
    space: 0.4,
    weight: 0.35,
    maxCurrent: 3.0,
    maxVoltage: 5.0,
    leftCurrent: 3.0,
    leftVoltage: 5.0,
});

export const batteryLaptopPack = new Battery({
    title: 'Laptop Battery Pack',
    description: 'Multi-cell laptop battery, high energy',
    space: 0.8,
    weight: 0.6,
    maxCurrent: 20.0,
    maxVoltage: 11.1,
    leftCurrent: 20.0,
    leftVoltage: 11.1,
});

export const batteryMotorcycle = new Battery({
    title: 'Motorcycle Battery (12V)',
    description: 'Lead-acid starter battery for motorcycles',
    space: 1.2,
    weight: 4.5,
    maxCurrent: 120.0,
    maxVoltage: 12.0,
    leftCurrent: 120.0,
    leftVoltage: 12.0,
});

export const batteryCar = new Battery({
    title: 'Car Battery (12V)',
    description: 'Standard car starter battery, heavy and powerful',
    space: 2.5,
    weight: 12.0,
    maxCurrent: 600.0,
    maxVoltage: 12.0,
    leftCurrent: 600.0,
    leftVoltage: 12.0,
});

export const batteryDeepCycle = new Battery({
    title: 'Deep Cycle Battery',
    description: 'Deep-cycle battery for long discharge, off-grid use',
    space: 3.0,
    weight: 18.0,
    maxCurrent: 400.0,
    maxVoltage: 12.0,
    leftCurrent: 400.0,
    leftVoltage: 12.0,
});

export const batteryMarine = new Battery({
    title: 'Marine Battery',
    description: 'Marine/dual-purpose battery for boats',
    space: 3.5,
    weight: 22.0,
    maxCurrent: 500.0,
    maxVoltage: 12.0,
    leftCurrent: 500.0,
    leftVoltage: 12.0,
});

export const batteryForklift = new Battery({
    title: 'Forklift Battery (48V)',
    description: 'Large industrial battery pack for heavy machinery',
    space: 8.0,
    weight: 500.0,
    maxCurrent: 1000.0,
    maxVoltage: 48.0,
    leftCurrent: 1000.0,
    leftVoltage: 48.0,
});

export const batteryIndustrial = new Battery({
    title: 'Industrial Battery Rack',
    description: 'Massive accumulator rack for base power/storage',
    space: 12.0,
    weight: 1200.0,
    maxCurrent: 5000.0,
    maxVoltage: 96.0,
    leftCurrent: 5000.0,
    leftVoltage: 96.0,
});