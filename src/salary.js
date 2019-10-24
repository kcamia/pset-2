const readlineSync = require("readline-sync");

let start = readlineSync.question("\nAnnual salary: ");

let perMonth = start / 12
let check = perMonth / 2

const preTax = check * 0.07
let postTax = check - (preTax)

const federalTax = postTax * 0.157
const stateTax = postTax * 0.0447
const ssTax = postTax * 0.062
const medTax = postTax * 0.0145

let totalTax = federalTax + stateTax + ssTax + medTax
let endPay = postTax - totalTax

let takeHome = endPay.toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + takeHome + ".")
