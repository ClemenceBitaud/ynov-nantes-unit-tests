
// Impossible d'utiliser chai car il nécessite que le server soit stoppé pour le lancer lui même
// or impossible de lancer le test sans que le docker tourne
/*
let mongoose = require("mongoose");
const { ToDo } = require('./toDoModel');

const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should()

chai.use(chaiHttp);

it('test GET all todo', (done) => {
    chai.request(server)
        .get('/todo')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
});

it('test ajout todo', (done) => {
    let todo = {
        text: "test",
        done: true
    }
    chai.request(server)
        .post('/todo')
        .send(todo)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
});
 */