import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import styles from "../styles/bookDetails.module.css";

export default function BookDetails() {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <div className={styles.notFound}>
        <h2>Book not found</h2>
        <Link to="/books" className={styles.backLink}>
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img src={book.image} alt={book.title} className={styles.image} />
        </div>
      </div>

      <div className={styles.infoSection}>
        <span className={styles.category}>{book.category}</span>

        <h1 className={styles.title}>{book.title}</h1>
        <p className={styles.author}>By {book.author}</p>

        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingText}>(4.8 / 5)</span>
        </div>

        <p className={styles.description}>{book.description}</p>

        <div className={styles.purchaseRow}>
          <span className={styles.price}>${book.price}</span>
          <span className={styles.stock}>
            In Stock ({book.stock || 5} available)
          </span>
        </div>

        <div className={styles.actions}>
          <button className={styles.addToCartBtn}>Add to Cart</button>
          <button className={styles.buyNowBtn}>Buy Now</button>
          <button className={styles.readNowBtn}>Read a Sample</button>
        </div>
      </div>
    </div>
  );
}
