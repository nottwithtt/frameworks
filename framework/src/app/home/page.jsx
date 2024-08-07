'use client'
import Top_Bar from "../components/topBar/topBar"
import Message_Cloud from "@/app/components/messageCloud/messageCloud"
import Contact_Search from "@/app/components/contactSearch/contactSearch"
import Contact_Card from "../components/contactCard/contactCard"
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
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
          <Contact_Card />
        </div>
      </div>
      <div className={styles.messages_container}><Top_Bar/><Message_Cloud/></div>
    </div>
  )
}

export default MainHome