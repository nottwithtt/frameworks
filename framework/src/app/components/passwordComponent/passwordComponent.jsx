import styles from "./passwordComponent.module.css";
import { RiLockPasswordFill } from "react-icons/ri";

export default function PasswordComponent({ placeholder }) {
  return (
    <div className={styles.container}>
      <RiLockPasswordFill className={styles.icon} />
      <input
        type="password"
        placeholder={placeholder}
        className={styles.input}
      ></input>
    </div>
  );
}
