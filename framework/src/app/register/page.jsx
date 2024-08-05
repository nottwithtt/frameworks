import UserInfoComponent from "../components/userInfoComponent/userInfoComponent";
import PasswordComponent from "../components/passwordComponent/passwordComponent";
import PhotoComponent from "../components/photoComponent/photoComponent";
import styles from "./page.module.css";

export default function Register() {
  return (
    //Poner Foto
    <>
      <div className={styles.container}>
        <PhotoComponent></PhotoComponent>
        <UserInfoComponent placeholder={"Nombre"}></UserInfoComponent>
        <UserInfoComponent placeholder={"Apellido"}></UserInfoComponent>
        <UserInfoComponent placeholder={"Usuario"}></UserInfoComponent>
        <PasswordComponent placeholder={"Contraseña"}></PasswordComponent>
        <div className={styles.contenedorBotones}>
          <a href="/login" className={styles.a}>
            ←
          </a>
          <a href="/" className={styles.a}>
            ✓
          </a>
        </div>
      </div>
    </>
  );
}
