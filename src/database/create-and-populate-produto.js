import sqlite3 from "sqlite3";
sqlite3.verbose()

const db = new sqlite3.Database('devs-and-dragons.db');

const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "id_produto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_produto" text, 
    "valor_produto" real, 
    "qtd_produto" int, 
    "fornecedor_produto" text, 
    "tipo_produto" text
);`;

const ADD_PRODUTOS_DATA = `
INSERT INTO PRODUTOS (id_produto, nome_produto, valor_produto, qtd_produto, fornecedor_produto, tipo_produto)
VALUES
    (1, 'Coca-Cola lata 350ml', 4.00, 5, 'Distribuidora do Zeca', 'refrigerante'),
    (2, 'Sprite lata 350ml', 4.00, 5, 'Distribuidora do Zeca', 'refrigerante'),
    (3, 'Hamburguer de Costela', 23.00, 10, 'Devs and Dragons', 'hamburguer'),
    (4, 'Hamburguer Vegano', 27.00, 15, 'Devs and Dragons', 'hamburguer'),
    (5, 'Vinho Dv Catena Malbec', 230.00, 13, 'Imports S.A.', 'vinhos'),
    (6, 'Vinho Alma Negra', 250.00, 15, 'Imports S.A.', 'vinhos')
`

function criaTabelaProdutos() {
    db.run(PRODUTOS_SCHEMA, (error)=>{
        if(error){
            console.log("Erro ao criar a tabela PRODUTOS")
        }
    })
}

function populaTabelaProdutos() {
    db.run(ADD_PRODUTOS_DATA, (error)=>{
        if(error){
            console.log("Erro ao popular a tabela PRODUTOS")
        }
    })
}

db.serialize(()=>{
    criaTabelaProdutos()
    populaTabelaProdutos()
})