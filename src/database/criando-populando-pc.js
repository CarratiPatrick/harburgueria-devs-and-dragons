import sqlite3 from "sqlite3";
sqlite3.verbose()

const db = new sqlite3.Database('devs-and-dragons.db');

const PEDIDO_CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDO_CLIENTE" (
    "id_pedido_cliente" INTEGER PRIMARY KEY AUTOINCREMENT,
    "id_pedido" int, 
    "id_cliente" int, 
    "id_produto" int, 
    "produto" String VarChar(36),
    "quantidade" Int,    
    FOREIGN KEY(id_pedido) REFERENCES PEDIDO(id_pedido),
    FOREIGN KEY(id_cliente) REFERENCES CLIENTE(id_cliente),
    FOREIGN KEY(id_produto) REFERENCES PRODUTO(id_produto)
);`;


function criaTabelaPedidoCliente() {
    db.run(PEDIDO_CLIENTE_SCHEMA, (error)=>{
        if(error){
            console.log("Erro ao criar a tabela PEDIDO_CLIENTE")
        }
    })
}

function populaTabelaPedidoCliente() {
    db.run(ADD_PEDIDO_CLIENTE_DATA, (error)=>{
        if(error){
            console.log("Erro ao popular a tabela PEDIDO_CLIENTE")
        }
    })
}

db.serialize(()=>{
    criaTabelaProdutos()
    populaTabelaPedidoCliente()
})