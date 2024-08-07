import styles from './topBar.module.css'
import Contact_Card from '../contactCard/contactCard'

const Top_Bar = () =>{
    return(
        <div className={styles.top_bar}>
            <Contact_Card/>
        </div>
    )
}

export default Top_Bar
 