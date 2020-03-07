// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane

    for (let i = 1; i <= FROGS  ; ++i) {
        let lane = document.createElement("li");
        let spanLane = document.createElement("span");
        spanLane.innerText = `lane-${i}`;
        lane.id = `lane-${i}`;
        lane.appendChild(spanLane);
        document.getElementById("track").appendChild(lane);
    }