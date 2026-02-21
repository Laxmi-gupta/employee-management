import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"]
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Phone must be 10 digits"]
  },
  department: {
    type: String,
    required: true,
    enum: ["HR", "Engineering", "Marketing", "Sales","Product Development"]
  },
  designation: {
    type: String,
    required: true,
    enum: ["Manager", "Software Developer", "Intern", "Executive"]
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"]
  },
  photo: {
    type: String,
    required: true
  }
},{ timestamps: true });   // automatically adds created and updated at col

export default mongoose.model("Employee", employeeSchema);