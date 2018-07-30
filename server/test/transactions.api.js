const express = require('express');
const transactions = require('../routes/api/transactions');
const fixtures = require('./fixtures/index');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = express();
const url = '/api/transactions';

app.get(url, transactions);

app.get('/api/transactions', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json(fixtures.transactions);
});

app.post('/api/transactions', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json(fixtures.acceptedTransaction);
});

describe('Transactions APIs', () => {
    context('GET /api/transactions', () => {
        it('should fetch all transactions', (done) => {
            const url = '/api/transactions';

            chai.request(app)
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

    context('POST /api/transactions', () => {
        it('should add new successful transaction', (done) => {
            const url = '/api/transactions';

            chai.request(app)
                .post(url)
                .type('form')
                .send({ type: "credit", amount: 100 })
                .end((err, res) => {
                    expect(res).to.be.an('object');
                    expect(res).to.have.property('status').to.equal(200);
                    expect(res.body).to.deep.equal(fixtures.acceptedTransaction);
                    expect(res.body).to.have.property('id').to.be.a('string');
                    expect(res.body).to.have.property('type').to.be.a('string');
                    expect(res.body).to.have.property('amount').to.be.a('number');
                    expect(res.body).to.have.property('status').to.equal('accepted');
                    expect(err).to.equal(null);
                    done();
                })
        });
    });
});