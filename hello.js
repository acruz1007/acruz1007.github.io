/*
* Start the game
*/
function startgame(user) {
    console.log("Hello, " + user + ". Ready to discover your ideal lifestyle?");
    console.log("1. Yes");
    console.log("2. No");
    console.log("");

    let choice = prompt("Enter your choice:");
    switch (choice) {
        case "1":
            firstChoice(user);
            return;
        case "2":
            console.log("You decide not to explore your future.");
            endgame("You don't have a dream lifestlye :(");
            return;
        default:
            console.log("Invalid choice.");
            startgame(user);
    }
}

/*
* Ending function
*/
function endgame(gamedone) {
    console.log("");
    console.log("Your result: " + gamedone);
    console.log("Game over. Refresh to try again.");
}

/*
* First decision
*/
function firstChoice(user) {
    console.log("It's a free day. What do you do?");
    console.log("1. Explore nature");
    console.log("2. Go downtown");
    console.log("3. Relax by water");
    console.log("")

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            naturePath(user);
            return;
        case "2":
            cityPath(user);
            return;
        case "3":
            waterPath(user);
            return;
        default:
            firstChoice(user);
    }
}

/*
* Nature path → Country or Desert ending
*/
function naturePath(user) {
    console.log("You head into the outdoors. What's your pick?!");
    console.log("1. Green fields and farms");
    console.log("2. Dry open land with heat");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            endgame("Country: Peaceful and connected to nature.");
            return;
        case "2":
            endgame("Desert: Strong, independent, and resilient.");
            return;
        default:
            naturePath(user);
    }
}

/*
* City path → City ending
*/
function cityPath(user) {
    console.log("You love the energy of busy streets. What's your pick?!");
    console.log("1. Skyscrapers and nightlife");
    console.log("2. Cafes and people-watching");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
        case "2":
            endgame("City: Fast-paced and full of opportunity.");
            return;
        default:
            cityPath(user);
    }
}

/*
* Water path → Tropical ending
*/
function waterPath(user) {
    console.log("You relax near the water. What's your pick?!");
    console.log("1. Warm beach with palm trees");
    console.log("2. Swimming and sunshine");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
        case "2":
            endgame("Tropical: Relaxed, warm, and carefree.");
            return;
        default:
            waterPath(user);
    }
}

/*
* Start
*/
let user = prompt("What is your name?");
startgame(user);