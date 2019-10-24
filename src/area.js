const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
const widthInMm = width * 25.4
const lengthInMm = length * 25.4
let area = widthInMm * lengthInMm;
let end = area.toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + end + " square millimeter(s).")
