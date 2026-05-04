import { mainState } from "./mainState.js";
import { player } from "./player.js";
import { introDialogue, inMainCorriodrDialogue, inCafeteriaModuleDialogue, inCafeteriaModuleDialogue2 } from "./dialogue.js";
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
    let dialogueCallback = null;

    player.location = mainState.modules[0];

    function startDialogue(data, callback) {
        dialogue = data;
        dialogueStep = 0;
        dialogueActive = true;
        dialogueCallback = callback;
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

        if (dialogueCallback) {
            const cb = dialogueCallback;
            dialogueCallback = null;
            cb();
        }
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

                if (player.location === mainState.modules[1]) {
                    startDialogue(inMainCorriodrDialogue);
                } else if (player.location === mainState.modules[2]) {
                    startDialogue(inCafeteriaModuleDialogue, () => {
                        setTimeout(() => {
                            startDialogue(inCafeteriaModuleDialogue2);
                        }, 3000);
                    });
                }


                update();
            };

            btns.appendChild(b);
        }


        locInvDiv.innerHTML = "<h3>Локація</h3>";

        let items = player.location.inventory || {};
        let locKeys = Object.keys(items);

        if (locKeys.length === 0) {
            locInvDiv.innerHTML += "<p>Нічого немає</p>";
        } else {
            for (let i = 0; i < locKeys.length; i++) {
                let id = locKeys[i];
                let count = items[id];

                let p = document.createElement("p");
                p.textContent = `${id} x${count}`;

                let pickOneBtn = document.createElement("button");
                pickOneBtn.textContent = "+1";

                pickOneBtn.onclick = function () {
                    if (dialogueActive) return;

                    player.pickUp(
                        { id, title: id, space: 1, weight: 1 },
                        player.location,
                        1
                    );

                    update();
                };

                let pickAllBtn = document.createElement("button");
                pickAllBtn.textContent = "Все";

                pickAllBtn.onclick = function () {
                    if (dialogueActive) return;

                    player.pickUp(
                        { id, title: id, space: 1, weight: 1 },
                        player.location,
                        "all"
                    );

                    update();
                };

                p.appendChild(pickOneBtn);
                p.appendChild(pickAllBtn);
                locInvDiv.appendChild(p);
            }
        }

        playerInvDiv.innerHTML = "<h3>Інвентарь</h3>";

        let invArr = player.inventory || [];

        if (invArr.length === 0) {
            playerInvDiv.innerHTML += "<p>Пусто</p>";
        } else {
            for (let i = 0; i < invArr.length; i++) {
                const entry = invArr[i];
                const title = entry.item && (entry.item.title || entry.item.id) ? (entry.item.title || entry.item.id) : String(i);
                const count = entry.count;

                let p = document.createElement("p");
                p.textContent = `${title} x${count}`;

                let dropOneBtn = document.createElement("button");
                dropOneBtn.textContent = "-1";

                dropOneBtn.onclick = function () {
                    if (dialogueActive) return;

                    player.drop(entry.item, player.location, 1);
                    update();
                };

                let dropAllBtn = document.createElement("button");
                dropAllBtn.textContent = "Все";

                dropAllBtn.onclick = function () {
                    if (dialogueActive) return;

                    player.drop(entry.item, player.location, "all");
                    update();
                };

                p.appendChild(dropOneBtn);
                p.appendChild(dropAllBtn);

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