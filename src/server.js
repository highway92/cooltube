import express from "express";
import morgan from "morgan";
import rootRouter from "./Router/rootRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";
import session from "express-session";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "sadfsda",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use(routes.home, rootRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);
export default app;
