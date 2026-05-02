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
