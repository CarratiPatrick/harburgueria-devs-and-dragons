import db from "../database/conect.js"

const daoPedidoCliente = {
    
    pegaTodosPedidoCliente : () =>{
        const pegaPedidoCliente = 'SELECT * FROM PEDIDO_CLIENTE'
        return new Promise((resolve, reject)=>{
            db.all(pegaPedidoCliente, (error, row)=>{
                if (error){
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaPedidoClienteById : (id) => {
        const pegaPedidoClienteID = 'SELECT * FROM PEDIDO_CLIENTE WHERE id = ?'

        return new Promise((resolve, reject)=>{
            db.get(pegaPedidoClienteID, id, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },
    pegaPedidoClienteByIdPedido : (idPedido) => {
        const pegaPedidoCliente = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_pedido = ?'

        return new Promise((resolve, reject)=>{
            db.all(pegaPedidoCliente, idPedido, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaPedidoClienteByIdCliente : (idCliente) => {
        const pegaPedidoClienteId = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(pegaPedidoClienteId, idCliente, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },


    pegaPedidoClienteByProduto : (produto) => {
        const pegaPedidoClienteProduto = 'SELECT * FROM PEDIDO_CLIENTE WHERE produto = ?'

        return new Promise((resolve, reject)=>{
            db.all(pegaPedidoClienteProduto, produto, (error, row)=>{
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
        INSERT INTO PEDIDO_CLIENTE (id_pedido, id_cliente, produto, quantidade)
        VALUES (?, ?, ?, ?)
        `
        return new Promise((resolve, reject)=>{
            db.run(inserePedidoCliente, pedidoCliente.id_pedido, pedidoCliente.id_cliente, pedidoCliente.produto, pedidoCliente.quantidade,
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

export default daoPedidoCliente