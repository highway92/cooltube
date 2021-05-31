import express from "express";
import routes from "../routes";
import { home } from "../Controller/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
export default globalRouter;
