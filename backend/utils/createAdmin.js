import User from "../models/user.model.js"
import bcrypt from "bcrypt"

const createAdmin = async() => {
  const existing = await User.findOne({email: "admin@gmail.com"});
  if(existing) return;

  const hash = await bcrypt.hash("admin123",10);

  await User.create({
    email: "admin@gmail.com",
    password:hash
  })

  console.log("Default Admin Created");
}

export default createAdmin;