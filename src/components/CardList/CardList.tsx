import React from 'react';
import Pagination from '@/components/Pagination/Pagination';
import Card from '@/components/Card/Card';
import styles from './cardList.module.css';

const getData = async ({ pageNo }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts?page=${pageNo}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    throw new Error('Error fetching posts', error);
  }
};

const CardList = async ({ pageNo }) => {
  console.log('page no:', pageNo);
  const response = await getData({ pageNo: pageNo });
  const data = await response.results;
  const count = await response.count;

  console.log('data', data);
  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (pageNo - 1) > 0;
  const hasNext = POST_PER_PAGE * (pageNo - 1) + POST_PER_PAGE < count;

  console.log(count, data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Articles</h1>
      <div className={styles.posts}>
        {Array.isArray(data) ? (
          data.map((item, index) => <Card key={item.id} item={item} />)
        ) : (
          <h4 style={{ color: 'red' }}>
            <i>⚠️ Unable to load posts</i>
          </h4>
        )}
      </div>
      <Pagination page={pageNo} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
