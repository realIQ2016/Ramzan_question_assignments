"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prompt = require('prompt-sync')();
let x = parseInt(prompt("Please enter your first value"));
let y = parseInt(prompt("Please enter your second value"));
//choesse operater
let operator = prompt("Please enter your operator");
if (operator == "+") {
    console.log((x + y));
}
if (operator == "-") {
    console.log((x - y));
}
if (operator == "*") {
    console.log((x * y));
}
if (operator == "/") {
    console.log((x / y));
}
else {
    console.log("Please enter correct operator");
}
