import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
<>
<div className={styles.main}>
<h1 className={styles.new_main}>Home</h1>
<h1>Home</h1>
<h1>Home</h1>
<h1>Home</h1>
<h1>Home</h1>
<h1>Home</h1>
<h1>Home</h1>
<h1>Home</h1>
<Link href="/games">Games List</Link>
</div>
</>

  ); 
}