const express = require('express'); //esta importando o modulo (express) para dentro da variavel express

const app = express(); //*estar criando a aplicaçao 

/* METODO: HTTP:
GET: BUSCAR UMA INFORMAÇAO DO BACK-END, COMO UMA LISTAGEM O DADO DE UM USUARIO, QUALQUER TIPO DE RETORNO DE DADO.
POST: CRIAR UMA INFORMAÇAO NO BACK-END 
PUT: ALTERAR UMA INFORMAÇAO NO BACK-END
DELETE: DELETAR UMA INFORMAÇAO NO BACK-END */
app.post('/users', (request, response) => {
  return response.json({
    evento: 'Semana Omnistack',
    aluno: 'Joao Victor'
  });
});
// '/' para informar qual que  é o caminho da rota. O recurso vem apos a '/RECURSO que vai estar associado a uma tabela no banco 

app.listen(3333); //a aplicaçao vai ouvir essa porta 

//O Backend lida com todo o sistema desde a banco de dados como a apresentaçao, html,css,javascript

