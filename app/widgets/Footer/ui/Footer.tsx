'use client';
import useAuthStore from '@/app/store/ui/store';
import styles from './Footer.module.scss';
export default function Footer() {
  const { username, isAuthenticated } = useAuthStore();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-year']}>
        <div>{currentYear}</div>
        <div> {isAuthenticated && `Logged as ${username}`}</div>
      </div>
    </footer>
  );
}
