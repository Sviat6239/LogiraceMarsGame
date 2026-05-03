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

const cannedTuna = new Food({
    title: 'Canned Tuna',
    description: 'Tasty tuna in a can',
    space: 0.1,
    weight: 0.35,
    feed: 5,
    liquid: 0.2,
    expirationDate: 365 * 5,
})



const botleOfWater = new Food({
    title: 'Botle of water',
    description: 'Just water',
    space: 0.15,
    weight: 1,
    feed: 0.01,
    liquid: 20,
    expirationDate: 365 * 10,
})

const cannedBeans = new Food({
    title: 'Canned Beans',
    description: 'Hearty baked beans',
    space: 0.5,
    weight: 0.6,
    feed: 8,
    liquid: 0.1,
    expirationDate: 365 * 3,
});

const cannedCorn = new Food({
    title: 'Canned Corn',
    description: 'Sweet corn kernels',
    space: 0.4,
    weight: 0.45,
    feed: 6,
    liquid: 0.05,
    expirationDate: 365 * 4,
});

const cannedChicken = new Food({
    title: 'Canned Chicken',
    description: 'Shredded chicken in broth',
    space: 0.6,
    weight: 0.8,
    feed: 12,
    liquid: 0.3,
    expirationDate: 365 * 4,
});

const cannedBeefStew = new Food({
    title: 'Canned Beef Stew (Large)',
    description: 'Thick beef stew, big can',
    space: 1.2,
    weight: 1.4,
    feed: 20,
    liquid: 0.6,
    expirationDate: 365 * 3,
});

const cannedBeefStewSmall = new Food({
    title: 'Canned Beef Stew (Small)',
    description: 'Small portion of beef stew',
    space: 0.7,
    weight: 0.8,
    feed: 11,
    liquid: 0.35,
    expirationDate: 365 * 3,
});

const sardinesInOil = new Food({
    title: 'Sardines in Oil',
    description: 'Oily fish, rich in fat',
    space: 0.3,
    weight: 0.5,
    feed: 7,
    liquid: 0.25,
    expirationDate: 365 * 2,
});

const cannedSalmon = new Food({
    title: 'Canned Salmon',
    description: 'Flaked salmon, protein-rich',
    space: 0.5,
    weight: 0.9,
    feed: 13,
    liquid: 0.2,
    expirationDate: 365 * 3,
});

const fruitCocktail = new Food({
    title: 'Fruit Cocktail',
    description: 'Mixed canned fruits in syrup',
    space: 0.6,
    weight: 0.7,
    feed: 6,
    liquid: 0.5,
    expirationDate: 365 * 2,
});

const condensedMilk = new Food({
    title: 'Condensed Milk',
    description: 'Sweetened condensed milk',
    space: 0.4,
    weight: 0.9,
    feed: 4,
    liquid: 0.6,
    expirationDate: 365 * 5,
});

const tomatoSoup = new Food({
    title: 'Tomato Soup',
    description: 'Rich tomato soup',
    space: 0.8,
    weight: 1.0,
    feed: 10,
    liquid: 0.9,
    expirationDate: 365 * 3,
});

const galetaClassic = new Food({
    title: 'Galeta Classic',
    description: 'Sealed dry galetas, classic',
    space: 0.05,
    weight: 0.08,
    feed: 18,
    liquid: 0.02,
    expirationDate: 365 * 15,
});

const galetaProtein = new Food({
    title: 'Galeta Protein',
    description: 'Galetas with added protein are more filling',
    space: 0.06,
    weight: 0.12,
    feed: 22,
    liquid: 0.03,
    expirationDate: 365 * 15,
});

const galetaCompact = new Food({
    title: 'Galeta Compact',
    description: 'Compact, sealed portion, very light',
    space: 0.03,
    weight: 0.05,
    feed: 12,
    liquid: 0.01,
    expirationDate: 365 * 15,
});

const galetaHighCal = new Food({
    title: 'Galeta High-Cal',
    description: 'Calorie galetas in airtight packaging',
    space: 0.07,
    weight: 0.15,
    feed: 28,
    liquid: 0.02,
    expirationDate: 365 * 15,
});

const galetaHoney = new Food({
    title: 'Galeta Honey',
    description: 'Honey-filled galetas in a sealed container',
    space: 0.06,
    weight: 0.11,
    feed: 20,
    liquid: 0.04,
    expirationDate: 365 * 15,
});

const bottle0_5L = new Food({
    title: 'Bottle 0.5L',
    description: 'Small water bottle 0.5L',
    space: 0.10,
    weight: 0.55,
    feed: 0.01,
    liquid: 10,
    expirationDate: 365 * 10,
});

const bottle1L = new Food({
    title: 'Bottle 1L',
    description: 'Water bottle 1L',
    space: 0.15,
    weight: 1.05,
    feed: 0.01,
    liquid: 20,
    expirationDate: 365 * 10,
});

const bottle1_5L = new Food({
    title: 'Bottle 1.5L',
    description: 'Water bottle 1.5L',
    space: 0.20,
    weight: 1.55,
    feed: 0.01,
    liquid: 30,
    expirationDate: 365 * 10,
});

const bottle2L = new Food({
    title: 'Bottle 2L',
    description: 'Big water bottle 2L',
    space: 0.25,
    weight: 2.05,
    feed: 0.01,
    liquid: 40,
    expirationDate: 365 * 10,
});

const bottle3L = new Food({
    title: 'Bottle 3L',
    description: 'Large water container 3L',
    space: 0.35,
    weight: 3.05,
    feed: 0.01,
    liquid: 60,
    expirationDate: 365 * 10,
});

const bottle4L = new Food({
    title: 'Bottle 4L',
    description: 'Very large water container 4L',
    space: 0.45,
    weight: 4.05,
    feed: 0.01,
    liquid: 80,
    expirationDate: 365 * 10,
});

const bottle5L = new Food({
    title: 'Bottle 5L',
    description: 'Huge water canister 5L',
    space: 0.55,
    weight: 5.05,
    feed: 0.01,
    liquid: 100,
    expirationDate: 365 * 10,
});

const axe = new Tool({
    title: 'Axe',
    description: 'Heavy axe for chopping wood/doors',
    space: 1.0,
    weight: 3.5,
    damage: 25,
    durability: 80,
    sharpness: 60,
    hardness: 70,
});

const hatchet = new Tool({
    title: 'Hatchet (Small Axe)',
    description: 'Small light axe, easier to carry',
    space: 0.6,
    weight: 1.2,
    damage: 14,
    durability: 60,
    sharpness: 55,
    hardness: 50,
});

const hammer = new Tool({
    title: 'Hammer',
    description: 'Standard hammer, good for nails and blunt force',
    space: 0.8,
    weight: 1.1,
    damage: 10,
    durability: 85,
    sharpness: 5,
    hardness: 65,
});

const sledgehammer = new Tool({
    title: 'Sledgehammer',
    description: 'Big heavy hammer for breaking stuff',
    space: 1.3,
    weight: 5.0,
    damage: 35,
    durability: 70,
    sharpness: 2,
    hardness: 75,
});

const wrench = new Tool({
    title: 'Wrench',
    description: 'Fixed wrench for bolts',
    space: 0.6,
    weight: 0.9,
    damage: 6,
    durability: 90,
    sharpness: 1,
    hardness: 60,
});

const adjustableWrench = new Tool({
    title: 'Adjustable Wrench',
    description: 'One wrench fits many bolts',
    space: 0.7,
    weight: 1.2,
    damage: 7,
    durability: 80,
    sharpness: 1,
    hardness: 62,
});

const knifeCombat = new Tool({
    title: 'Knife (Combat)',
    description: 'Sharp fixed blade, good for cutting and defense',
    space: 0.2,
    weight: 0.25,
    damage: 18,
    durability: 50,
    sharpness: 90,
    hardness: 40,
});

const foldingKnife = new Tool({
    title: 'Folding Knife',
    description: 'Small folding knife, light and handy',
    space: 0.1,
    weight: 0.12,
    damage: 8,
    durability: 40,
    sharpness: 70,
    hardness: 30,
});

const screwdriverFlat = new Tool({
    title: 'Screwdriver (Flat)',
    description: 'Flat-head screwdriver',
    space: 0.15,
    weight: 0.15,
    damage: 2,
    durability: 60,
    sharpness: 5,
    hardness: 30,
});

const screwdriverPhillips = new Tool({
    title: 'Screwdriver (Phillips)',
    description: 'Phillips-head screwdriver',
    space: 0.15,
    weight: 0.16,
    damage: 5,
    durability: 60,
    sharpness: 5,
    hardness: 30,
});

const pliers = new Tool({
    title: 'Pliers',
    description: 'Useful for gripping and cutting wires',
    space: 0.25,
    weight: 0.35,
    damage: 4,
    durability: 75,
    sharpness: 10,
    hardness: 40,
});

const crowbar = new Tool({
    title: 'Crowbar',
    description: 'Prying and levering tool',
    space: 1.0,
    weight: 2.2,
    damage: 20,
    durability: 85,
    sharpness: 2,
    hardness: 70,
});

const shovel = new Tool({
    title: 'Shovel',
    description: 'Digging shovel, also for clearing debris',
    space: 1.2,
    weight: 2.8,
    damage: 12,
    durability: 80,
    sharpness: 10,
    hardness: 60,
});

const swissKnife = new Tool({
    title: 'Swiss Army Knife',
    description: 'Multi-blade pocket knife with tools',
    space: 0.08,
    weight: 0.09,
    damage: 6,
    durability: 45,
    sharpness: 65,
    hardness: 25,
});

const multitool = new Tool({
    title: 'Multitool',
    description: 'Modern multitool: pliers, blade, screwdriver etc.',
    space: 0.2,
    weight: 0.3,
    damage: 9,
    durability: 70,
    sharpness: 40,
    hardness: 45,
});

