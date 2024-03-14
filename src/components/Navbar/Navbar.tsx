import React, { useContext } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';
import { ThemeContext } from 'src/Context/ThemeContext';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={'/'}>phoenix</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        {/* <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link> */}
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
