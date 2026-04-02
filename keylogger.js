//Object to track key counts
let keyCounts = {};
// Ask the browser to call the `eventHandler` function anytime a key is released.
window.addEventListener("keyup", eventHandler);
// Define the behavior for that `eventHandler` function.
function eventHandler(event) {
    // Which key was pressed?
    let key = event.key;

    if (key in keyCounts) {
        keyCounts[key] += 1;
    } else {
        keyCounts[key] = 1;
    }
    // Now do something with it.
    //Whenever the user types a character, use a for-loop to display the number of times each character has been typed to the console.
    console.log("You pressed "+key);
    for (let k in keyCounts) {
        console.log(k+": "+keyCounts[k]);
    }
    console.log("");
    
    //Write in some special rules to modify the styling of the homepage once the user types a certain character a certain number of times.
    if (keyCounts["a"] >= 3) {
        document.body.style.setProperty("background-color", "green");
    }
}

