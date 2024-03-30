#! /usr/bin/env node 

import inquirer from "inquirer"; 

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to number guessing game")

const answer =await inquirer.prompt([
    {
   name: "GuessingNumber",
   message: "Please guess a number between 1 to 10: ",
   type: "number"
    }
]);

if(answer.GuessingNumber === randomNumber ){
    console.log("Congratulation you guessed right number!")
}else{
    console.log("You guessed wrong number!");
}