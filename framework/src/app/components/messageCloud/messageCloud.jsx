import styles from './messageCloud.module.css'

const Message_Cloud = ( {msg, isLeft} ) => {
    return(
        <div className={styles.speech_container}>
            <div className={isLeft? styles.speech_bubble_left : styles.speech_bubble_right}>       
                <p>{msg}</p>
            </div>
        </div>
        )
}



export default Message_Cloud