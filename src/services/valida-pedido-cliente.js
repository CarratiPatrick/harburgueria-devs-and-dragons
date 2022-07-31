export const validaIdPedido = (idPedido)=>{
    if(idPedido){
        if(idPedido == ""){
            throw new Errow('O nome do id_pedido não pode estar vazio')
        }
    } else {
        throw new Error('Insira id_pedido')
    }
}

export const validaIdCliente = (idCliente)=>{
    if(idCliente){
        if(idCliente == ""){
            throw new Errow('O id_cliente não pode estar vazio')
        }
    } else {
        throw new Error('Insira um id_cliente')
    }
}

export const validaProduto = (produto)=>{
    if(produto){
        if(produto == ""){
            throw new Errow('O produto não pode estar vazio')
        }
    } else {
        throw new Error('Insira um produto')
    }
}

export const validaQtd = (qtd)=>{
    if(qtd){
        if(qtd == ""){
            throw new Errow('A quantidade do(s) produto(s) não pode estar vazia')
        }
    } else {
        throw new Error('Insira uma quantidade para o(s) produto(s)')
    }
}

export const criaPedidoCliente = (idPedido, idCliente, produto, qnt,) =>{
    validaNome(idPedido)
    validaPreco(idCliente)
    validaProduto(produto)
    validaQtd(qnt)
        
    return {
        "id_pedido": idPedido,
        "id_cliente": idCliente,
        "produto": produto,
        "quantidade": qnt
    }
}