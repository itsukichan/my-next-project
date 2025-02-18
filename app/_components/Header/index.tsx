import Link from 'next/link';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className="text-3xl font-bold text-white">
        <Link href="/" className={styles.logoLink}>
          TechLog
        </Link>
      </h1>
      <Menu />
    </header>
  )
}
