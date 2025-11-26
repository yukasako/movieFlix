import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const activeClass = ({ isActive }: NavbarProps) =>
  isActive ? styles.active : '';

const Navbar = () => {
  return (
    <>
      <header className={styles.navbarHeader}>
        <nav className={styles.navbar}>
          <ul>
            <li className={styles.logo}>MovieFlix</li>
            <li className={styles.toggle}>
              <input type='checkbox' className={styles.menuBtn} id='menuBtn' />
              <label htmlFor='menuBtn' className={styles.menuIcon}>
                <span className={styles.navIcon}></span>
              </label>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={activeClass} to='/'>
                Home
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={activeClass} to='/movies'>
                Films
              </NavLink>
            </li>
            <li id='orders' className={styles.menuItem}>
              <NavLink className={activeClass} to='/shows'>
                Series
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;

type NavbarProps = {
  isActive: boolean;
};
