import styles from './popPap.module.css'
import { useState } from 'react';

const PopPap = ({ userId, message, onClose, setContacts }) => {
    const [input, setInput] = useState('');

    const getContacts = async () => {
        const response = await fetch("http://localhost:4000/contById", {userId: userId})
        const data = await response.json();
        setContacts(data)
      }

    const handleAddClick = async () => {
        const response = await fetch("http://localhost:4000/crearContacto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                user_contact_Id: input
            })
        }).then(() => {
            getContacts()
        })
        // Handle response
        
        await fetch("http://localhost:4000/crearChat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                user_contact_Id: input
            })
        });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.pop_message_overlay} onClick={handleOverlayClick}>
            <div className={styles.pop_message} onClick={(e) => e.stopPropagation()}>
                <p>{message}</p>
                <input onChange={e => setInput(e.target.value)} value={input} type="Buscar" className={styles.input_contact} placeholder='ID' />
                <button className={styles.botton_input_contact} onClick={handleAddClick}>
                    <span>+</span>
                </button>
            </div>
        </div>
    );
};

export default PopPap;