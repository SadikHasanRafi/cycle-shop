import express, {Express, Request, Response } from "express";
import routes from "./app/routes/routes";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require("cors");

const app  : Express = express();
app.use(express.json());
app.use(cors());
 



 
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api",routes)


export default app;
