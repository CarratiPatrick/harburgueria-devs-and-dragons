
import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('devs-and-dragons.db');

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "cpf" integer,
    "email" text,
    "telefone" integer,
    "cargo" text,
    "dataDeAdmissao" text,
    "salario" integer
  );`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (id, nome, cpf, email, telefone, cargo, dataDeAdmissao, salario)
VALUES 
    (1, 'Olívia Ribeiro', 03088863698, 'olivia.ribeiro@yahoo.com.br', '999994545', 'Gerente', '10/05/2020', 3500),
    (2, 'Eugênio Oliveira', 15874236921, 'eugenio.oliveira@hotmail.com.br', 987874554, 'Subgerente', '06/12/2020', 3000),
    (3, 'Carolina Lima', 23698741353, 'carolina-l@gmail.com', 974783121, 'Operadora de caixa', '12/11/2021', 1550),
    (4, 'Gustavo Marques', 01088896577, 'gustavo@gmail.com', 984849696, 'Motoboy', '12/11/2021', 1800),
    (5, 'José Andrade', 11211311487, 'joseandrade77@outlook.com', 972369874, 'Cozinheiro', '18/02/2020', 2110),
    (6, 'Tatiana Costa', 78563247896, 'tati22@gmail.com', 988556699, 'operadora de caixa', '13/12/2021', 1550),
    (7, 'Amanda maria', 74126589611, 'amandac2020@yahoo.com.br', 998741236, 'Auxiliar de cozinha', '11/05/2022', 1750),
    (8, 'Luzia Aparecida', 23698741256, 'luziaa@gmail.com', 974745239, 'Atendente', '20/07/2021', 1600),
    (9, 'Fernando Herique', 32158746983, 'fernandoH10@hotmail.com', 977521394, 'Motoboy', '15/10/2021', 1800),
    (10, 'Yuri Francisco', 47963512877, 'yurifral@gmail.com', 986952531, 'Atendente', '14/01/2022', 1600),
    (11, 'Sandra Almeida', 78963241173, 'Sandra-l@yahoo.com', 996312255, 'Serviços Gerais', '01/08/2021', 1500)
`

function criaTabelaFuncionario() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
        if (error) console.log(`Erro ao criar tabela de funcionarios${error}`);
    });
}


function populaTabelaFuncionarios() {
    db.run(ADD_FUNCIONARIOS_DATA, (error) => {
        if (error) console.log(`Erro ao popular tabela de funcionarios${error}`);
    });
}


db.serialize( () => {
    criaTabelaFuncionario()
    populaTabelaFuncionarios()
});