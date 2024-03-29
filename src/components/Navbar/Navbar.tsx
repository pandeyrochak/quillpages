import React, { useContext } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';
import { ThemeContext } from 'src/Context/ThemeContext';
import quillpagesLogo from 'public/quillpages-logo.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <Image
            src={quillpagesLogo}
            width={64}
            height={64}
            alt="logo"
            className="logo-image"
          />
        </Link>
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
