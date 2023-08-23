const Car = require("./Car");

const tesla = new Car("tesla", 35000, "electric");

describe('getters', () => {

    test('can get manufacturer', () => {
        expected = "tesla";
        actual = tesla.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get price', () => {
        expected = 35000;
        actual = tesla.getPrice();
        expect(actual).toBe(expected);
    });

    test('can get electric', () => {
        expected = "electric";
        actual = tesla.getEngineType();
        expect(actual).toBe(expected);
    });

 });

describe('setters', () => {

    test('can set manufacturer', () => {
        tesla.setManufacturer("BMW");
        expected = "BMW";
        actual = tesla.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can set price', () => {
        tesla.setPrice(50000);
        expected = 50000;
        actual = tesla.getPrice();
        expect(actual).toBe(expected);
    });

    test('can set hybrid', () => {
        tesla.setEngineType("hybrid");
        expected = "hybrid";
        actual = tesla.getEngineType();
        expect(actual).toBe(expected);
    });

});