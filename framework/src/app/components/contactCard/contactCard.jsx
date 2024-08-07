import { FaUserCircle } from "react-icons/fa";
import styles from "./contactCard.module.css"

const Contact_Card = () => {
  return (
    <div className={styles.card_contact_container}>
      <div className={styles.icon_contact}><span><FaUserCircle /></span></div>
      <div className={styles.info_contact}>
        <span>Nombre</span>
        <span>Here some text</span>
      </div>
    </div>
  )
}

export default Contact_Card