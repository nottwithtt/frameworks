import { FaUserCircle } from "react-icons/fa";
import styles from "./contactCard.module.css"

const Contact_Card = () => {
  return (
    <div className={styles.card_contact_container}>
      <div ><span><FaUserCircle /></span></div>
      <div>
        <span>Nombre</span>
        <span>Here some text</span>
      </div>
    </div>
  )
}

export default Contact_Card