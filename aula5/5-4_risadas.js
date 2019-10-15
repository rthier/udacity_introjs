/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (hahasNumber) {
    return Array(hahasNumber).fill("ha").join("")+"!";
};

console.log(laugh(10));
