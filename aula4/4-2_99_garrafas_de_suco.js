/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    var numBottle = num + " " + (num === 1 ? "bottle" : "bottles");
    var numBottleNext = (num - 1) + " " + ((num - 1) === 1 ? "bottle" : "bottles");
    console.log(numBottle + " of juice on the wall! " + numBottle + " of juice! Take one down, pass it around... " + numBottleNext + " of juice on the wall!");
    num--;
}
