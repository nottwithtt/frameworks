'use client'
import Top_Bar from "../components/topBar/topBar"
import Message_Cloud from "@/app/components/messageCloud/messageCloud"
import Contact_Search from "@/app/components/contactSearch/contactSearch"
import Contact_Card from "../components/contactCard/contactCard"
import styles from "./home.module.css"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const MainHome = () => {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [message, setMessage] = useState("")

  const handleSearch = (input) => {
    console.log(input)
  }

  const sendMessage = (msg) => {
    if (socket) {
      socket.emit("message", { userId: "123", text: msg });
      setMessage("");
    } else {
      console.error("Socket not initialized");
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:4001");
    setSocket(socket);
  
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.home_container}>
      <div className={styles.contacts_container}>
        <div className={styles.search_container}>
            <div className={styles.title_container}>
              <h1 className={styles.title}>MTEC</h1>
            </div>
            <Contact_Search isSearch = {true} handler={handleSearch}/>
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
      <div className={styles.messages_container}><Top_Bar/>
      {messages.map((msg, index) => (
          <Message_Cloud key={index} msg={msg.text} isLeft={true} />
        ))}
        <Contact_Search isSearch={false} handler={sendMessage}/>
      </div>
    </div>
  )
}

export default MainHome