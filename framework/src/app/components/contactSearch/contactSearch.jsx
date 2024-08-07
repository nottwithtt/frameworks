import { useState } from 'react';
import styles from './contactSearch.module.css'
import { FaSearch } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact_Search = ({isSearch, handler}) => {
  const [input, setInput] = useState('');

  return (
    <div className={isSearch? styles.container_search : styles.container_search2}>
        <input onChange={e => setInput(e.target.value)} value={input} type="Buscar" className={styles.input_contact} placeholder={isSearch? 'Buscar' : "Mensaje"} />
        <button className={styles.botton_input_contact} onClick={() => handler(input)}>
          <spam>{isSearch? <FaSearch /> : <IoIosSend/>}</spam>
        </button>
    </div>
  )
}

export default Contact_Search