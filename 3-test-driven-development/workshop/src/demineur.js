class Demineur {
    constructor(n, m){
        this.n = n;
        this.m = m;
        this.grille = [];
        this.generateGrille();
    }

    generateGrille() {
        for(let i = 0; i < this.n; i++) {
            this.grille[i] = [];
            for(let j = 0; j < this.m; j++) {
                this.grille[i][j] = '.';
            }
        }
    }
}


module.exports = {
    Demineur
}