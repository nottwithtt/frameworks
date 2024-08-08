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
  const [userId, setUserId] = useState("")

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const handleSearch = (input) => {
    console.log(input)
  }

  const sendMessage = (msg) => {
    if (socket) {
      socket.emit("sendMessage", { userId: userId, text: msg });
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

        return () => {
          socket.disconnect();
        };
      }
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
      <div className={styles.contacts_container}>
        <div className={styles.search_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>MTEC</h1>
          </div>
          <Contact_Search isSearch={true} handler={handleSearch} />
        </div>
        <div className={styles.contacts_list_container}>
          {[...Array(10)].map((_, index) => (
            <Contact_Card key={index} />
          ))}
        </div>
      </div>
      <div className={styles.messages_container}>
        <Top_Bar />
        {messages.map((msg, index) => (
          <Message_Cloud key={index} msg={msg.text} isLeft={!(msg.userId === userId)} />
        ))}
        <Contact_Search isSearch={false} handler={sendMessage} />
      </div>
    </div>
  )
}

export default MainHome;