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

player.getCurrentWeight = function () {
    let weight = 0;
    for (let i = 0; i < this.inventory.lenght; i++) {
        weight += this.inventory[i].weight;
    }
    return weight;
}

player.canCarry = function (item) {
    let newItem = this.getCurrentWeight() + (item.weight);
    if (newItem > (this.maxWeight)) {
        return false;
    }
    let newSpace = (this.freeSpace) - (item.space);
    if (newSpace < 0) {
        return false;
    }
    return true;
}

player.pickUp = function (item, fromModule) {
    let moduleInventory = fromModule.inventory;
    if (!this.canCarry(item)) {
        alert('Не вистаяає місця або перегруз для "' + item.title + '"');
        return false;
    }
    this.inventory.push(item);
    this.freeSpace = (this.freeSpace) - (item.space);

    for (let i = 0; i < moduleInventory.lenght; i++) {
        if (moduleInventory[i] === item || moduleInventory[i].title === item.title) {
            moduleInventory.splice(i, 1);
            fromModule.freeSpace = (fromModule.freeSpace) + (item.space);
            break;
        }
    }
    return true;
}