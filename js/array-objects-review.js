"use strict";
// ​
// 1. What is an array in Javascript?

// In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.

// 2. What is an object in Javascript?

// objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods​

// 3. What is the difference between an array and an object?

// Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

// 4. What is a property? A method?

// ​A JavaScript property is a characteristic of an object, often describing attributes associated with a data structure. There are two kinds of properties: Instance properties hold data that are specific to a given object instance. Static properties hold data that are shared among all object instances.
// A JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition. Property. Value

// 5. Why are loops useful when dealing with arrays?

//Loops offer a quick and easy way to do something repeatedly.

// 6. What is an index?
// ​
// 7. What is the difference between dot and bracket notation?
// ​
// ​
// ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
// ​
//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//     ```

// 1. write a function -> filterNumbers(inputArray)
// 2. since we are returning an array, we need a "bucket" to store the filterNumbers
// 3. we need to loop to check each individual item (for each or a for loop)
// 4. we need to check each item to see if its a number -> typeof item === "number"
// 5. if the item is a number we need to push it to our bucket
// 6. .sort() on the bucket array
// 7. return the bucket

function filterNumbers(inputArray){
    var numberBucket = [];

    inputArray.forEach(function(item){
       if(typeof item == "number"){
           numberBucket.push(item);
       }
    });
    return numberBucket.sort(function (a,b){
        return a - b
    });
}

console.log(filterNumbers(["fred", true, 5, 3]));
console.log(filterNumbers([100, 1000000, false, "red", true, 50, 500000, 3]));
//
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//

// 1. write a function getOlder(dogs)
// 2. Loop through array to get each individual dog -> dog.age += 1
// 3. return dogs

      var dogList= [
            {
                 name: "Chompers",
                 breed: "Pug",
                 age: 7
             },
             {
                 name: "Freddy",
                 breed: "Lab",
                 age: 4
             },
             {
                 name: "Mr. Pig",
                 breed: "Mastif",
                 age: 10
             }
         ];

      function getOlder(dogs){
          dogs.forEach(function(dog){
            dog.age += 1; //dog.age = dog.age + 1
              // dog.age + 1;
              // dog.age ++;
          });
          return dogs;
      }

      console.log(getOlder(dogList));

     // var dogList = [
     //        {
     //             name: "Chompers",
     //             breed: "Pug",
     //             age: 8
     //         },
     //         {
     //             name: "Freddy",
     //             breed: "Lab",
     //             age: 5
     //         },
     //         {
     //             name: "Mr. Pig",
     //             breed: "Mastif",
     //             age: 11
     //         }
     //     ];
//    ```


//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
// ​
// 1. write function washCars(cars)
// 2. for each loop -> for each car set isDirty = false;
// 3. return cars
            var carList = [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: true
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: true
                 }
            ];

            function washCars(cars){
                cars.forEach(function(car){
                    // car.isDirty = false;

                    if(car.isDirty == true){
                        car.isDirty = false;
                    }
                });
                return cars;
            }

    console.log(washCars(carList));

//          var carList = [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ];
//
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.


         var userList = [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             },
             {
                 isAdmin: false,
                 email: 'user3@email.com'
             }
         ];
// Part One:
// 1. Write a function adminList(users)
// 2. var totalAdminCount = 0;
// 3. loop through all the users -> for each user ->
// if(user.isAdmin){
//     totalAdminCount += 1;
// }
// 4. return totalAdminCount

function adminList(users){
    var totalAdminCount = 0;
    users.forEach(function(user){
        if(user.isAdmin){
            totalAdminCount += 1;
        }
    });
    return totalAdminCount;
}

// console.log(adminList(userList));

//        // Example Output (before refactor): 2

//Part 2: refactor to return an array of admin-only user emails.
// 1. write a function adminList(users)
// 2. var adminEmailBucket = [];
// 3. loop through users -> for each user if isAdmin push email to the bucket
// 4. return adminEmailBucket

function adminList(users){
    var adminEmailBucket = [];
    users.forEach(function(user){
        if(user.isAdmin){
            adminEmailBucket.push(user.email);
        }
    });
    return adminEmailBucket;
}

//console.log(adminList(userList));

//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]

// Part 3: Refactor again to return an array of user objects that are admins
//1. Write a function adminList(users)
//2. var adminBucket = []
//3. loop through user -> for each user if isAdmin push user to the bucket
//4. return adminBucket

function adminList(users){
    var adminBucket = [];

    users.forEach(function(user){
        if(user.isAdmin){
            adminBucket.push(user);
        }
    });
    return adminBucket;
}

console.log(adminList(userList));

//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]

// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

//1. write a function makeSandwichObjects(breads, fillings)
//1.5 create sandwichBucket = [];
//2. we have a loop -> for loop [i]
//3. we need to create a sandwich object
//4. return sandwich bucket

         var breads  = [
             "white",
             "wheat",
             "rhy",
             "white"
         ];

         var fillings = [
             "pb&j",
             "ham",
             "cheese steak",
             "tuna"
         ];

         function makeSandwichObjects(breads, fillings){
             var sandwichBucket = [];
             for(var i = 0; i<breads.length; i++){
             //     var sandwichObject ={
             //         bread: breads[i],
             //         filling: fillings[i]
             //     }
             //
             //     sandwichBucket.push(sandwichObject);

             sandwichBucket.push({
                 bread: breads[i],
                 filling: fillings[i]
             });

             }
             return sandwichBucket;
         }

console.log(makeSandwichObjects(breads, fillings)); // example call to the function

//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]

// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
// 1. Write a function keepYellow(strings)
// 2. Use yellowBucket()
// 3. for each / loop through strings array -> for each string check to see if its == "yellow"
// 4. if it is equal to "yellow" push that string to the bucket
// 5. return yellowBucket

function keepYellow(strings){
    var yellowBucket = [];
    strings.forEach(function(str){
        if(str === "yellow"){
            yellowBucket.push(str);
        }
    });
    return yellowBucket;
}

console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));



var isNegative = function(input){
    return input < 0;
}

var isTen = function(input){
    return input === 10;
}

var double = function(input){
    return input *2;
}

function remove9s(inputArray){
    var output = [];
    for(var i =0; i<inputArray.length; i++){
        if(inputArray[i] !== 9){
            output.push(inputArray[i])
        }
    }
    return output;
}

function average(nums){
    var total = 0;
    nums.forEach(function(num){
       total += num;
    });
    return total / nums.length;
}

function countOdds(nums){
    var odds = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 1){
            odds++;
        }
    }
    return odds;
}

var convertNamesToObject = function(nameString){
    var output = {};
    var names = nameString.split(' ');
    output.firstName = names[0];
    output.lastName = names[1];
}

var capitalizeName = function(name){
    var output = [];
    var names = name.split(' ');
    names.forEach(function(name){
        var capitalized = name.charAt(0).toUpperCase() + name.substring(1);
        output.push(capitalized);
    });
    return output.join(" ");
}

function capitalizeAllNames(namesArr){
    var output = [];
    for(var i = 0; i<namesArr.length; i++){
        output.push(capitalizeName(namesArr[i]));
    }
    return output;
}

var hasVowels = function(str){
    return str.includes('A')||
        str.includes('a')||
        str.includes('E')||
        str.includes('e')||
        str.includes('I')||
        str.includes('i')||
        str.includes('O')||
        str.includes('o')||
        str.includes('U')||
        str.includes('u')
}

var countVowels = function(str){
    var vowels = 0;
    for(var i = 0; i < str.length; i++){
        if(hasVowels(str[i])){
            vowels++;
        }

    }
    return vowels;
}

var averageSales = function(salesPeople){
    var total = 0;
    salesPeople.forEach(function(person){
        total += person.sales;
    });
    return total / salesPeople.length;
}

var analyzeWord = function(word){
    var output = {};
    output.word = word;
    output.numberOfLetters = word.length;
    output.numberOfVowels = countVowels(word);
    return output;
}

var analyzeAllWords = function(wordArr){
     var output = [];
     wordArr.forEach(function(word){
         output.push(analyzeWord(word));
     });
     return output;
}