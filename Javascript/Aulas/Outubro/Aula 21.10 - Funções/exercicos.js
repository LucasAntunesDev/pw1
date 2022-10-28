const cria = (tam = 10) => {
    const r = [];
    while (tam > 0) {
        r.push({
            estoque: parseInt(Math.random() * 20),
            valor: parseInt(Math.random() * 10000) / 100
        })
        tam--;
    }
    return r;
}

const produtos = cria(100);

//1) Faça um script que retorne todos os produtos sem estoque
console.log(produtos)

const semEstoques = produtos.filter(produto => produto.estoque === 0);
// console.log(semEstoques);

// 2) Faça um script que verifique se tem algum prouto sem estoque
const algumSemEstoque = produtos.some(p => p.estoque === 0);
console.log(algumSemEstoque);

// 3) Faça um script que verifique se todos os produtos posusem 
//pelo menos 2 em estoque
const pelosMenos2 = produtos.every(p => p.estoque >= 2);
console.log(pelosMenos2);

// 4) Faça um script que diga o quanto de valor tem cada produto
const valorProduto = produtos.map(p => p.estoque * p.valor);
console.log(valorProduto);

// 5) Calcule o desconto de 30% nos produtos com estoque igual a 19;
const desconto = produtos.filter(p => p.estoque === 19).map(p => p.valor * (30/100));
console.log(desconto);