/*
Title: Exercise 2.2
Author: Professor Krasso
Date: 29 Feburary 2020
Modified By: Brendan Mulhern
Description: This is an object literal with prototyping.
*/
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program





// end program

var person = {
    getAge: function(age) {
        return this.age;
    }};
var Bob = Object.create(person, {
    "age": {
        "value": 26
    },
    "fullName": {
        "value": "Bob Hausmann"
    }
    });
console.log("Exerise 2.2");
console.log("2/29/20");
console.log("The persons full name is " + Bob.fullName);
console.log("The persons age is " + Bob.age);
