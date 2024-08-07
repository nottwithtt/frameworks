import styles from "./userInfoComponent.module.css";
import { FaUser } from "react-icons/fa";

export default function UserInfoComponent({ placeholder, value, onChange }) {
  return (
    <div className={styles.container}>
      <FaUser className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
