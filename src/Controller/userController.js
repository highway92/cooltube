import User from "../models/User";
import bcrypt from "bcrypt";
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, userid, email, password, password2, location } = req.body;
  if (password !== password2) {
    return res.status(400).reder("join", {
      pageTitle: "Join",
      errorMessage: "Password is not the same.",
    });
  }
  const exists = await User.exists({ $or: [{ userid }, { email }] });
  if (exists) {
    return res.status(400).reder("join", {
      pageTitle: "Join",
      errorMessage: "This id or email is already taken.",
    });
  }
  await User.create({
    name,
    userid,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { userid, password } = req.body;
  const user = await User.findOne({ userid });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "An account with this username doesn't exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
