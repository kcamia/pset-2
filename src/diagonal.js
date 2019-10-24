const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
let squared = 2
let a2 = width ** squared
let b2 = length ** squared
let c2 = a2 + b2
let c = Math.sqrt(c2)
let end = c.toFixed(2)

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + end + " inch(es).")
