import express from "express";
import routes from "../routes";
import { home, search } from "../Controller/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get("/search", search);

export default globalRouter;
