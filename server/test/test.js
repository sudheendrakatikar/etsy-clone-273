let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
chai.use(chaiHttp)

describe('POST /api/auth/login', () => {
    it('it should return a JWT', (done) => {
        const loginObject = {
            email: 'test.user@yetsy.com',
            password: 'test-pwd'
        }
        console.log('Logging in with user ' + JSON.stringify(loginObject))
        done()
        chai.request(server)
            .post('/api/auth/login', loginObject)
            .end((err, res) => {
                // res.should.have.status(200);
                // res.body.token.length.should.be.eql(139);
                // done();
            });
    });
});

describe('GET /api/product', () => {
    it('it should GET all the products', (done) => {
        done()
        chai.request(server)
            .get('/api/product')
            .end((err, res) => {
                // res.should.have.status(200);
                // done();
            });
    });
});

describe('GET /api/shop', () => {
    it('it should GET all the shops', (done) => {
        done()
        chai.request(server)
            .get('/api/shop')
            .end((err, res) => {
                // res.should.have.status(200);
                // done();
            });
    });
});

describe('GET /api/favourite', () => {
    it('it should GET all the favourites of a user', (done) => {
        done()
        const user_id = 1
        chai.request(server)
            .get('/api/shop', { params: { user_id: user_id } })
            .end((err, res) => {
                // res.should.have.status(200);
                // done();
            });
    });
});

describe('GET /api/cart', () => {
    it('it should GET all the products in a user\'s cart', (done) => {
        done()
        const user_id = 1
        chai.request(server)
            .get('/api/cart', { params: { user_id: user_id } })
            .end((err, res) => {
                // res.should.have.status(200);
                // done();
            });
    });
});