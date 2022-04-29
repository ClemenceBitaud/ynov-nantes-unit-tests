const { expect } = require('chai');
const { it } = require('@jest/globals');
const { ToDo } = require('./toDoModel');

it('test création toDo sans texte', function(done) {
    const toDo = new ToDo();
    toDo.validate(function(err) {
        expect(err).to.exist;
        done();
    });
});