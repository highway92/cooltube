import mongoose from "mongoose";

mongoose.connect(process.env.Mongo_atlas, {
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
