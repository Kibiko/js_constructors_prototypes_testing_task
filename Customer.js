const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.cars = [];
};

Customer.prototype.getName = function(){
    return this.name;
};

Customer.prototype.getWallet = function(){
    return this.wallet;
};

Customer.prototype.getCars = function(){
    return this.cars;
};

Customer.prototype.setName = function(name){
    this.name = name;
};

Customer.prototype.setWallet = function(wallet){
    this.wallet = wallet;
};

Customer.prototype.buyCar = function(car){
    this.cars.push(car);
    this.wallet -= car.getPrice();
};

module.exports = Customer;
