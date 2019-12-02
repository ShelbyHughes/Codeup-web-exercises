"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!');

// question 3 - part 1

// 1. ask user what the rental fee is -> prompt & variable
// 2. ask user how many days little mermaid -> prompt & variable
// 3. ask user how many days brother bear -> prompt & variable
// 4. ask user how many days hercules -> prompt & variable
// 5. calculate the total price * number of days
// 6. alert the total price

var dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
var littleMermaid = Number(prompt('How many days are you renting The Little Mermaid?'));
var brotherBear =  Number(prompt('How many days are you renting Brother Bear?'));
var hercules = Number(prompt('How many days are you renting Hercules?'));
var totalCost = (littleMermaid + brotherBear + hercules) * dailyRentalRate;
var alertMessage = "You owe $: " + totalCost;
alert(alertMessage);

// question 3 - part 2

var googleRate = Number(prompt("What is your Google rate?"));
var amazonRate = Number(prompt("What is your Amazon rate?"));
var facebookRate = Number(prompt("What is your Facebook rate?"));

var googleHours = Number(prompt("How many hours did you work at Google?"));
var amazonHours = Number(prompt("How many hours did you work at Amazon"));
var facebookHours = Number(prompt("How many hours did you work at Facebook?"));

var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);

alert(totalPay);

// question 3 - part 3

var classIsNotFull = confirm("Class is not full");
var noScheduleConflicts = confirm("Schedules do not conflict");

console.log("class not full " + classIsNotFull);
console.log("no schedule conflicts " + noScheduleConflicts);

var studentEnrolled = classIsNotFull && noScheduleConflicts;

console.log(studentEnrolled);

alert("Student can enroll: " + studentEnrolled);

// question 3 - part 4

var numberOfItems = Number(prompt("How many items for checkout?")); //number
var offerValid = confirm("Is the offer valid?"); //boolean
var isPremiumMember = confirm("Are you a premium member?"); //boolean

var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2);

alert("Can use discount: " + discountApplied);