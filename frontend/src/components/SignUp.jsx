import React, { useState } from "react";
import {signupUser} from "../services/api";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await signupUser(formData);
      setMessage("Registration successful:", response);
    } catch (error) {
      console.log("Error while creating user:", error.response.data);
    }
  };
  

  return (
    <div>
      <h2 >Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" onChange={handleChange} required />
        <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="bio" placeholder="bio" required></textarea>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>  
    </div>
  );
};

export default SignUp;
