import express from "express";
import routes from "../routes";
import {
  startGithubLogin,
  finishGithubLogin,
  logout,
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
  see,
} from "../Controller/userController";
import {
  protectMiddleware,
  publicOnlyMiddleware,
  avatarUpload,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/logout", protectMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatart"), postEdit);
userRouter
  .route("/change-password")
  .all(protectMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/:id", see);
export default userRouter;
