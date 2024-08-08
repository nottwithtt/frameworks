import styles from './topBar.module.css'
import Contact_Card from '../contactCard/contactCard'

const Top_Bar = () =>{
    return(
        <div className={styles.top_bar}>
            <Contact_Card
            idContact={"2"}
            selectedChat={"1"}
            />
        </div>
    )
}

export default Top_Bar
 