const readlineSync = require("readline-sync");

const hourly = readlineSync.question("\nHourly wage: ")
let day1 = readlineSync.question("\nMonday: ")
let day2 = readlineSync.question("Tuesday: ")
let day3 = readlineSync.question("Wednesday: ")
let day4 = readlineSync.question("Thursday: ")
let day5 = readlineSync.question("Friday: ")
let day6 = readlineSync.question("Saturday: ")
let day7 = readlineSync.question("Sunday: ")

let mon = day1 * hourly
let tues = day2 * hourly
let wed = day3 * hourly
let thurs = day4 * hourly
let fri = day5 * hourly
let sat = day6 * hourly
let sun = day7 * hourly

let totalWage = mon + tues + wed + thurs + fri + sat + sun
let pay = totalWage.toLocaleString("en",{minimumFractionDigits: 2, maxiumumFractionDigits: 2});

console.log("\nYou'll make $" + pay + " this week.")
