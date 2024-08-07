import styles from "./photoComponent.module.css";
import { FaUser } from "react-icons/fa";

export default function PhotoComponent() {
  return (
    <div>
      <FaUser className={styles.icon} />
    </div>
  );
}
