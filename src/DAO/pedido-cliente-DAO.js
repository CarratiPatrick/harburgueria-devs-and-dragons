import db from "../database/conect.js"

const daoPedidoCliente = {

    pegaTodosPedidoCliente: () => {
        const pegaPedidoCliente = 'SELECT * FROM PEDIDO_CLIENTE'
        return new Promise((resolve, reject) => {
            db.all(pegaPedidoCliente, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaPedidoClienteById: (id) => {
        const pegaPedidoClienteID = 'SELECT * FROM PEDIDO_CLIENTE WHERE id = ?'

        return new Promise((resolve, reject) => {
            db.get(pegaPedidoClienteID, id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },
    pegaPedidoClienteByIdPedido: (idPedido) => {
        const pegaPedidoClienteIdPedido = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_pedido = ?'

        return new Promise((resolve, reject) => {
            db.all(pegaPedidoClienteIdPedido, idPedido, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaPedidoClienteByIdCliente: (idCliente) => {
        const pegaPedidoClienteByIdCliente = 'SELECT * FROM PEDIDO_CLIENTE WHERE id_cliente = ?'

        return new Promise((resolve, reject) => {
            db.all(pegaPedidoClienteByIdCliente, idCliente, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },


    pegaPedidoClienteByProduto: (produto) => {
        const pegaPedidoClienteProduto = 'SELECT * FROM PEDIDO_CLIENTE WHERE produto = ?'

        return new Promise((resolve, reject) => {
            db.all(pegaPedidoClienteProduto, produto, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    inserePedidoCliente: (pedidoCliente) => {
        const inserePedidoCliente = `
        INSERT INTO PEDIDO_CLIENTE (id_pedido, id_cliente, produto)
        VALUES (?, ?, ?)
        `
        return new Promise((resolve, reject) => {
            db.run(inserePedidoCliente, pedidoCliente.id_pedido, pedidoCliente.id_cliente, pedidoCliente.produto,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(inserePedidoCliente)
                    }
                }
            )
        })
    },

    deletaPedidoCliente: (id) => {
        const deletaPedidoCliente = `DELETE FROM PEDIDO_CLIENTE WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.get(deletaPedidoCliente, id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(`Pedido Cliente ${id} deletado com sucesso`)
                }
            })
        })
    },

    atualizaPedidoCliente: (id, novoPedidoCliente) => {
        const atualizaPedidoCliente = `UPDATE PEDIDO_CLIENTE SET id_pedido = ?, id_cliente = ?, produto = ? WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(atualizaPedidoCliente, novoPedidoCliente.id_pedido, novoPedidoCliente.id_cliente, novoPedidoCliente.produto, id,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(novoPedidoCliente)
                    }
                })
        })
    }
}

export default daoPedidoCliente