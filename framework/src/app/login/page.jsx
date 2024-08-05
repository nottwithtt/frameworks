"use client";
import { useState } from "react";
import UserInfoComponent from "../components/userInfoComponent/userInfoComponent";
import PasswordComponent from "../components/passwordComponent/passwordComponent";
import PhotoComponent from "../components/photoComponent/photoComponent";
import styles from "./page.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    // Handle response data (e.g., show error message or redirect)
    if (data.error) {
      alert(data.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className={styles.container}>
        <PhotoComponent></PhotoComponent>
        <UserInfoComponent
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordComponent
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className={styles.a} onClick={handleLogin}>
          Ingresar
        </a>
        <a href="/register" className={styles.a}>
          Crea una cuenta
        </a>
      </div>
    </>
  );
}
