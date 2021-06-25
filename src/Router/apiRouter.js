import express from "express";
import { registerView } from "../Controller/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
export default apiRouter;
