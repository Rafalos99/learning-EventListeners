const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// First setting up a "click" event listener on the grandparent 

// // (type of event we want to listen for, in our case, its 'click'    then  a 
// callback: a function that runs when we do whatever the event is, generally called event object, here I used an arrow function e=>)
// Console.log e.target as thats the thing the event happens on. Changed to Grandparent 1

grandparent.addEventListener("click", printRed)

parent.addEventListener("click", printBlue)

child.addEventListener("click", printGreen)

// Naming some functions to call down below when clicking on different colors

function printRed() {
    console.log("I am Red!!!")
}

function printBlue() {
    console.log("I am Blueee!!!")
}

function printGreen() {
    console.log("I am Greeeen!!!")
}

