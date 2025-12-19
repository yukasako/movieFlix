import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './navbar.module.css';

type NavbarProps = {
  isActive: boolean;
};

const activeClass = ({ isActive }: NavbarProps) =>
  isActive ? styles.active : '';

const Navbar = () => {
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <header className={styles.navbarHeader}>
        <nav className={styles.navbar}>
          <ul>
            <li className={styles.logo}>MovieFlix</li>
            <li
              className={styles.languageToggle}
              aria-label={t('nav.language')}
            >
              {supportedLanguages.map((option) => (
                <button
                  key={option.code}
                  type='button'
                  onClick={() => setLanguage(option.code)}
                  className={`${styles.languageButton} ${
                    language === option.code ? styles.languageButtonActive : ''
                  }`}
                  aria-pressed={language === option.code}
                >
                  {option.label}
                </button>
              ))}
            </li>
            <li className={styles.toggle}>
              <input type='checkbox' className={styles.menuBtn} id='menuBtn' />
              <label htmlFor='menuBtn' className={styles.menuIcon}>
                <span className={styles.navIcon}></span>
              </label>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={activeClass} to='/movies'>
                {t('nav.movies')}
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={activeClass} to='/shows'>
                {t('nav.shows')}
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={activeClass} to='/search'>
                {t('nav.search')}
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={activeClass} to='/favorite'>
                {t('nav.favorites')}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
