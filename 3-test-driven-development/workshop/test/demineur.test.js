const { Demineur } = require("../src/demineur")
describe("Demineur test", function() {
    it("première ligne entrée ok", function() {
        const demineur = new Demineur(2, 3);
        expect(demineur.n).toBeLessThanOrEqual(100);
        expect(demineur.n).toBeGreaterThan(0);
        expect(demineur.m).toBeLessThanOrEqual(100);
        expect(demineur.m).toBeGreaterThan(0);
    });

    // test taille grille
    it("check grid dimension", function() {
        // Given
        const n = 4;
        const m = 4;

        // When
        const demineur = new Demineur(n, m);

        // Then
        expect(demineur.grille.length).toBe(n);
        demineur.grille.forEach(ligne => {
            expect(ligne.length).toBe(m);
        });
    });

    it("test nb mine présente >= 1", function() {
        // When
        const demineur = new Demineur(4, 4);

        let countMine = 0;
        demineur.grille.forEach(ligne => {
            ligne.forEach(carre => {
                if (carre === '*') countMine++;
            });
        });

        // Then
        expect(countMine).toBeGreaterThan(0);
    });

    it("test constructor exception m > 100", function() {
        expect(() => { new Demineur(4, 105) }).toThrow(RangeError);
    });

    it("test constructor exception m < 0", function() {
        expect(() => { new Demineur(4, -3) }).toThrow(RangeError);
    });

    it("test constructor exception m == 0", function() {
        expect(() => { new Demineur(5, 0) }).toThrow(RangeError);
    });

    it("test constructor exception m == 101", function() {
        expect(() => { new Demineur(4, 101) }).toThrow(RangeError);
    });

    it("test constructor exception n > 100", function() {
        expect(() => { new Demineur(105, 5) }).toThrow(RangeError);
    });

    it("test constructor exception n < 0", function() {
        expect(() => { new Demineur(-12, 5) }).toThrow(RangeError);
    });

    it("test constructor exception n == 0", function() {
        expect(() => { new Demineur(0, 3) }).toThrow(RangeError);
    });

    it("test constructor exception n == 101", function() {
        expect(() => { new Demineur(101, 5) }).toThrow(RangeError);
    });

});