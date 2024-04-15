#! /usr/bin/env node
import inquirer  from "inquirer";

console.log("\n\tWellcome to with real IQ.CLI number guessing game\n");

const number = Math.floor(Math.random()*5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "Enter your guess number(number limit from 1 to 5):",
    },
]);

if (answer.userGuessdNumber === number ){
    console.log("Congratulation! you win");
}
else{
console.log("Sorry! tarry again")};