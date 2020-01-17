let reindeerList = [
    {
        name: "Dot",
        age: 5,
        isGold: false
    },
    {
        name: "Dasher",
        age: 8,
        isGold: true
    },
    {
        name: "Patch",
        age: 2,
        isGold: false
    },
    {
        name: "Rocket",
        age: 6,
        isGold: false
    },
    {
        name: "Dancer",
        age: 9,
        isGold: true
    },
    {
        name: "Prancer",
        age: 5,
        isGold: true
    },
    {
        name: "Groot",
        age: 9,
        isGold: false
    },
    {
        name: "Vixen",
        age: 9,
        isGold: true
    },
    {
        name: "Comet",
        age: 11,
        isGold: true
    },
    {
        name: "Archie",
        age: 3,
        isGold: false
    },
    {
        name: "Cupid",
        age: 13,
        isGold: true
    },
    {
        name: "Donder",
        age: 16,
        isGold: true
    },
    {
        name: "Boots",
        age: 16,
        isGold: false
    },
    {
        name: "Blitzen",
        age: 16,
        isGold: true
    }
];

let hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

let reindeerNames = reindeerList.map((deer) =>{
    return deer.name;
});

console.log(reindeerNames);

// let furColors = hamsters.map(hamster => hamster.fur);
//
// console.log(furColors);

let furColors = [];
hamsters.map(hamster => {
    hamster.fur.map(color => furColors.push(color));
});
console.log(furColors);

let goldReindeer = reindeerList.filter(deer => deer.isGold);
let goldReindeerNamesAndGold = reindeerList
    .map(deer =>{
        return {
            name: deer.name,
            isGold: deer.isGold
        }
    })
    .filter(deer => deer.isGold);
console.log(goldReindeerNamesAndGold);

let totalHamsterHeight = hamsters.reduce((hamsterStack, hamster) => {
    return hamsterStack + hamster.heightInMM;
},0);

let hamsterStack = 0;
for(let hamster of hamsters){
    hamsterStack += hamster.heightInMM;
}

console.log(totalHamsterHeight / hamsters.length);
console.log(hamsterStack);

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150}
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 200);
console.log(totalSales);

function countWords(sentence, counts = {}) {
    const words = sentence.split(' ');
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            wordCounts[word] = 1;
        } else {
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, counts);
    return wordCountObject;
}

let wordCounts = countWords('Mary had a little lamb little lamb little lamb banana');
// {Mary: 1, had: 1, a: 1, little: 3, lamb:3, banana: 1}
console.log(countWords("The little monkey had a banana", wordCounts));