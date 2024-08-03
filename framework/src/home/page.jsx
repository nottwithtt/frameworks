'use client'
import Contact_Search from "@/app/components/contactSearch/contactSearch"
import styles from "./home.module.css"


const MainHome = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.contacts_container}>
        <div>
            <Contact_Search />
        </div>
        <div>

        </div>
      </div>
      <div className={styles.messages_container}>Columna de mensajes</div>
    </div>
  )
}

export default MainHome