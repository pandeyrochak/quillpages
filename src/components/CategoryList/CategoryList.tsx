import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};
const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {data.map((item, index) => (
          <Link
            key={index}
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
          >
            {item.img && (
              <Image
                src={`${item.img}`}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
