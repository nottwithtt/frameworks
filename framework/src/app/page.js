import Image from "next/image";
import styles from "./page.module.css";
import MainHome from "@/home/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainHome />
    </main>
  );
}
