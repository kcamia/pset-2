const readlineSync = require("readline-sync");

let a = readlineSync.question("Width: ");
let b = readlineSync.question("Length: ");
const aInCm = a * 2.54
const bInCm = b * 2.54
let c = aInCm * 2
let d = bInCm * 2
let e = c + d
let p = e.toFixed(2);

console.log("A(n) " + a + "-by-" + b + "-inch sheet of paper has a perimeter of " + p + " centimeter(s).")
