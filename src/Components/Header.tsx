import styles from './header.module.css';

function Header({ title }: { title: string }) {
  return <h1 className={styles.title}>{title}</h1>;
}

export default Header;
