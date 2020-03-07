/*
Title: Exercise 3.3
Author: Professor Krasso
Date: 7 March 2020
Modified By: Brendan Mulhern
Description: This is the databaseSingletonTest.
*/
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
function databaseSingletonTest() {
    var mySQL = new Object("mySQL instance initalized");
    var oracle = new Object("oracle instance initalized");
    if (mySQL === oracle) {
        console.log("They are the same!");
    } else {
        console.log("They are different");
    }
}
databaseSingletonTest();


// end program