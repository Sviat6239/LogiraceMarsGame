import { Player } from "./gameStats.js";
import { mainState } from "./mainState.js";

export let player = new Player();

player.health = 100;
player.mentalHealth = 100;
player.hunger = 0;
player.thirst = 0;
player.stamina = 100;
player.intoxication = 0;
player.radiation = 0;
player.maxWeight = 60;
player.freeSpace = 10;
player.equipedSpaceSuit = false;
player.inventory = [];
player.location = mainState.modules[0];

player.findItem = function (item) {
    return this.inventory.find(i => i.item.id === item.id);
};


player.getCurrentWeight = function () {
    let weight = 0;

    for (let i = 0; i < this.inventory.length; i++) {
        weight += this.inventory[i].item.weight * this.inventory[i].count;
    }

    return weight;
};

player.canCarry = function (item, amount = 1) {

    let newWeight = this.getCurrentWeight() + (item.weight * amount);
    if (newWeight > this.maxWeight) return false;

    let newSpace = this.freeSpace - (item.space * amount);
    if (newSpace < 0) return false;

    return true;
};

player.addToInventory = function (item, amount = 1) {

    if (!this.canCarry(item, amount)) {
        alert('Не вистачає місця або перевантаження для "' + item.title + '"');
        return false;
    }

    let existing = this.findItem(item);

    if (existing) {
        existing.count += amount;
    } else {
        this.inventory.push({
            item: item,
            count: amount
        });
    }

    this.freeSpace -= item.space * amount;

    return true;
};

player.getMaxTakeAmount = function (item, availableAmount) {
    let maxByWeight = Math.floor((this.maxWeight - this.getCurrentWeight()) / item.weight);
    let maxBySpace = Math.floor(this.freeSpace / item.space);

    return Math.min(availableAmount, maxByWeight, maxBySpace);
};

player.pickUp = function (item, fromModule, amount = 1) {
    let moduleInventory = fromModule.inventory;

    let availableAmount = 1;

    if (Array.isArray(moduleInventory)) {
        availableAmount = moduleInventory.filter(i => i.id === item.id).length;
    } else if (moduleInventory && typeof moduleInventory === 'object') {
        const id = item.id || item.title;
        availableAmount = moduleInventory[id] || 0;
    }

    if (amount === "all") {
        amount = this.getMaxTakeAmount(item, availableAmount);
    }

    if (amount <= 0) return false;

    if (!this.addToInventory(item, amount)) return false;

    if (Array.isArray(moduleInventory)) {
        let removed = 0;

        for (let i = moduleInventory.length - 1; i >= 0; i--) {
            if (moduleInventory[i].id === item.id) {
                moduleInventory.splice(i, 1);
                removed++;
                if (removed >= amount) break;
            }
        }
    } else {
        const id = item.id || item.title;
        moduleInventory[id] -= amount;
        if (moduleInventory[id] <= 0) delete moduleInventory[id];
    }

    fromModule.freeSpace += item.space * amount;

    return true;
};

player.drop = function (item, toModule, amount = 1) {
    let existing = this.findItem(item);
    if (!existing) return false;

    if (amount === "all") {
        amount = existing.count;
    }

    if (amount <= 0 || existing.count < amount) return false;

    if (Array.isArray(toModule.inventory)) {
        for (let i = 0; i < amount; i++) {
            toModule.inventory.push(item);
        }
    } else {
        const id = item.id || item.title;
        if (!toModule.inventory[id]) toModule.inventory[id] = 0;
        toModule.inventory[id] += amount;
    }

    existing.count -= amount;
    if (existing.count <= 0) {
        this.inventory = this.inventory.filter(i => i.item.id !== item.id);
    }

    this.freeSpace += item.space * amount;
    toModule.freeSpace -= item.space * amount;

    return true;
};