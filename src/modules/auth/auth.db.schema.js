import mongoose from "mongoose";

const authDbSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: "auth",
    timestamps: true,
  }
);

const AuthDbSchema = mongoose.model("auth", authDbSchema);
export default AuthDbSchema;
