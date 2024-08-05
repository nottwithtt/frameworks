"use client";
import { useState } from "react";
import UserInfoComponent from "../components/userInfoComponent/userInfoComponent";
import PasswordComponent from "../components/passwordComponent/passwordComponent";
import PhotoComponent from "../components/photoComponent/photoComponent";
import styles from "./page.module.css";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, username, password }),
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
    //Poner Foto
    <>
      <div className={styles.container}>
        <PhotoComponent></PhotoComponent>
        <UserInfoComponent
          placeholder={"Nombre"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></UserInfoComponent>
        <UserInfoComponent
          placeholder={"Apellido"}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        ></UserInfoComponent>
        <UserInfoComponent
          placeholder={"Usuario"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></UserInfoComponent>
        <PasswordComponent
          placeholder={"Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></PasswordComponent>
        <div className={styles.contenedorBotones}>
          <a href="/login" className={styles.a}>
            ←
          </a>
          <a className={styles.a} onClick={handleRegister}>
            ✓
          </a>
        </div>
      </div>
    </>
  );
}
