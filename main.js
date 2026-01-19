function Promocao(comidas ,bebidas, produtos) {
    this.comidas = comidas
    this.bebidas = bebidas
    this.produtos = produtos
};

const itens = new Promocao("Arroz", "Cerveja", "Alcool");

console.log(itens);

function Marca(comidas, bebidas, produtos) {
    Promocao.call(this, comidas, bebidas, produtos)
};

const marcas = new Marca("Camil", "Skol", "Coperalcool");

console.log(marcas);

function Precos(comidas ,bebidas, produtos) {
    Promocao.call(this, comidas, bebidas, produtos)
};

const precos = new Precos("RS20", "R$20", "R$5");

console.log(precos);