import "./db";
import "./models/video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./Router/globalRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);
export default app;
