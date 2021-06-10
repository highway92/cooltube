import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/cooltube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("DB ERROR:", error);
});
db.once("open", () => console.log("😀 Connected on Mongodb!"));
