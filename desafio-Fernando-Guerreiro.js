class CaixaDaLanchonete {
    //Itens e seus respectivos preços
    const cardapio = {
        "Cafe" : 3.00,
        "Chantily (extra do cafe)" : 1.50,
        "Suco Natural" : 6.20,
        "Sanduiche" : 6.50,
        "Queijo (extra do sanduiche)" : 2.00,
        "Salgado" : 7.25,
        "Combo1 - 1 suco e 1 sanduiche" : 9.50,
        "Combo2 - 1 café e 1 sanduiche" : 7.50,
    };
    //Função para calcular o valor da compra
    function calcularValorDaCompra(MetodoDePagamento, itens) {
        const FormasDePagamento = ["dinheiro", "debito", "credito"];

        if(!FormasDePagamento.includes(MetodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }
        
        let total = 0;
        let temItemPrincipal = false;

        for(const item in itens) {
            if(item === "Chantily" || item === "Queijo") {
                if(!itens[item]) {
                    continue;
                }
                const itemPrincipal = {
                    "Chantily": "Café",
                    "Queijo": "Sanduiche",
                }
                if(!itens[itemPrincipal]) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            if(cardapio[item] === undefined) {
                return "Item inválido!";
            }
            if(item !== "Combo1 - 1 suco e 1 sanduiche" && item !== "Combo2 - 1 café e 1 sanduiche") {
                temItemPrincipal = true;
            }
            total += carpadio[item] * itens[item];
        }
        if(!temItemPrincipal) {
            return "Não há itens no carrinho de compra!";
        }
        if(total === 0) {
            return "Quantidade inválida!";
        }
        if(MetodoDePagamento === "dinheiro") {
            total *= 0.95; // desconto de 5%
        } else if(MetodoDePagamento === "credito") {
            total *= 1.03; // acrescimo de 3%
        }
        return 'Total a pagar: R$ ${total.toFixed(2)}';
    }
}