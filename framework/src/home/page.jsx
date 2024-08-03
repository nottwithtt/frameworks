'use client'
import Contact_Search from "@/app/components/contactSearch/contactSearch"
import styles from "./home.module.css"


const MainHome = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.contacts_container}>
        <div className={styles.search_container}>
            <div className={styles.title_container}>
              <h1 className={styles.title}>MTEC</h1>
            </div>
            <Contact_Search />
        </div>
        <div className={styles.contacts_list_container}>

        </div>
      </div>
      <div className={styles.messages_container}>Columna de mensajes</div>
    </div>
  )
}

export default MainHome