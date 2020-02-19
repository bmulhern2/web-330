/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 19 Feburary 2020
; Modified By: Brendan Mulhern
; Description: This section of code is the Class Refresher Module.
;===========================================
*/ 

function cellPhone(Manufacturer, Model, Color, Price) {
    this.Manufacturer = Manufacturer;
    this.Model = Model;
    this.Color = Color;
    this.Price = Price;
    function getPrice(Price) {
        return Price;
    }
    function getModel(Model) {
        return Model;
    }
    function getDetails(Manufacturer, Model, Color, Price) {
        getPrice(Price);
        getModel(Model);
        console.log(Manufacturer, Model, Color, Price);
    }
    getDetails(Manufacturer, Model, Color, Price);
}

cellPhone("Kia", "Soul", "Blue", 20000);