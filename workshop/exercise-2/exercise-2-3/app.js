// Preset values
const FROGS = 3;

//code
for (let i = 1; i <= FROGS  ; ++i) {
    let lane = document.createElement("li");
    let spanLane = document.createElement("span");
    spanLane.innerText = `lane-${i}`;
    lane.id = i;
    lane.appendChild(spanLane);
    document.getElementById("track").appendChild(lane);
}

let racers = [];

for (let i = 1; i <= FROGS; ++i) {
    let froggy = frogStable[i];
    racers.push(froggy);
}

console.log(racers); //doesn't work