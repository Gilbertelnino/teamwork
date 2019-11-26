const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('../index');

const { expect } = chai;
chai.use(chaiHttp);

const employee = {
    firstName: 'gilbert',
    lastName:"elnino", 
    email: "gil@gmail.com", 
    password: "47834555"
}

describe("/api/v1/auth/signup",() =>{
    it('should return valid input',(done) =>{
        chai.request(app)
        .post("/api/v1/auth/signup")
        .send(employee)
        .end((err,res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        })
    });
});
