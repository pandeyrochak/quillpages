import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Comments = () => {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder="Share your thoughts "
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Comment</button>
        </div>
      ) : (
        <Link href={'/login'}>Login to comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              alt=""
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi
            vel dolorum libero ab, eum in dolore omnis. Animi, quasi libero
            aliquid architecto recusandae totam sunt earum aut nesciunt illum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
