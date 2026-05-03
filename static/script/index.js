import { mainState } from "./mainState.js";
import { player } from "./player.js";
import { introDialogue } from "./dialogue.js";
import { mainGoal, subGoals } from "./goals.js";

document.addEventListener("DOMContentLoaded", function () {

    let invOpen = false;
    let goalsOpen = false;

    const loc = document.querySelector(".location");
    const desc = document.querySelector(".description");
    const btns = document.querySelector(".moveBtn");

    const invBtn = document.querySelector(".inventoryBtn");
    const invPanel = document.querySelector(".inventoryPanel");

    const goalsBtn = document.querySelector(".goalsBtn");
    const goalsPanel = document.querySelector(".goalPanel");

    const locInvDiv = document.querySelector(".locationInventory");
    const playerInvDiv = document.querySelector(".playerInventory");

    const dialogueMessage = document.querySelector(".dialogueMessage");
    const controlButtons = document.querySelector(".controlButtons");

    let dialogue = null;
    let dialogueStep = 0;
    let dialogueActive = false;

    player.location = mainState.modules[0];

    function startDialogue(data) {
        dialogue = data;
        dialogueStep = 0;
        dialogueActive = true;
        renderDialogue();
    }

    function renderDialogue() {
        if (!dialogueActive) return;

        const step = dialogue[dialogueStep];

        dialogueMessage.textContent = step.text;
        controlButtons.innerHTML = "";

        const btn = document.createElement("button");
        btn.textContent = "Далі";

        btn.onclick = () => {
            dialogueStep++;

            if (dialogueStep >= dialogue.length) {
                endDialogue();
            } else {
                renderDialogue();
            }
        };

        controlButtons.appendChild(btn);
    }

    function endDialogue() {
        dialogueActive = false;
        dialogueMessage.textContent = "";
        controlButtons.innerHTML = "";
    }


    function update() {

        loc.textContent = player.location.title;
        desc.textContent = player.location.description;

        btns.innerHTML = "";

        for (let i = 0; i < player.location.nextLocation.length; i++) {

            let idx = player.location.nextLocation[i];
            let next = mainState.modules[idx];

            let b = document.createElement("button");
            b.textContent = next.title;

            b.onclick = function () {
                if (dialogueActive) return;
                player.location = next;
                update();
            };

            btns.appendChild(b);
        }


        locInvDiv.innerHTML = "<h3>Локація</h3>";

        let items = player.location.inventory || {};
        let keys = Object.keys(items);

        if (keys.length === 0) {
            locInvDiv.innerHTML += "<p>Нічого немає</p>";
        } else {

            for (let i = 0; i < keys.length; i++) {

                let id = keys[i];
                let count = items[id];

                let p = document.createElement("p");
                p.textContent = `${id} x${count}`;

                let pickBtn = document.createElement("button");
                pickBtn.textContent = "Взяти";

                pickBtn.onclick = function () {
                    if (dialogueActive) return;

                    player.pickUp(
                        { id, title: id, space: 1, weight: 1 },
                        player.location,
                        count
                    );

                    update();
                };

                p.appendChild(pickBtn);
                locInvDiv.appendChild(p);
            }
        }

        playerInvDiv.innerHTML = "<h3>Інвентарь</h3>";

        let inv = player.inventory || {};
        let keys = Object.keys(inv);

        if (keys.length === 0) {
            playerInvDiv.innerHTML += "<p>Пусто</p>";
        } else {

            for (let i = 0; i < keys.length; i++) {

                let id = keys[i];
                let count = inv[id];

                let p = document.createElement("p");
                p.textContent = `${id} x${count}`;

                playerInvDiv.appendChild(p);
            }
        }

        goalsPanel.innerHTML = "<h3>Задачі</h3>";

        let main = document.createElement("p");
        main.textContent =
            mainGoal.text + (mainGoal.completed ? " Виконано" : " Не виконано");

        goalsPanel.appendChild(main);
        for (let i = 0; i < subGoals.length; i++) {
            const g = subGoals[i];

            let p = document.createElement("p");
            p.textContent = g.text + (g.completed ? " Виконано" : " Не виконано");

            goalsPanel.appendChild(p);
        }
    }

    function calcOxygen() {
        mainState.oxygen = 0;

        for (let i = 0; i < mainState.modules.length; i++) {
            mainState.oxygen += mainState.modules[i].oxygen;
        }
    }

    function calcPollution() {
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

        calcOxygen();
        calcPollution();

        update();
    }

    invPanel.classList.add("hidden");
    goalsPanel.classList.add("hidden");

    function closeAllPanels() {
        invOpen = false;
        goalsOpen = false;

        invPanel.classList.add("hidden");
        goalsPanel.classList.add("hidden");
    }

    invBtn.onclick = function () {
        if (dialogueActive) return;

        const isOpening = !invOpen;

        invOpen = isOpening;
        goalsOpen = false;

        invPanel.classList.toggle("hidden", !invOpen);
        goalsPanel.classList.add("hidden");
    };

    goalsBtn.onclick = function () {
        if (dialogueActive) return;

        const isOpening = !goalsOpen;

        goalsOpen = isOpening;
        invOpen = false;

        goalsPanel.classList.toggle("hidden", !goalsOpen);
        invPanel.classList.add("hidden");
    };

    startDialogue(introDialogue);

    update();
    setInterval(tick, 1000);
});