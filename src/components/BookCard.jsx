import styles from '../styles/bookCard.module.css';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
     <Link to={`/books/${book.id}`} className={styles.linkWrapper}> <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={book.image} alt={book.title} className={styles.image} />
        <span className={styles.category}>{book.category}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.price}>${book.price}</p>
      </div>
    </article></Link>
   
  );
}