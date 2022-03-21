let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)

describe('POST /api/auth/login', () => {
    it('it should return a JWT', (done) => {
        const loginObject = {
            email: 'test.user@yetsy.com',
            password: 'test-pwd'
        }
        chai.request(server)
            .post('/api/auth/login', loginObject)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.token.length.should.be.eql(139);
                done();
            });
    });
});

describe('GET /api/product', () => {
    it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/api/product')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.a('array');
                done();
            });
    });
});

describe('GET /api/shop', () => {
    it('it should GET all the shops', (done) => {
        chai.request(server)
            .get('/api/shop')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.a('array');
                done();
            });
    });
});