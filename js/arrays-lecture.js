"use strict";
// var pet1 = "Toby";
// var pet2 = "Princess";
// var pet3 = "Samson";
// var pet4 = "Jill";
// var pet5 = "Bubbles";
// var pet6 = "Malu";

// var pets = [];
//     pets[0] = "Toby";
//     pets[1] = "Princess";
//     pets[2] = "Samson";
//     pets[3] = "Jill";
//     pets[4] = "Bubbles";
//     pets[5] = "Malu";

// var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu"];
//
// for(var i = 0; i<pets.length; i++){
//     console.log(pets[i]);
// }

// ^ Equals v

// var l = 0;
// while(l<pets.length){
//     console.log(pets[l]);
//     l++;
// }
//
// pets[pets.length] = "Lily";
// console.log(pets[pets.length-1]);

// pets[100] = "Roxeanne";

// pets.forEach(function(pet, i, arr){
//     console.log(pet);
    // console.log(arr[i]);
// });

// i   log      pets.length
// 0   Toby     7
// 1   Princess
// 2   Samson
// 3   Jill
// 4   Bubbles
// 5   Malu
// 6   Lily

// var petNames = ["Princess", "Delilah", "Jephery", "Johnathan", "Pablo", "Enrique", "Keanu", "Twilight", "Turtle 1", "Turtle 2", "Turtle 3"];
//
// for(var j = 0;j<petNames.length;j++){
//     console.log(petNames[j]);
// }

// var tictactoe = [[' ', ' ', ' '],
//                  [' ', ' ', ' '],
//                  [' ', ' ', ' ']];
// var takeTurn = function(who, row, column){
//     tictactoe[row][column] = who;
// }
// var printBoard = function(){
//     for(var i = 0;i<tictactoe.length;i++){
//         console.log(' ' + tictactoe[i][0] +  ' | ' + tictactoe[i][1] + ' | ' + tictactoe[i][2]);
//         console.log("___________");
//     }
// }
//
// printBoard();


// var fruit = ["apple", "orange", "banana"];
// fruit[fruit.length]= "pear";
// console.log(fruit);
// alert("Hello");
// console.log(fruit.push("pear", "pineapple", "grape", "mango"));;
// fruit.push();
// fruit.push();
// fruit.push("mango");
// console.log(fruit.shift());
// console.log(fruit.unshift("strawberry"));
// console.log(fruit.indexOf("kiwi"));
// console.log(fruit.lastIndexOf("apple"));
// console.log(fruit[fruit.indexOf("apple")]);
// console.log(fruit.pop());
// console.log(fruit);


var energyDrink = ["Monster", "Venom", "Redbull", "Nos", "Rockstar"];
console.log(energyDrink);
console.log(energyDrink.push("Nerds"));
console.log(energyDrink.shift());
console.log(energyDrink.unshift("Red line"));
console.log(energyDrink.indexOf("Nerds"));
console.log(energyDrink.pop());

// var sentence = "The quick brown fox jumps over the lazy dog";
// var words = sentence.split(" ");
// for (words) {
//     words = words.charAt(0).toUpperCase() + words.substr(1)+ ",";
//     console.log(typeof words);
//     // var joined = word.join(',');
//     // console.log(joined);
// }

