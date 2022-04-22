import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
