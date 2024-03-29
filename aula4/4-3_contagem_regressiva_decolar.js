/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */


var seconds = 61;
while (seconds > 0) {
    seconds--;
    switch (seconds) {
    case 50:
        console.log("Orbiter transfers from ground to internal power");
        break;
    case 31:
        console.log("Ground launch sequencer is go for auto sequence start");
        break;
    case 16:
        console.log("Activate launch pad sound suppression system");
        break;
    case 10:
        console.log("Activate main engine hydrogen burnoff system");
        break;
    case 6:
        console.log("Main engine start");
        break;
    case 0:
        console.log("Solid rocket booster ignition and liftoff!");
        break;
    default:
        console.log("T-" + seconds + " seconds");
        break;
    }
}