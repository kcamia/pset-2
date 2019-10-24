const readlineSync = require("readline-sync");

let homework1 = readlineSync.question("\nEnter three homework grades.\n");
let homework2 = readlineSync.question("");
let homework3 = readlineSync.question("");

let quiz1 = readlineSync.question("\nEnter three quiz grades.\n");
let quiz2 = readlineSync.question("");
let quiz3 = readlineSync.question("");

let test1 = readlineSync.question("\nEnter three test grades.\n");
let test2 = readlineSync.question("");
let test3 = readlineSync.question("");

let homework1w = homework1 * 0.15
let homework2w = homework2 * 0.15
let homework3w = homework3 * 0.15

const quiz1w = quiz1 * 0.35
const quiz2w = quiz2 * 0.35
const quiz3w = quiz3 * 0.35

const test1w = test1 * 0.5
const test2w = test2 * 0.5
const test3w = test3 * 0.5

let homeworkWeighted = (homework1w + homework2w + homework3w) / 3
let quizWeighted = (quiz1w + quiz2w + quiz3w) / 3
let testWeighted = (test1w + test2w + test3w) / 3

let sum = homeworkWeighted + quizWeighted + testWeighted
let grade = sum.toFixed(2)

console.log("\nYour marking period grade is " + grade + "%.")
