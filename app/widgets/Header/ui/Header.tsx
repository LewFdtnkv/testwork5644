'use client';
import styles from './Header.module.scss';
import phoneIcon from '../../../assets/svg/phone.svg';
import emailIcon from '../../../assets/svg/email.svg';
import locationIcon from '../../../assets/svg/Location.svg';
import loginIcon from '../../../assets/svg/person.svg';
import useAuthStore from '../../../store/ui/store';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { username, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  const handleAuthClick = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <ul className={styles['header-contacts']}>
        <li className={styles['header-contacts__data']}>
          <img src={phoneIcon.src} alt="phone"></img> +021-95-51-84
        </li>
        <li className={styles['header-contacts__data']}>
          <img src={emailIcon.src} alt="email"></img>shop@abelohost.com
        </li>
        <li className={styles['header-contacts__data']}>
          <img src={locationIcon.src} alt="location"></img>1734 Stonecoal Road
        </li>
        <li
          className={styles['header-contacts__data']}
          onClick={handleAuthClick}
          style={{ cursor: 'pointer' }}
        >
          <img src={loginIcon.src} alt="login"></img>
          {isAuthenticated ? <>{username} Logout</> : 'Login'}
        </li>
      </ul>

      <div className={styles['header-logo']}>
        <strong className={styles['header-logo__title']}>
          Abelohost Shop<span style={{ color: 'red' }}>.</span>
        </strong>
        <div className={styles['header-logo__block']}>600x70</div>
      </div>
      <ul className={styles['header-navigation']}>
        <li className={styles['header-navigation__button']} onClick={()=>router.push('./')}>Home</li>
        <li className={styles['header-navigation__button']}>Hot Deals</li>
        <li className={styles['header-navigation__button']}>Categories</li>
        <li className={styles['header-navigation__button']}>Laptops</li>
        <li className={styles['header-navigation__button']}>Smartphones</li>
        <li className={styles['header-navigation__button']}>Cameras</li>
        <li className={styles['header-navigation__button']}>Accessories</li>
      </ul>
    </header>
  );
}
