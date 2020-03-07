/*
Title: Exercise 3.2
Author: Professor Krasso
Date: 7 March 2020
Modified By: Brendan Mulhern
Description: This is: the Database Factory Design Pattern
*/
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}
function Oracle(properties) {
    this.username = properties.username || "brendanmulhern";
    this.passsword = properties.passsword || "1234";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || 3.2;
}
function Informix(properties) {
    this.username = properties.username || "brendanmulhern";
    this.passsword = properties.passsword || "1234";
    this.server = properties.server || "localhost:8080";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } else if (properties.databaseType === "MySQl") {
        this.databaseClass = MySql;
    } else if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } else if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    };

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: "brendanmulhern",
    password: "1234"
});
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "brendanmulhern",
    password: "1234"
});
console.log(postgres);
console.log(mySql);
console.log(oracle);
console.log(informix);


// end program

