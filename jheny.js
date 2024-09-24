let inventario =[
{ nome: 'tulipa', preco: 90, emEstoque: true },
{ nome: 'rosas', preco: 50, emEstoque: false },
{ nome: 'Margarida', preco: 90, emEstoque: true },
{ nome: 'jasmin', preco: 100, emEstoque: true },
{ nome: 'gira-sol', preco: 50, emEstoque: false },
{ nome: 'copo de leite', preco: 90, emEstoque: true },
{ nome: 'orquidia', preco: 100, emEstoque: true },
{ nome: 'lirios', preco: 50, emEstoque: false },
{ nome: 'lotus', preco: 90, emEstoque: true },
{ nome: 'dalia', preco: 100, emEstoque: true },
{ nome: 'suculentas', preco: 50, emEstoque: false },
{ nome: 'astromelias', preco: 90, emEstoque: true },
{ nome: 'violetas', preco: 100, emEstoque: true },
{ nome: 'gerberas', preco: 50, emEstoque: false },
{ nome: 'lisianthus', preco: 90, emEstoque: true }
]
inventario.push({ nome: 'violetas', preco: 100, emEstoque: true });
inventario[0].preco = 120;
inventario[2].emEstoque = false;
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);


