import { mainState } from "./mainState.js";
import { player } from "./player.js";

document.addEventListener("DOMContentLoaded", () => {
    let location = player.location

    const playerLocation = document.querySelector('.location');

    playerLocation.innerHTML = `${location.title}`;

});