// Preset values
const FROGS = 3;

//code
for (let i = 1; i <= FROGS  ; ++i) {
    const lane = document.createElement("li");
    const spanLane = document.createElement("span");
    spanLane.innerText = `lane-${i}`;
    lane.id = `lane-${i}`;
    lane.appendChild(spanLane);
    document.getElementById("track").appendChild(lane);
}

let racers = [];

for (let i = 0; i < FROGS; ++i) {
    let froggy = frogStable[i];
    racers.push(froggy);
}

console.log(racers);

for (let i = 0; i < racers.length; ++i) {
    const alsoLane = document.getElementById(`lane-${i+1}`);
    const frogInfo = document.createElement("span");
    const progress = document.createElement("span");
    frogInfo.innerText = `${racers[i].name}`;
    document.getElementById(`lane-${i+1}`).appendChild(frogInfo);
    frogInfo.innerText = `${racers[i].number}`;
    document.getElementById(`lane-${i+1}`).appendChild(frogInfo);
    alsoLane.classList.add("frog");
    alsoLane.style.backgroundColor = `${racers[i].color}`;
}