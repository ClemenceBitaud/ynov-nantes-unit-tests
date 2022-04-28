class Demineur {
    constructor(n, m){
        this.n = n;
        this.m = m;
        this.grille = [];
        this.generateGrille();
        this.initGrille()
    }

    generateGrille() {
        for(let i = 0; i < this.n; i++) {
            this.grille[i] = [];
            for(let j = 0; j < this.m; j++) {
                this.grille[i][j] = '.';
            }
        }
    }

    initGrille() {
        let countMines = 0;
        while (countMines < 1) {
            for(let i = 0; i < this.n; i++) {
                const mineParLigne = Math.floor(Math.random() * 2);
                if (mineParLigne > 0) {
                    countMines += 1;
                    const pos = Math.floor(Math.random() * this.m);
                    this.grille[i][pos] = '*';
                }
            }
        }
    }
}


module.exports = {
    Demineur
}