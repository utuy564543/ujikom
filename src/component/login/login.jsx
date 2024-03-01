import React, { useState } from "react";
import "./login.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (formData.username.trim() === "") {
      formErrors.username = "Username harus diisi";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Password harus diisi";
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Simulasi logika autentikasi di sini
      if (formData.username === "admin" && formData.password === "admin") {
        setSuccessMessage("Login berhasil!");
        // Reset form
        setFormData({
          username: "",
          password: "",
        });
        setErrors({});
      } else {
        setSuccessMessage(""); // Bersihkan pesan sukses jika gagal login
        setErrors({ password: "Nama pengguna atau kata sandi salah" });
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
      {successMessage && <div className="success">{successMessage}</div>}
    </div>
  );
}

export default LoginForm;
