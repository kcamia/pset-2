const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
const widthInCentimeters = width * 2.54
const lengthInCentimeters = length * 2.54
let pWidth = widthInCentimeters * 2
let pLength = lengthInCentimeters * 2
let p = pWidth + pLength
let end = p.toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + end + " centimeter(s).")
