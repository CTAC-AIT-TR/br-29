import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-3xl font-bold text-white">
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <div className="hover:text-primary">
      <Link href="/games">Games List</Link>
      </div>
      </div>
    </>
  );
}
