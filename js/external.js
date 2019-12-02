"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my website!");
var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!');

// question 3 - part 1

var littleMermaid = prompt('How long did you rent The Little Mermaid for?');
var brotherBear =  prompt('How long did you rent Brother Bear for?');
var hercules = prompt('How long did you rent Hercules for?');
var pricePerDay = prompt('How much is the rental fee?');

var pricePerAll = function(){
    var total = (littleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay);
    return total;
}

 alert(pricePerAll());

// question 3 - part 2

var googleRate = prompt("How much do you make an hour at Google?");
var googleTime = prompt("How many hours did you work at Google this week?");
var amazonRate = prompt("How much do you make an hour at Amazon?");
var amazonTime = prompt("How many hours did you work at Amazon this week?");
var fbRate = prompt("How much do you make an hour at Facebook?");
var fbTime = prompt("How many hours did you work at Facebook this week?");

var weeklyPaycheck = function(){
    var totalHours = (googleRate * googleTime) + (amazonRate * amazonTime) + (fbRate * fbTime);
    return totalHours;
}

alert(weeklyPaycheck());

// question 3 - part 3

var conflict = prompt("Does this class conflict with your other classes?");
var fullness = prompt("Is this class full yet?");

var classCheckList = function(){
    if(conflict == "no" && fullness == "no"){
        return true;
    }else{
        return false;
    }
}

alert(classCheckList());

// question 3 - part 4

var krogerCard = prompt("Do you have a Kroger Card?");
var numberOfItems = prompt("How many items do you have?");
var offerExpired = prompt("Is the offer still valid?");

var discount = function(){
    if(krogerCard == "yes"){
        return true;
    } else if(numberOfItems >= 2 && offerExpired == "yes"){
        return true;
    }else{
        return false;
    }
}

console.log(discount());