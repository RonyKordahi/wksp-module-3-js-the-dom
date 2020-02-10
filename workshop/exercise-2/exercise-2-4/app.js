// Preset values
const FROGS = 3;

//code
for (let i = 1; i <= FROGS  ; ++i) {
    const lane = document.createElement("li");
    const spanLane = document.createElement("span");
    spanLane.innerText = `${i}`;
    lane.id = `lane-${i}`;
    lane.appendChild(spanLane);
    document.getElementById("track").appendChild(lane);
}

let racers = [];

for (let i = 0; i < FROGS; ++i) {
    let froggy = frogStable[i];
    racers.push(froggy);
}


for (let i = 0; i < racers.length; ++i) {
    const frogInfo = document.createElement("span");

    //appending the name
    frogInfo.innerText = `${racers[i].name}`;
    document.getElementById(`lane-${i+1}`).appendChild(frogInfo);

    //appending the number
    frogInfo.innerText = `${racers[i].number}`;
    document.getElementById(`lane-${i+1}`).appendChild(frogInfo);

    //setting progress
    racers[i].progress = 0;
    racers[i].lane = `lane-${i+1}`;

    //setting class + color
    frogInfo.classList.add("frog");
    frogInfo.style.backgroundColor = `${racers[i].color}`;
}

racers.forEach(function(frogMove) {
    racingFrog(frogMove);
});

function racingFrog(frogMove) {
    let distance = frogMove.progress;

    const movement = setInterval(function() {
        distance += Math.random() * 20 + 1;

        if (distance > 100) {
            clearInterval(movement);
            console.log(`${frogMove.name} finished the race!`);
        }

        document.querySelector(`#${frogMove.lane} .frog`).style.left = `${distance}%`;
    }, Math.random() * 1000);
}
