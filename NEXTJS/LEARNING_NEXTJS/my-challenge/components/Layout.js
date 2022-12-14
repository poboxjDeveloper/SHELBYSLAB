import styles from '../styles/Home.module.css';
import Navigation from './Navigation';

/* Menu Component here */

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navigation />

      {children}
    </div>
  );
}
