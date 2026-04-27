import express from "express";
import {  readAllUsers, createCalcado, deleteCalcado, updateCalcado, readAllCalcados } from "./controllers/UserController";


const routes = express.Router();

routes.get("/users", readAllUsers);
routes.post("/calcados", createCalcado);
routes.delete("/calcados", deleteCalcado);
routes.patch("/calcados", updateCalcado);
routes.get("/calcados", readAllCalcados);


export default routes;
