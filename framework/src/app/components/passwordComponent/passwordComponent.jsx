import styles from "./passwordComponent.module.css";
import { RiLockPasswordFill } from "react-icons/ri";

export default function PasswordComponent({ placeholder, value, onChange }) {
  return (
    <div className={styles.container}>
      <RiLockPasswordFill className={styles.icon} />
      <input
        type="password"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
