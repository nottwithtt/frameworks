import UserInfoComponent from "../components/userInfoComponent/userInfoComponent";
import PasswordComponent from "../components/passwordComponent/passwordComponent";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <UserInfoComponent placeholder={"Usuario"}></UserInfoComponent>
      <PasswordComponent placeholder={"Contraseña"}></PasswordComponent>
      <a href="/register" className={styles.a}>Crea una cuenta</a>
    </div>
  );
}
