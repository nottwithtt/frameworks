import styles from './messageCloud.module.css'

const Message_Cloud = () => {
    let left = false;

    return(
        <div className={left? styles.speech_bubble_left : styles.speech_bubble_right}>       
            <p>El mondongo puriscaleño es el mejor.</p>
        </div>
        
        )
}



export default Message_Cloud