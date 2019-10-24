const readlineSync = require("readline-sync");

const students = readlineSync.question("\nStudents: ");
const teachers = readlineSync.question("Teachers: ");
const capacity = readlineSync.question("Bus capacity: ");

let studentNum = Number(students)
let teacherNum = Number(teachers)
let total = studentNum + teacherNum
let full = total / capacity
let remainder = total % capacity
let buses = full.toFixed(0)
let busNum = Number(buses)

console.log("\n" + busNum + " bus(es) is (are) needed, with " + remainder + " passenger(s) on the last bus.")
