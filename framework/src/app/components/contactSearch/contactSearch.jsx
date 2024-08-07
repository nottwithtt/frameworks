import styles from './contactSearch.module.css'
import { FaSearch } from "react-icons/fa";

const Contact_Search = () => {
  return (
    <div className={styles.container_search}>
        <input type="Buscar" className={styles.input_contact} placeholder='Buscar' />
        <button className={styles.botton_input_contact}>
          <spam><FaSearch /></spam>
        </button>
    </div>
  )
}

export default Contact_Search