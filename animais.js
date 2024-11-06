function Animal (nome) {
    this.nome = nome;
}

function Gato (nome, raca, idade) {
    Animal.call(this, nome);
    this.raca = raca;
    this.idade = idade;
}

function Cachorro (nome, raca, idade) {
    Animal.call(this, nome);
    this.raca = raca;
    this.idade = idade;
}

function Passaro (nome, especie, idade) {
    Animal.call(this, nome);
    this.especie = especie;
    this.idade = idade;
}

const gato1 = new Gato("Safira", "Siamês", 8);
const cachorro1 = new Cachorro("Rex", "Labrador", 3);
const passaro1 = new Passaro("Pipoca", "Calopsita", 1);


console.log(gato1);
console.log(cachorro1);
console.log(passaro1);