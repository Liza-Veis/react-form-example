import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/header';
import styles from './styles.module.scss';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
