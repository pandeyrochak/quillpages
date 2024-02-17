import React from 'react';
import Menu from '@/components/Menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/Comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={'/p1.jpeg'} alt="" fill className={styles.iamge} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Lorem</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt
          consectetur quibusdam minus. Distinctio sequi dolores autem, dolorum
          voluptatibus nesciunt quas facere a consequuntur, sed deleniti? Eaque
          consequuntur cum perspiciatis?
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
