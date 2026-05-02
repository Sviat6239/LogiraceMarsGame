import { mainState } from "./mainState.js";
import { player } from "./player.js";

document.addEventListener("DOMContentLoaded", () => {

    const location = document.querySelector('.location');
    const description = document.querySelector('.description');
    const buttons = document.querySelector('.moveBtn');

    player.location = mainState.modules[5];

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

    update();
});