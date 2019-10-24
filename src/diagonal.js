const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
let squared = 2
let aSquared = width ** squared
let bSquared = length ** squared
let cSquared = aSquared + bSquared
let c = Math.sqrt(cSquared)
let end = c.toFixed(2)

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + end + " inch(es).")
