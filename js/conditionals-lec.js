"use strict";

// console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if(isAdmin){
//     //show admin navbar
//     //showAdminNavbar() <- function
// }

//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday){
//     //send the 20% off coupon
//     //sendBirthdayEmail() <- function
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
//
// if(isRainy == true){
//     alert("It's raining!");
// }
//
// if(isRainy){
//     alert("It's raining!")
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 300;
// var currentBalance = 200;
//
// if (itemCost <= currentBalance){
//     alert("You have enough money!");
// }else{
//     alert("You do not have enough money.")
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
//
// if(numberOfLives === 0){
//     alert("Sorry, game over");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var isSnowy = "Snowing";
//
// if(isSnowy === "Snowing"){
//     alert("It's snowing!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 20;
//
// if(numberInput > 10){
//     alert("True");
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.



// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false;
//
// if(isAdmin){
//     //show admin navbar
//     alert("User is an admin");
// }else{
//     //show regular navbar
//     alert("User is not an admin");
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = false;
//
// if(isRainy){
//     alert("It's raining!");
// }else{
//     alert("Have a nice day");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 5;
//
// if(numberOfLives === 0){
//     alert("Sorry, game over");
// }else{
//     alert("Next Level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var isSnowy = "Snowing";
//
// if(isSnowy === "Snowing"){
//     alert("It's snowing!");
// }else{
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 5;
//
// if(numberInput > 10){
//     alert("The number is greater than 10");
// }else{
//     alert("The number is less than 10");
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// var checkIfGameIsOver = function(numberOfLives){
//     if(numberOfLives === 0){
//         return "Sorry, game over";
//     }else{
//         return "Next Level!";
//     }
// }
//
// console.log(checkIfGameIsOver(0));
//
// function checkIfGameIsOver(numberOfLives){
//
//     var returnMessage;
//
//     if(numberOfLives === 0){
//         returnMessage= "sorry game is over";
//     }else{
//         returnMessage = "Next Level!"
//     }
//
//     return returnMessage;
//
// }
//
// console.log(checkIfGameIsOver(3));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("Delete everything");
// } else {
//     alert("Operation Canceled!");
// }

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "windy";
//
// if(weather === "snowing"){
//     alert("It's snowing!");
// }else if(weather === "raining"){
//     alert("It's raining!");
// }else if(weather === "sunny"){
//     alert("It's sunny!");
// }else{
//     alert("Have a nice day!");
// }

//TODO Together: refactor the above statement as a function

// function checkWeather(weather){
//     if(weather === "snowing"){
//         return "It's snowing!";
//     }else if(weather === "raining"){
//         return "It's raining!";
//     }else if(weather === "sunny"){
//         return "It's sunny!";
//     }else{
//         return "Have a nice day!";
//     }
// }
//
// console.log(checkWeather("sunny"));

// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// var trafficLight = function(color){
//     if(color === "green"){
//         return "Keep going";
//     }else if(color === "yellow"){
//         return "Slow down";
//     }else if(color === "red"){
//         return "Stop";
//     }else{
//         return "Proceed with caution";
//     }
// }
//
// console.log(trafficLight("red"));
// console.log(trafficLight("green"));
// console.log(trafficLight("yellow"));
// console.log(trafficLight("blue"));

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// var userAge = 17;
// var hasPermit = false;
//
// if(userAge < 15){
//     alert("Sorry, you are not old enough!");
// }else{
//     if(userAge === 15){
//         alert("You can have a permit! Yay!");
//     }else if(userAge >= 16 && hasPermit){
//         alert("You can have a license");
//     }else if(userAge >= 16 && !hasPermit){
//         alert("Sorry you need a permit first!");
//     }else{
//         alert("Please see front desk!");
//     }
// }

// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
//
//
// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary



// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "rainy";
// var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
//
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("Ham is nice and easy to spell");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// var weather = "windy";
//
// switch(weather){
//     case "rainy":
//         alert("It is raining!");
//         break;
//     case "sunny":
//         alert("It is sunny!");
//         break;
//     case "snow":
//         alert("It is snowing!");
//         break;
//     default:
//         alert("Have a nice day!");
//         break;
// }

// function checkWeather(weather){
//
//     var weatherMessage;
//
//     switch(weather){
//         case "rainy":
//             weatherMessage = "It's raining!";
//             break;
//         case "sunny":
//             weatherMessage = "It's sunny!";
//             break;
//         case "snow":
//             weatherMessage= "It's snowing!";
//             break;
//         default:
//             weatherMessage = "Have a nice day!";
//             break;
//     }
//
//     return weatherMessage;
//
// }
//
// console.log(checkWeather("sunny"));

//TODO: Rewrite the intersection function from earlier as a switch statement.

function checkTrafficLight(trafficLight){
    var colorMessage;

    switch(trafficLight){
        case "green":
            colorMessage = "Keep going!";
            break;
        case "yellow":
            colorMessage = "Slow down!";
            break;
        case "red":
            colorMessage = "Stop!";
            break;
        default:
            colorMessage = "Proceed with caution!";
            break;
    }

    return colorMessage;

}

console.log(checkTrafficLight("red"));



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

// Write a function that uses a check box to tell if the groceries have been bought (if/else statement)
// if the groceries are bought, the child gets $5
// else, he gets none.

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

// Write a function that makes a drop down menu with sunny, rainy, and etc (using a switch statement)
// user selects a weather type
// console.log information about the weather.

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

// Write a function that makes a drop down menu with the options black and white; (ternary statement)
// user picks a color
// color of page changes to be either black or white