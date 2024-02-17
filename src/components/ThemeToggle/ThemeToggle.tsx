'use client';
import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from 'src/Context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' ? styles.darkTheme : ''
      }`}
      onClick={() => toggleTheme()}
    >
      <Image src={'/moon.png'} alt="" width={14} height={14} />
      <div
        className={`${styles.ball} ${theme === 'dark' ? styles.darkTheme : ''}`}
      ></div>
      <Image src={'/sun.png'} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
