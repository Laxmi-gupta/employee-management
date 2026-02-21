import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"
import api from "../services/api";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data)
      await api.post("/auth/login", data);
      navigate("/dashboard");
      toast.success("Login successful");
    } catch (error) {
        toast.error(error.response?.data?.message || "Invalid email or password");
    }
  };

   return (
    <div className="login-wrapper">
      <div className="login-card">

        <img src="/src/assets/icons/idms_logo.svg" alt="IDMS Logo" className="logo-img" />
        <div className="logo-divider"></div>
        <p className="subtitle">Welcome to HR Admin Panel</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>User Name</label>
          <input type="email" placeholder="Enter User Name" {...register("email",{
            required:"Email is required",
            pattern: {
              value:
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },  
            })   
          }/>
          {errors.email && (
            <p className="error">{errors.email.message}</p>
          )}

          <label>Enter Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"   {...register("password", {
              required: "Password is required",
            })}
          />
           {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <div className="checkbox-row">
            <div className="left">
              <input type="checkbox" id="show" onChange={(e) => setShowPassword(e.target.checked)}/>
              <label htmlFor="show">Show Password</label>
            </div>

            <div className="right">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>

        <button className="login-btn" disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;