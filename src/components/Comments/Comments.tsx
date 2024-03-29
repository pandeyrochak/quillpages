'use client';
import React, { FormEvent } from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = async (url) => {
  console.log('🚀 ~ fetcher ~ url:', url);
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data.result;
};

const Comments = ({ postSlug }) => {
  console.log('🚀 ~ Comments ~ postSlug:', postSlug);

  const { status } = useSession();
  const apiurl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments?postSlug=${postSlug}`;

  console.log('🚀 ~ Comments ~ apiurl:', process.env.NEXT_PUBLIC_BASE_URL);
  const { data, mutate, isLoading } = useSWR(apiurl, fetcher);
  const [description, setDescription] = React.useState('');

  const handleSubmit = async () => {
    setDescription('');
    const respon = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc: description, postSlug }),
    });
    mutate();
  };
  const handleCommentInput = (e: FormEvent<HTMLTextAreaElement>) => {
    // @ts-expect-error
    setDescription(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder="Share your thoughts "
            className={styles.input}
            onInput={(e) => handleCommentInput(e)}
            value={description}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Comment
          </button>
        </div>
      ) : (
        <Link href={'/login'}>Login to comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? 'Loading comments'
          : data &&
            data.map((item, index) => (
              <div className={styles.comment} key={index}>
                <div className={styles.user}>
                  <Image
                    alt=""
                    src={item.user.image}
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
