import { login, signup } from "./auth.service.js";

export async function signupHandler(req, res, next) {
  try {
    const response = await signup(req.body);
    if (response) {
      res.status(200).send("Signup Successful");   
    } else {
      res.status(400).send("Signup unsuccessfull or user exist");
    }
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
}

export async function loginHandler(req, res, next) {
  try {
    const response = await login(req.body);
    if (response) {
      res.status(200).send("Login Successful");
    } else {
      res.status(400).send("User dont exist try signing up");
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
