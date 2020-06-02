import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json()); // P/ o express entender o corpo da requisição em formato json
app.use(routes);

app.listen(3333);
