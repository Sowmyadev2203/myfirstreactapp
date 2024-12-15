import React, { useState } from "react";
import axios from "axios";  
import AuthenticationModel from "./modalComp"; 

export default function LoginForm() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
  });
  const [res, setResponse] = useState(false);

  const handleInput = (e) => {
    let { name, value, type } = e.target;

    setFormData((a) => {
      return {
        ...a,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", formData, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.data.accessToken) {
        setResponse(true);
      } else {
        setResponse(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setResponse(false);
    } finally {
      setModalShow(true);  
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50vw",
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Enter username"
        />
        <input
          type="password"  
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Enter password"
        />
        <input
          type="number"
          name="expiresInMins"
          value={formData.expiresInMins}
          onChange={handleInput}
          placeholder="Expiration in minutes"
        />
        <input type="submit" value="Login" />
      </form>
      <AuthenticationModel
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={res ? formData.username : "UnAuthorized user"}
      />
    </div>
  );
}
