import express from "express";
import routes from "../routes";
import { home, search } from "../Controller/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../Controller/userController";

const rootRouter = express.Router();

rootRouter.get(routes.home, home);
rootRouter.get("/search", search);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;
