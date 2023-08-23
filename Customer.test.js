const Customer = require("./Customer")
const Dealership = require("./Dealership");
const Car = require("./Car");

beforeEach(()=> {
    tesla1 = new Car("tesla", 35000, "electric");
    tesla2 = new Car("tesla", 29999, "electric");
    bmw = new Car("bmw", 27000, "electric");
    merc = new Car("mercedes", 40000, "electric");
    vw = new Car("volkswagen", 25000, "electric");

    kevinsDealership = new Dealership("Kevin's Emporium", 6);

    kevin = new Customer("Kevin", 30000);

    kevinsDealership.addCarToStock(tesla1);
    kevinsDealership.addCarToStock(tesla2);
    kevinsDealership.addCarToStock(bmw);
    kevinsDealership.addCarToStock(merc);
    kevinsDealership.addCarToStock(vw);
});

describe(`getters`, () => {

    test(`can get name`, () => {
        expected = "Kevin";
        actual = kevin.getName();
        expect(actual).toBe(expected);
    })

    test(`can get wallet`, () => {
        expected = 30000;
        actual = kevin.getWallet();
        expect(actual).toBe(expected);
    })

    test(`can get cars`, () => {
        expected = [];
        actual = kevin.getCars();
        expect(actual).toMatchObject(expected);
    })

});

describe(`setters`, () => {

    test(`can set name`, () => {
        kevin.setName("Lance");
        expected = "Lance";
        actual = kevin.getName();
        expect(actual).toBe(expected);
    })

    test(`can set wallet`, () => {
        kevin.setWallet(45000);
        expected = 45000;
        actual = kevin.getWallet();
        expect(actual).toBe(expected);
    })

});

describe(`buying a car`, () => {

    test(`can add car to list and reduce wallet`, () => {
        kevin.buyCar(bmw);

        expectedCarCount = 1;
        actualCarCount = kevin.getCars().length;
        expect(actualCarCount).toBe(expectedCarCount);

        expectedWallet = 3000;
        actualWallet = kevin.getWallet();
        expect(actualWallet).toBe(expectedWallet);
    })

});