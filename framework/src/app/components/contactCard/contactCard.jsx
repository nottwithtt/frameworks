import { FaUserCircle } from "react-icons/fa";
import styles from "./contactCard.module.css"

const Contact_Card = ({nombre, descripcion, idContact, selectedChat, setSelectedChat}) => {
  return (
    <div className={(selectedChat == idContact)? styles.card_contact_container2 : styles.card_contact_container}>
      <div className={styles.icon_contact}><span><FaUserCircle /></span></div>
      <div className={styles.info_contact}>
        <span>{nombre}</span>
        <span>{descripcion}</span>
      </div>
    </div>
  )
}

export default Contact_Card