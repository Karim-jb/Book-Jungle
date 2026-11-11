import { Link } from "react-router-dom";
import heroImage from "../assets/images/Hero Home img.png";
import styles from "../styles/home.module.css";
import books  from "../data/books";
import amazonLogo from "../assets/images/amazon.png";
import bookshopLogo from "../assets/images/bookshop.png";
import penguinLogo from "../assets/images/penguinBooks.png";
import goodreadsLogo from "../assets/images/goodReads.jfif";
import BookCard from "../components/BookCard";
import promoImage from '../assets/images/promo.png'; 

export default function Home() {
  const featuredBooks = books.slice(0, 4);
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img src={heroImage} alt="" className={styles.heroImage} />

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Every Story Starts With a Book</h1>
          <p className={styles.heroText}>
            Dive into a jungle of stories, ideas, and adventures. Find the one
            that speaks to you.
          </p>
          <Link to="/books" className={styles.heroButton}>
            Explore Books
          </Link>
        </div>
      </section>

      <section className={styles.partners}>
        <p className={styles.partnersLabel}>Trusted by readers and partners</p>

        <div className={styles.partnersList}>
          <div className={styles.partnerItem}>
            <img src={amazonLogo} alt="Amazon" className={styles.partnerLogo} />
          </div>
          <div className={styles.partnerItem}>
            <img
              src={penguinLogo}
              alt="Penguin Books"
              className={styles.partnerLogo}
            />
          </div>
          <div className={styles.partnerItem}>
            <img
              src={bookshopLogo}
              alt="Bookshop.org"
              className={styles.partnerLogo}
            />
          </div>
          <div className={styles.partnerItem}>
            <img
              src={goodreadsLogo}
              alt="Goodreads"
              className={styles.partnerLogo}
            />
          </div>
        </div>
      </section>
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Books</h2>
        <div className={styles.featuredList}>
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
      <section className={styles.promo}>
  <img src={promoImage} alt="Special Offer" className={styles.promoImage} />
  
  <div className={styles.promoOverlay}></div>

  <div className={styles.promoContent}>
    <span className={styles.promoLabel}>Limited Time Offer</span>
    <h2 className={styles.promoTitle}>Discover Your Next Great Read</h2>
    <p className={styles.promoText}>
      Get 20% off your first order when you join the Book Jungle community today.
    </p>
    <Link to="/books" className={styles.promoButton}>
      Shop the Sale
    </Link>
  </div>
</section>
<div className={styles.newsletter}>
  <div className={styles.newsletterContent}>
    <h3 className={styles.newsletterTitle}>Join the Jungle</h3>
    <p className={styles.newsletterText}>Subscribe for new arrivals, reviews, and exclusive offers.</p>
  </div>
  <form className={styles.newsletterForm}>
    <input type="email" placeholder="Your email address" className={styles.newsletterInput} />
    <button type="button" className={styles.newsletterBtn}>Subscribe</button>
  </form>
</div>
    </main>
  );
}
