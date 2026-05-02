import { mainState } from "./mainState.js";
import { player } from "./player.js";

document.addEventListener("DOMContentLoaded", () => {

    let inventoryIsOpened = false;

    const location = document.querySelector('.location');
    const description = document.querySelector('.description');
    const buttons = document.querySelector('.moveBtn');

    const inventoryBtn = document.querySelector('.inventoryBtn');

    player.location = mainState.modules[0];

    function update() {
        location.textContent = player.location.title;
        description.textContent = player.location.description;

        buttons.innerHTML = "";

        for (let i = 0; i < player.location.nextLocation.length; i++) {
            let index = player.location.nextLocation[i];
            let nextLocation = mainState.modules[index];

            let btn = document.createElement("button");
            btn.textContent = nextLocation.title;

            btn.onclick = function () {
                player.location = nextLocation;
                update();
            };

            buttons.appendChild(btn);
        }
    }

    function allOxygen() {
        mainState.oxygen = 0;

        for (let i = 0; i < mainState.modules.length; i++) {
            mainState.oxygen += mainState.modules[i].oxygen;
        }
    }

    function allAirPollution() {
        mainState.airPollution = 0;

        for (let i = 0; i < mainState.modules.length; i++) {
            mainState.airPollution += mainState.modules[i].airPollution;
        }
    }

    function tick() {
        mainState.modules[8].oxygen += 0.01;
        mainState.modules[9].oxygen += 0.01;

        player.location.oxygen -= 0.01;
        player.location.airPollution += 0.01;

        allOxygen();
        allAirPollution();

        console.log(mainState.oxygen);
        console.log(mainState.airPollution);

        update();
    }

    inventoryBtn.onclick = function () {
        inventoryIsOpened = !inventoryIsOpened;

        if (inventoryIsOpened) {
            alert("Inventory has been opened");
        } else {
            alert("Inventory has been closed");
        }
    }


    update();
    setInterval(tick, 1000);
});