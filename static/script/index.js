import { mainState } from "./mainState.js";

document.addEventListener("DOMContentLoaded", () => {
    const modulesContainer = document.querySelector('.modules-list');

    modulesContainer.innerHTML = mainState.modules
        .map((module, index) => `
        <div class="module" data-id="${index}">
            <strong>${module.title}</strong><br>
            O2: ${module.oxygen} / ${module.maxOxygen}<br>
            Temp: ${module.temperature}°C
        </div>
    `)
        .join('');
});