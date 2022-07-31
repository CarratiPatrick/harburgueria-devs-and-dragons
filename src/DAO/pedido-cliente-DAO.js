import db from "../database/conect.js"

const daoClientePedido = {
    
    pegaTodosClientePedido : () =>{
        const pegaClientePedido = 'SELECT * FROM PEDIDO_CLIENTE'
        return new Promise((resolve, reject)=>{
            db.all(pegaClientePedido, (error, row)=>{
                if (error){
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaClientePedidoById : (idClientePedido) => {
        const pegaClientePedidoID = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_cliente_pedido = ?'

        return new Promise((resolve, reject)=>{
            db.get(pegaClientePedidoID, idClientePedido, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClientePedidoByIdCliente : (idCliente) => {
        const pegaClienteId = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(pegaClienteId, idCliente, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClientePedidoByIdPedido : (idPedido) => {
        const pegaPedidoId = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_pedido = ?'

        return new Promise((resolve, reject)=>{
            db.all(pegaPedidoId, idPedido, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClientePedidoByProduto : (produto) => {
        const pegaProduto = 'SELECT * FROM PEDIDO_CLIENTE WHERE produto = ?'

        return new Promise((resolve, reject)=>{
            db.all(pegaProduto, produto, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    inserePedidoCliente : (pedidoCliente)=>{
        const inserePedidoCliente = `
        INSERT INTO PEDIDO_CLIENTE (id_cliente, id_pedido, produto, quantidade)
        VALUES (?, ?, ?, ?)
        `
        return new Promise((resolve, reject)=>{
            db.run(inserePedidoCliente, pedidoCliente.id_cliente,pedidoCliente.id_pedido, pedidoCliente.produto, pedidoCliente.quantidade,
                                (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve(inserePedidoCliente)
                    }
                }
            )
        })
    },
      
    deletaPedidoCliente : (id)=>{
        const deletaPedidoCliente = `DELETE FROM PEDIDO_CLIENTE WHERE id_cliente_pedido = ?`

        return new Promise((resolve, reject)=>{
            db.get(deletaPedidoCliente, id, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (`Pedido Cliente ${id} deletado com sucesso`)
                }
            })
        })
    },

    atualizaPedidoCliente : (idPedidoCliente, novoPedidoCliente)=>{
        const atualizaPedidoCliente = `UPDATE PEDIDO_CLIENTE SET id_pedido = ?, id_cliente = ?, produto = ?, quantidade = ?`
         
        return new Promise((resolve, reject)=>{
            db.run(atualizaPedidoCliente, novoPedidoCliente.id_pedido, novoPedidoCliente.id_cliente, novoPedidoCliente.produto, novoPedidoCliente.quantidade,
                (error)=>{
                    if(error){
                      reject(error)
                    } else {
                        resolve (novoPedidoCliente)
                    }
                })
        })
    }
}

export default daoClientePedido