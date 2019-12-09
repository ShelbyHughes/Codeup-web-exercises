(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var familyNames = ["Quentin", "Trey", "Justin", "Shelby"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(familyNames.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    for(var i = 0; i<familyNames.length;i++){
        console.log(familyNames[i]);
    }

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    var l = 0;
    while(l<familyNames.length){
        console.log(familyNames[l]);
        l++;
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    familyNames.forEach(function(names, i, arr){
        console.log(names);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arr){
        return arr[0];
    }

    console.log(first([1, 2, 3, 4, 5])); // 1

    function second(arr){
        return arr[1];
    }

    console.log(second([1, 2, 3, 4, 5])); // 2

    function last(arr){
        return arr.length;
    }

    console.log(last([1, 2, 3, 4, 5])); // 5
})();
