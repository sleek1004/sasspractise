// alert("Hello World!");

// Variables
// JS

var nameOfYourVariable = 89;
var anotherVariable = "String is just some long word";

// ES6

let oneMoreVar = 89;
const IamBoss = "This is a constant";

//declaring variable
let oneNoting;

// IamBoss = "I just changed"

// alert(IamBoss);


// Concatenation (a string + a string or number)

// JS

var person = "Emmanuel";
var hisAge = 27;

// alert(person + " is " + hisAge + " years old. ");

// ES6

const name = "Tobi";
let age = 25;

let note = `${name} is ${age} years old`;

alert(`${name} is ${age} years old`); // string

alert(hisAge + age) // math

alert(note);


/** arrays */


// declaring and defining
let arr1 = [45, "Monday", "Janaury", 87, 0];

alert(arr1[1]);

// arr1[1] = "Tuesday"; //change arr1

alert(arr1[1]);

//just declaring
let arr2 = [];

//defining arrays
arr2[2] = "Today";
arr2[0] = "Me";

alert(arr2);


//ES6 
// concatenating arrays

let arr3 = ["Ify", 23, ...arr1, ...arr2];

alert(arr3);

//find index of an array value
let findIndex = arr1.indexOf("Monday");

alert(findIndex);

/** JSON */

let stationary = {
    books : 2,
    pencils : 35,
    papers : 200,
    crayons : 30,
    boards : 25
}

console.log(stationary);

alert(stationary.books);


let table = {
    leg : 4,
    space : "Big",
    material : {
        wood : "Small",
        plastic : "alot"
    }
}

alert(table.material.wood);


//null & undefined

let rain = ""; //null

// let rain; //undefined

//operators

console.log(2 / 3);


//conditional statements
//if, else if, else

let shoeSize = 24;
let mySize = 20;

// if(shoeSize < mySize) {
//     console.log("This is too big for me");
// }
// else {
//     console.log("This is either my size or too small");
// }

if(shoeSize > mySize) {
    console.log("This is too big for me");
}
else if(shoeSize < mySize) {
    console.log("This is too small for me");
}
else {
    console.log("This is my size");
}

let generator = {
    petrol : true,
    caborator : true,
    connection : true
}


// if(generator.petrol && generator.caborator && generator.connection) {
//     console.log("There's power");
// }
// else {
//     console.log("There's no power");
// }

//loops

//for loops

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let num = 0; num <= 10; num++) {
    console.log(num);
}

/** functions */

// js

//declaring a function
function nameOfFunction() {
    console.log("Your function is work");
}


//calling a function
nameOfFunction();

var anotherName = function() {
    console.log("This is another function");
}

anotherName();

//es6

//arrow functions
let names = () => {
    console.log("this is an arrow function");
}

names();

//examples

//global scopes and local scopes

let today = "Tuesday";

let check = () => {
    let today = "Wednesday";
    today = "Thursday";
    console.log(today);
}

let share = () => {
    let today = "Friday";
    console.log(today);
}

check();

share();

console.log(today);

//Functions with arguments (Parameters)

let calc = (num1, num2) => {
    console.log(num1 * num2);
}

let one = 4;
let two = 6;

calc(one, two);

//closure 

let summy = () => {

    let sayHello = "Say Hello";


    //this is a closure
    let simi = () => {
        console.log(sayHello);
    }

    return simi;

}

summy()();

//end closure


//predefined functions

// console.log( Math.floor((Math.random()) * 5) );

console.log( (Math.floor ( ( Math.random() ) * 6 ) ) );

console.log( (Math.ceil ( ( Math.random() ) * 5 ) ) + 1 );

let number = 5.345992;

console.log( number.toFixed(2) );

//js

// setTimeout( function() {
//     console.log("Three seconds have passed");
// }, 3000);

// setInterval( function() {
//     console.log("Three seconds have interval just passed");
// }, 3000);

let stopwatch = setInterval( function() {
    console.log("Three seconds have passed");
}, 3000);

setInterval( function() {
    clearInterval(stopwatch);
}, 30000);

