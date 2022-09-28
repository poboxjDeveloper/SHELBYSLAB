import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navigation from './Navigation';

/* Menu Component here */

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* insert Menu here */}
      <Navigation />

      {children}
    </div>
  );
}
