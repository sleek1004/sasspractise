/** DOM manipulation */


// let element = document.getElementById("active");

// element.innerHTML = "This is me";
// element.style.backgroundColor = "blue";
// element.style.color = "red";
// element.style.borderRadius = "30px";


// using get element by ID or class name
// let button = document.getElementById("clickMe");


// using query selector
// let dormant = document.querySelector('.dormant');


// button.addEventListener("click", thishappens);

// function thishappens() {
//     let element = document.getElementById("active");
//     element.innerHTML = "This is us";
//     element.style.backgroundColor = "pink";
//     element.style.fontSize = "50px";
//     element.style.padding = "100px";
// }

// button.addEventListener("click", thischanges);

// function thischanges() {
//     let element = document.getElementById("active");
//     element.style.backgroundColor = "red";
//     element.style.fontSize = "14px";
//     element.style.padding = "10px";
// }

// let button = document.getElementById("clickMe");

// button.onclick = function() {
//     let element = document.getElementById("active");
//         element.innerHTML = "This is us";
//         element.style.backgroundColor = "pink";
//         element.style.fontSize = "50px";
//         element.style.padding = "100px";
// }



let dice = function() {
        let thrownum = Math.floor(Math.random()  * 6)  + 1;
        return thrownum;
    }

function printnum(num) {
    let placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = num;
}
let botton = document.getElementById("botton");

botton.onclick = function() {
    let result = dice();
    printnum(result);
};