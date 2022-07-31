import daoPedidoCliente from "../DAO/pedido-cliente-DAO.js"

const pedidoClienteModel = {
    inserePedidoCliente : async (pedidoCliente) => {
        return await daoPedidoCliente.inserePedidoCliente(pedidoCliente)
    },

    pegaPedidoCliente : async () => {
        return await daoPedidoCliente.pegaTodosPedidoCliente()
    },
    pegaPedidoClienteById : async (id) => {
        return await daoPedidoCliente.pegaPedidoClienteById(id)
    },  

    pegaPedidoClienteByIdPedido : async (idPedido) => {
        return await daoPedidoCliente.pegaPedidoClienteByIdPedido(idPedido)
    },  

    pegaPedidoClienteByIdCliente : async (idCliente) => {
        return await daoPedidoCliente.pegaPedidoClienteByIdCliente(idCliente)
    },
    
    pegaPedidoClienteByProduto : async (produto) => {
        return await daoPedidoCliente.pegaPedidoClienteByProduto(produto)
    },
    pegaPedidoClienteQtd : async (quantidade) => {
        return await daoPedidoCliente.pegaPedidoClienteByTipo(quantidade)
    },

    deletaPedidoCliente : async (idPedidoCliente) => {
        return await daoPedidoCliente.deletaPedidoCliente(idPedidoCliente)
    },

    atualizaPedidoCliente : async (idPedidoCliente, novosDados) => {
        const pedidoCliente = await pedidoClienteModel.pegaPedidoClienteById(idPedidoCliente)
        if(pedidoCliente){
            const PedidoClienteAtualizado = {
                "id_pedido" : novosDados.id_pedido || pedidoCliente.id_pedido,
                "id_cliente" : novosDados.id_cliente || pedidoCliente.id_cliente,
                "produto" : novosDados.produto || pedidoCliente.produto,
                "quantidade" : novosDados.quantidade || pedidoCliente.quantidade                
            }
            return await daoPedidoCliente.atualizaPedidoCliente(idPedidoCliente, PedidoClienteAtualizado)
        } else {
            throw new Error("Pedido cliente não encontrado")
        }
    }
}

export default pedidoClienteModel