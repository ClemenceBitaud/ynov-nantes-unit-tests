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
});