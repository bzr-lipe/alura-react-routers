import styles from './HomePage.module.css';
import posts from 'json/posts.json';
import PostCard from 'components/PostCard';

export default function HomePage() {
  return (
    <ul className={ styles.posts }>
      {posts.map((post) => (
        <li key={ post.id }>
          <PostCard post={ post }/>
        </li>
      ))}
    </ul>
  )
}
