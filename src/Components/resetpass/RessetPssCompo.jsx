 import React, { useState } from "react"; 
 import { useForm } from "react-hook-form";
 import { ToastContainer, toast } from "react-toastify";
 import { ClipLoader } from "react-spinners";
 import { FaEye, FaEyeSlash } from "react-icons/fa"; 
 import "react-toastify/dist/ReactToastify.css";
 import { Link } from "react-router-dom";

 const RessetPssCompo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset successful! Please log in with your new password.");
    }, 2000);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Reset Your Password</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Email Field */}
        <div>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            Email
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" style={{ fontWeight: "bold" }}>
            New Password
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your new password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            background: loading ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (!loading) e.target.style.background = "#0056b3";
          }}
          onMouseOut={(e) => {
            if (!loading) e.target.style.background = "#007bff";
          }}
        >
          {loading ? <ClipLoader size={20} color="#fff" /> : "Reset Password"}
        </button>
      </form>

      {/* Toast Notification */}
      <ToastContainer />

      {/* Link to Login */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/Login" style={{ color: "#007bff" }}>
          Back to Login
        </Link>
      </div>
    </div>
  );
 };

 export default RessetPssCompo;
