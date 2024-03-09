import React from 'react';
import Menu from '@/components/Menu/Menu';
import styles from './singlepage.module.css';
import Image from 'next/image';
import Comments from '@/components/Comments/Comments';

const getData = async ({ slug }) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    throw new Error('Error fetching posts', error);
  }
};
const SinglePage = async ({ params }) => {
  const { slug } = params;
  const response = await getData({ slug: slug });
  const data = await response.result;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title ? data.title : '---'}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={`${data.user.image}`}
                alt=""
                fill
                className={styles.iamge}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>
                {data.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
