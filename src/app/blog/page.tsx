import CardList from '@/components/CardList/CardList';
import styles from './blog.module.css';
import Menu from '@/components/Menu/Menu';

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList pageNo={1} cat={cat} />
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default BlogPage;
