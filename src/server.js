import express from "express";
import morgan from "morgan";
import rootRouter from "./Router/rootRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "express-flash";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./Router/apiRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
  })
);
app.use(flash());
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use(routes.user, userRouter);
app.use(routes.home, rootRouter);
app.use(routes.video, videoRouter);
app.use("/api", apiRouter);

export default app;
