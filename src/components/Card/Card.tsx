import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item }) => {
  return (
    <div className={styles.container} >
      <div className={styles.imageContainer}>
        <Image src={`/${item.img}`} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span>March 3rd, 2024</span>
          <span className={styles.category}>{item.catSlug.toUpperCase()}</span>
        </div>
        <h1>{item.title}</h1>
        <p>{item.desc && item.desc.substring(0, 60)}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
