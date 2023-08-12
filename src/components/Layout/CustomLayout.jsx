import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './CustomLayout.module.css';

const CustomLayout = () => {
  return (
    <div className={styles.customLayout}>
      <header className={styles.customHeader}>
        <nav className={styles.customNavigation}>
          <ul className={styles.customNavigationList}>
            <li>
              <NavLink to="/" className={styles.customNavigationLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={styles.customNavigationLink}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.customMain}>
        <Outlet />
      </section>
    </div>
  );
};

export default CustomLayout;
