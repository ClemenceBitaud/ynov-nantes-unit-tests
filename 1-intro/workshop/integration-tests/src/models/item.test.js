const { expect } = require('chai');
const { it } = require('@jest/globals');
const Item = require('./Item.js');

it('test création item sans nom', function(done) {
    const item = new Item();
    item.validate(function(err) {
        expect(err.errors.name).to.exist;
        done();
    });
});

