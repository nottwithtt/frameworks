import Image from "next/image";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
// import MainHome from "@/app/home/page";
import Login from "./login/page";

export default function Home() {
  return (
    <div className={styles.main_container}>
      {/* <Login/> */}
      {redirect('login')}
    </div>
  );
}
