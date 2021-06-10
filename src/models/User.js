import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  userid: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});
const User = mongoose.model("User", userSchema);
export default User;
