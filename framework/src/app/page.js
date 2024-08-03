import Image from "next/image";
import styles from "./page.module.css";
import MainHome from "@/app/home/page";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <MainHome />
    </div>
  );
}
