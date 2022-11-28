import styles from './styles/Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} />
        </header>
    )
}