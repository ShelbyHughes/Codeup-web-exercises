"use strict";
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable() {
//     for (i = 1; i < 11; i++) {
//         var itwo = i;
//         var seven = 7;
//         var answer = (7 * itwo);
//         console.log(seven + " x " + itwo + " = " + answer);
//     }
// }
// console.log(showMultiplicationTable(7));

function showMultiplicationTable(numberInput){
    for(var i = 1; i <= 10; i++){
        var answer = numberInput * i;
        console.log(numberInput + " x " + i + " = " + answer);
    }
}

showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//     123 is odd
//     80 is even
//     24 is even
//     199 is odd

// var random = Math.floor(Math.random() * 20) + 180;
//
// for (var j = random; j < 200; j++) {
//
//     if (j % 2 !== 0) {
//         console.log(j + " is odd");
//     }else{
//         console.log(j + " is even");
//     }
//
// }

for(var j = 0; j <= 10; j++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if(random % 2 === 0){
        console.log(j + " is even");
    }else{
        console.log(j + " is odd");
    }
}

// 1 x 1 = 1
// 2 x 11 = 22
// 3 x 111 = 333
// 4 x 1111 = 4444
// 5 x 11111 = 55555
// 6 x 111111 = 666666
// 7 x 1111111 = 7777777
// 8 x 11111111 = 88888888
// 9 x 111111111 = 999999999

for(var i = 1; i < 10; i++){
    console.log(i.toString().repeat(i));
}

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(var i = 100; i >= 5; i-=5){
    console.log(i);
}
