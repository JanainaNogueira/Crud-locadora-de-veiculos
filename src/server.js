import express from "express"
import routes from "./routes.js"
import connection from "./database/index.js";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3030)