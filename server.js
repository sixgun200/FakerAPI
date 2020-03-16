const express = require("express");
const app = express();
const faker = require("faker");


app.get("/api", (request, response) => {
    response.send("Express Server is sending stuff to the browser.")
});

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (request, response) => {
    const user1 = new User();
    console.log(user1);
    return response.json(user1);
});

app.get("/api/companies/new", (request, response) => {
    const company1 = new Company();
    console.log(company1);
    return response.json(new Company());
});

app.get("/api/user/company", (request, response) => {
    const user2 = new User();
    const company2 = new Company();
    return response.json({user2, company2});
});

const server = app.listen(8000, () => 
    console.log(`Server is holding port ${server.address().port} hostage!`));
