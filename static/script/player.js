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

player.pickUp = function (item, fromModule, amount = 1) {

    let moduleInventory = fromModule.inventory;

    if (!this.addToInventory(item, amount)) return false;

    for (let i = 0; i < moduleInventory.length; i++) {
        if (moduleInventory[i] === item) {

            moduleInventory.splice(i, 1);
            fromModule.freeSpace += item.space * amount;

            break;
        }
    }

    return true;
};