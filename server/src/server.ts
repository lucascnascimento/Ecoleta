import express, { request, response } from "express";

const app = express();

app.use(express.json()); // P/ o express entender o corpo da requisição em formato json

// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Request Param: PArâmetros que vem na própria rota que identifica um recurso
// Query param: Parâmetros que vem na própria rota geralmente para filtros, paginação
// Request body: Parâmetros para criação/atualização do usuário

const users = ["Diego", "Cleiton", "Lucas", "Daniel"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];
  return response.json(user);
});

app.post("/users", (request, response) => {
  const user = { name: "Lucas", email: "asoifjasoij@sidjfoi.com" };
  return response.json(request.body);
});

app.listen(3333);
