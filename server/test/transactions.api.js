const express = require('express');
const transactions = require('../routes/api/transactions');
const fixtures = require('./fixtures/index');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = express();
const url = '/api/transactions';

server.get(url, transactions);

server.get('/api/transactions', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json(fixtures.transactions);
});

describe('Transactions APIs', () => {
    context('GET /api/transactions', () => {
        it('should fetch all transactions', (done) => {
            const url = '/api/transactions';

            chai.request(server)
                .get(url)
                .end((err, res) => {

                    expect(res).to.be.an('object');
                    expect(res).to.have.property('status').to.equal(200);
                    expect(res.body).to.deep.equal(fixtures.transactions);
                    expect(err).to.equal(null);
                    done();
                })
        });
    });
});