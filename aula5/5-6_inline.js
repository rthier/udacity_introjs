/*
 * Programming Quiz: Inline Functions (5-6)
 */

function laugh(hahasNumber) {
    return Array(hahasNumber).fill("ha").join("").toString() + "!";
};

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here

// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(hahasNumber) {
    return Array(hahasNumber).fill("ha").join("").toString() + "!";
});