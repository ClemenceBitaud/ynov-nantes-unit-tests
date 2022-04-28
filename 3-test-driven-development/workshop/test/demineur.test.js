const { Demineur } = require("../src/demineur")
describe("Demineur test", function() {
    it("première ligne entrée", function() {
        const demineur = new Demineur(2, 3)
        expect(demineur.n).toBeLessThanOrEqual(100);
        expect(demineur.n).toBeGreaterThan(0);
        expect(demineur.m).toBeLessThanOrEqual(100);
        expect(demineur.m).toBeGreaterThan(0);
    });
});