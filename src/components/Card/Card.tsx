import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span>11.02.2023</span>
          <span className={styles.category}>Culture</span>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adiposincing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga
          assumenda tenetur accusantium porro adipisci et debitis sed voluptate,
          perspiciatis vel mollitia labore voluptatibus? Iusto accusamus optio
          impedit ratione commodi.
        </p>
        <Link href={'/'} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
