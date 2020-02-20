/*
============================================
; Title: Exercise 1.4
; Author: Professor Krasso
; Date: 19 Feburary 2020
; Modified By: Brendan Mulhern
; Description: Exercise 1.4 is a racetrack scenario with javascript.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:

Brendan Mulhern
Exercise 1.4
19 Feburary 2020

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
console.log("Brendan Mulhern");
console.log("Exercise 1.4");
console.log("19 Feburary 2020");

function Car(model) {
    this.model = model;
}
Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
}
function Truck(model, year) {
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
}
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
}
racetrack = [];
function driveIt(vehicle) 
{
    vehicle.start();
    racetrack.push(vehicle);
}
var soul = Car("Soul");
var ford = Truck("Ford", 2010);
var wrangler = Jeep("Wrangler", 2009, "Blue");

driveIt(soul);
driveIt(ford);
driveIt(wrangler);

console.log("These vehicles have been added to the racetrack");
for(i=0; i>racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + racetrack[i].constructor.model + racetrack[i].constructor.color )
}

// end program