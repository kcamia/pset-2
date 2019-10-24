const readlineSync = require("readline-sync");

const length = 48
const width = 24
const diameter = 6

let radius = diameter / 2
let squared = 2
let radiusSquared = radius ** squared

let circleArea = 3.1415 * radiusSquared

let boardArea = length * width

let surfaceArea = boardArea - circleArea
let area = surfaceArea.toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + area + " square inch(es).")
