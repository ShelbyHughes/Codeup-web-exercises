// var make = "Toyota";
// var model = "Sienna";
// var year = 2009;
// var isTitled = true;

var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    isTitled: true,
    options: ["4 wheel drive",
        "heated Seats",
        "leather interior"],
         goGoGo: function (key){
        if(key == "correct"){
            console.log("vroom");
        }else{
            console.log("...")
        }
    }
}

console.log("Car was made in " + car.year);
console.log("car has these options:");
car.options.forEach(function(options){
    console.log(options)});
car.goGoGo("key");

var mustang = {
    make: "Ford",
    model: "Mustang",
    year: 2010,
    isTitled: true,
    options: ["Stick shift",
        "Leather interior",
        "Backup camera",
        "SAT Radio"],
    startCar: function(key){
        if(key == "correct"){
            console.log("Let's go!");
        }else{
            console.log("Get out of my car!");
        }
    }
}

console.log("Car was made in " + mustang.year);
console.log("car has these options:");
mustang.options.forEach(function(options){
    console.log(options)})
mustang.startCar("correct");

var teacher = {
    name: "Daniel",
    languages: ["english", "Javascript", "Java"],
    teach: function(language){
        if(this.languages.includes(language)){
            console.log("Here is some knowledge about " + language);
        }else{
            console.log("blah blah blah");
        }
    }
}
teacher.teach("Ruby");

var truck = new Object();
truck.make = "Tesla";
truck.model = "CyberTruck";
truck.year = 2022;
truck.gogogo= function(){
    console.log("VROOM!");
}
// truck["model"];
// truck["numberOfWheels"]

var cars = [
    car,
    {
        make:"Dodge",
        model: "Challenger",
        year: 2015,
        report: function(){
            console.log(this.year + " " + this.make + " "  + this.model);
        }
    },
    {
        make: "Ford",
        model: "Shelby GT 500",
        year: 1969,
        report: function(){
            console.log(this.year + " " + this.make + " "  + this.model);
        }
    },
    {
        make: "Cadillac",
        model: "Escalade",
        year: 2019,
        report: function(){
            console.log(this.year + " " + this.make + " "  + this.model);
        }
    }
    ]
car.report = function(){
    console.log(this.year + " " + this.make + " " + this.model);
}

cars.forEach(function(car){
    car.report();
})

var pets =[
    {
        Name: "Princess",
        species: "dog",
        age: 2,
        mainColor: "White",
        secondColor: "Orange",
        isGoodGirl: "Good girl",
        borking: "Borks",
        report: function(){
            console.log(this.Name + " is a " + this.species + " and she is " + this.age + " years old. Her fur colors are " + this.mainColor + " and " + this.secondColor + ". She is " + this.isGoodGirl + " even if she " + this.borking);
        }
    },
    {
        Name: "Delilah",
        species: "dog",
        age: 2,
        mainColor: "Brown",
        secondColor: "White",
        isGoodGirl: "Good girl",
        borking: "Woofs",
        report: function(){
            console.log(this.Name + " is a " + this.species + " and she is " + this.age + " years old. Her fur colors are " + this.mainColor + " and " + this.secondColor + ". She is " + this.isGoodGirl + " even if she " + this.borking);
        }
    }
]

pets.forEach(function(pet){
    pet.report();
})