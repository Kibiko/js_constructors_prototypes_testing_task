const Dealership = require("./Dealership");
const Car = require("./Car");
const Customer = require("./Customer")

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

describe('getters', () => {

    test('can get name', () => {
        expected = "Kevin's Emporium";
        actual = kevinsDealership.getName();
        expect(actual).toBe(expected);
    });

    test('can get max cars', () => {
        expected = 6;
        actual = kevinsDealership.getMaxCars();
        expect(actual).toBe(expected);
    });

    test('can get stock', () => {
        expected = [tesla1, tesla2, bmw, merc, vw];
        actual = kevinsDealership.getStock();
        expect(actual).toMatchObject(expected);
    });

    test(`can get stock count`, () => {
        expected = 5;
        actual = kevinsDealership.getStockCount();
        expect(actual).toBe(expected);
    })

    test(`can get each cars manufacturers`, () => {
        expected = ["tesla", "tesla", "bmw", "mercedes", "volkswagen"];
        actual = kevinsDealership.getCarManufacturers();
        expect(actual).toMatchObject(expected);
    })

    test(`can get value of stock`, () => {
        expected = 35000 + 29999 + 27000 + 40000 + 25000;
        actual = kevinsDealership.totalStockValue();
        expect(actual).toBe(expected);
    })

});

describe('setters', () => {

    test('can set name', () => {
        kevinsDealership.setName("Kevin's Trailer Park")
        expected = "Kevin's Trailer Park";
        actual = kevinsDealership.getName();
        expect(actual).toBe(expected);
    });

    test('can set max cars', () => {
        kevinsDealership.setMaxCars(75);
        expected = 75;
        actual = kevinsDealership.getMaxCars();
        expect(actual).toBe(expected);
    });

});

describe(`stock manipulation`, () => {

    test(`can add car to stock`, () => {
        const kia = new Car("kia", 25000, "hybrid");
        kevinsDealership.addCarToStock(kia);
        expected = 6;
        actual = kevinsDealership.getStockCount();
        expect(actual).toBe(expected);
    })

    test(`cant add more cars to max stock`, () => {
        const kia1 = new Car("kia", 25000, "hybrid");
        kevinsDealership.addCarToStock(kia1); //reaches the limit

        const kia2 = new Car("kia", 25000, "hybrid");
        expected = "Unavailable slots for car. Stock is full!";
        actual = kevinsDealership.addCarToStock(kia2); //tries adding over limit
        expect(actual).toBe(expected);
    })

    test(`can sell car to customer who has funds`, () => {
        kevinsDealership.sellCar(kevin, bmw);

        expectedDealershipCarCount = 4;
        expectedCustomerCarCount = 1;

        actualDealerShipCarCount = kevinsDealership.getStockCount();
        actualCustomerCarCount = kevin.getCars().length;

        expect(actualDealerShipCarCount).toBe(expectedDealershipCarCount);
        expect(actualCustomerCarCount).toBe(expectedCustomerCarCount);
    })

    test(`refuse sale to customer who has not enough funds`, () => {
        expected = "Refuse sale, customer does not have sufficient funds.";
        actual = kevinsDealership.sellCar(kevin, tesla1);
        expect(actual).toBe(expected);
    })

});

describe(`filters`, () => {

    test(`can filter by manufacturer`, () => {
        expected = [tesla1, tesla2];
        actual = kevinsDealership.filterByManufacturer("tesla");
        expect(actual).toMatchObject(expected);
    })
})
 