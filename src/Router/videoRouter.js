import express from "express";
import routes from "../routes";
import {
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  watch,
} from "../Controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
