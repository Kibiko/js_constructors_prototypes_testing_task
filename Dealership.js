const Car = require("./Car")
const Customer = require("./Customer")

const Dealership = function(name, maxCars, stock){
    this.name = name;
    this.maxCars = maxCars;
    this.stock = [];
};

Dealership.prototype.getName = function(){
    return this.name;
};

Dealership.prototype.getMaxCars = function(){
    return this.maxCars;
};

Dealership.prototype.getStock = function(){
    return this.stock;
};

Dealership.prototype.setName = function(name){
    this.name = name;
};

Dealership.prototype.setMaxCars = function(maxCars){
    this.maxCars = maxCars;
};

Dealership.prototype.getStockCount = function(){
    return this.stock.length;
};

Dealership.prototype.addCarToStock = function(car){
    if(this.getStockCount() === this.maxCars){
        return "Unavailable slots for car. Stock is full!"
    } else{
        this.stock.push(car);
    }
};

Dealership.prototype.getCarManufacturers = function(){
    const allManufacturers = this.stock.map((car) => {
        return car.getManufacturer();
    })
    return allManufacturers;
};

Dealership.prototype.sellCar = function(customer, car){
    if(customer.getWallet() >= car.getPrice()){
        customer.buyCar(car);
        indexOfCar = this.stock.indexOf(car);
        this.stock.splice(indexOfCar, 1);
    } else{
        return "Refuse sale, customer does not have sufficient funds."
    }
}

Dealership.prototype.filterByManufacturer = function(manufacturer){
    const filteredByManufacturer = this.stock.filter(car => {
        return car.getManufacturer() === manufacturer;
    })
    return filteredByManufacturer;
};

Dealership.prototype.totalStockValue = function(){
    const value = this.stock.reduce((reducer, car) => {
        return reducer + car.getPrice();
    }, 0)
    return value;
};

module.exports = Dealership;
