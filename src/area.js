const readlineSync = require("readline-sync");

let a = readlineSync.question("Width: ");
let b = readlineSync.question("Length: ");
const aInMm = a * 25.4
const bInMm = b * 25.4
let c = aInMm * bInMm;
let d = c.toFixed(2);

console.log("A(n) " + a + "-by-" + b + "-inch sheet of paper has an area of " + d + " square millimeter(s).")
