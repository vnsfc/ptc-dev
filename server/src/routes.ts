import express from "express";
import { readAllUsers } from "./controllers/UserController";
import { createCalcado, deleteCalcado, readAllCalcados, updateCalcado } from "./controllers/CalcadoController";


const routes = express.Router();

routes.get("/users", readAllUsers);
routes.post("/calcados", createCalcado);
routes.delete("/calcados", deleteCalcado);
routes.patch("/calcados", updateCalcado);
routes.get("/calcados", readAllCalcados);


export default routes;
