"use strict";

//define a function names addFive that takes an input and adds 5, if the input is NOT numeric the function should return false.

function addFive(input){
    if(isNaN(input)){
        return false;
    }else if(input === true){
        return false;
    } else{
        return Number(input) + 5;
    }
}

console.log(addFive("2")); // 7
console.log(addFive(5)); // 10
console.log(addFive(true)); // false
console.log(addFive("cat")); // false


//define a function names toTheThird that takes an input and returns that input to the third power (cubed); if the input is not numeric the function should return false

function toTheThird(input){
    if(isNaN(input)){
        return false;
    }else if(input === true){
        return false;
    }else{
        return input ** 3;
    }
}

console.log(toTheThird("2")); // 8
console.log(toTheThird(5)); // 125
console.log(toTheThird(true)); // false
console.log(toTheThird("cat")); // false


// Define a function named lowerCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.

function lowerCase(input){
    if(typeof input === 'string' && isNaN(input)){
        return input.toUpperCase();
    }else{
        return false;
    }
}

console.log(lowerCase("2")); // false
console.log(lowerCase(5)); // false
console.log(lowerCase(true)); // false
console.log(lowerCase("CAT")); // CAT


// Write a function named sumOfCubes that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOFCubes(inputA, inputB){
    if(isNaN(inputA) === false && !(inputA === true) && isNaN(inputB) === false && !(inputB === true)){
        return Math.pow(inputA, 3) + Math.pow(inputB,3);
    } else{
        return false;
    }
}

console.log(sumOFCubes("2", "5")); //8 + 125 = 133
console.log(sumOFCubes(5, 4)); //125 + 64 = 189
console.log(sumOFCubes(true, true)); //false
console.log(sumOFCubes("cat", "dog")); //false


// Write a function named divide that takes in two inputs. If both inputs provided are numeric, divide returns the result of the first input multiplied by the second. If either or both inputs are not numeric, divide should return false.

function divide(inputA, inputB){
    if(isNaN(inputA) === false && !(inputA === true) && isNaN(inputB) === false && !(inputB === true)){
        return inputA / inputB;
    }else{
        return false
    }
}

console.log(divide("12", "4")); // 12 / 4 = 3
console.log(divide(20, 6)); // 20 / 6 = 3.33333~
console.log(divide(true, true)); // false
console.log(divide("cat", "dog")); //false

//hey, aren't there special rules when it comes to dividing with or by 0???

console.log(divide(0, 12));
console.log(divide(12, 0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// Write a function named reverseUpperCaseString that takes in a single input. If the input is a numeric string, then return false. If the input is a string, return that string capitalized and reversed

function reverseUpperCaseString(input){
    if(typeof input === 'string' && isNaN(input)){
        var capital = input.toUpperCase();
        var reverse = capital.reverse;
        return reverse;
    }else{
        return false;
    }
}


console.log(reverseUpperCaseString(true)); // false
console.log(reverseUpperCaseString(18)); // false
console.log(reverseUpperCaseString("15")); // false
console.log(reverseUpperCaseString("cat")); // TAC
console.log(reverseUpperCaseString("RaCeCaR")); // RACECAR
console.log(reverseUpperCaseString("yRaNoiTCId")); // DICTIONARY



// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.







// console.log(getLowestNumber(1, 15, 30)); // 1
// console.log(getLowestNumber(true, false, true)); // false
// console.log(getLowestNumber("1", "15", "30")); // 1
// console.log(getLowestNumber("cat", "dog", "hippopotamus")); // false
// console.log(getLowestNumber(1, "otter", 30)); // false
// console.log(getLowestNumber(-53, 72, 7)); // -53









