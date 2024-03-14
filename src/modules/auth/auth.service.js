import AuthDbSchema from "./auth.db.schema.js";

export async function signup(data) {
  const { name, email, password } = data;
  const existingUser = await AuthDbSchema.find({ email });
  if (existingUser.length > 0) {
    return false;
  } else {
    const signup = new AuthDbSchema(data);
    await signup.save();
    return signup;
  }
}

export async function login(data) {
  console.log(data);
  const existingUser = await AuthDbSchema.findOne({
    email: data.email,
  });
  if (existingUser) {
    console.log("hai",existingUser);
    if (existingUser.password === data.password) {
      return existingUser;
    } else return false;
  } else {
    return false;
  }
}
