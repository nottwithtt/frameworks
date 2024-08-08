'use client'
import Top_Bar from "../components/topBar/topBar"
import Message_Cloud from "@/app/components/messageCloud/messageCloud"
import Contact_Search from "@/app/components/contactSearch/contactSearch"
import Contact_Card from "../components/contactCard/contactCard"
import PopPap from '@/app/components/popPap/popPap'
import styles from "./home.module.css"
import { useEffect, useState, useRef } from "react"
import { io } from "socket.io-client"

const MainHome = () => {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [contacts, setContactas] = useState([])
  const [message, setMessage] = useState("")
  const [userId, setUserId] = useState("")
  const [pop, setPop] = useState(false)

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSearch = (input) => {
    console.log(input)
  }

  const handleAddClick = () => {
    setPop(!pop)
  };

  const sendMessage = (msg) => {
    console.log("sending message to:", selectedChat);
    if (socket) {
      socket.emit("sendMessage", { userId: userId, contactId: selectedChat, text: msg });
      setMessage("");
    } else {
      console.error("Socket not initialized");
    }
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch("http://localhost:4000/verify-token", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      if (data.message === "Token is valid") {
        console.log("mi id:", data.userId);
        
        setUserId(data.userId);
        const socket = io("http://localhost:4001");
        setSocket(socket);
        console.log("socket initialized")
        socket.emit("addNewUser", data.userId);

        socket.on("message", (data) => {
          setMessages((prevMessages) => [...prevMessages, data]);
        });
        getContacts(data.userId);
        return () => {
          socket.disconnect();
        };
      }
    };

    const getContacts = async (userId1) => {
      console.log('Comprobando id', userId1);
    
      const response = await fetch(`http://localhost:4000/contById`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
          userId: userId1
      })});
    
      const data = await response.json();
      console.log(data);
      setSelectedChat(data[0]._id);
      console.log('Primer contacto',selectedChat)
      setContactas(data);
    };
    fetchUserId();
  }, []);

  useEffect(() => {
    if (socket === null) return;
    socket.on("getMessage", (res) => {
      console.log("received a message from", res.userId);
      if (Array.isArray(res)) {
        setMessages((prev) => [...prev, ...res]);
      } else {
        setMessages((prev) => [...prev, res]);
      }
    });

    return () => {
      socket.off("getMessage");
    };
  }, [socket]);

  return (
    <div className={styles.home_container}>
        {pop && (
          <PopPap 
            userId={userId}
            message={"Nuevo"}
            onClose={handleAddClick}
            setContacts={setContactas}
            />
        )}
      <button className={styles.addButton} onClick={handleAddClick}>+</button>
      <div className={styles.contacts_container}>
        <div className={styles.search_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>MTEC</h1>
          </div>
          <Contact_Search isSearch={true} handler={handleSearch} />
        </div>
        <div className={styles.contacts_list_container}>
          {contacts.map((info, index) => (
            <Contact_Card key={index} 
            nombre={info.name}
            descripcion={info.surname}
            idContact={info._id}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            />
          ))}
        </div>
      </div>
      <div className={styles.messages_container}>
        <Top_Bar />
        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <Message_Cloud key={index} msg={msg.text} isLeft={!(msg.userId === userId)} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div>
          <Contact_Search isSearch={false} handler={sendMessage} />
        </div>
        
      </div>
    </div>
  )
}

export default MainHome;