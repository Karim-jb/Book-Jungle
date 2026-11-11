import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import facebookIcon from "../assets/logos/facebook.png";
import twitter from "../assets/logos/twitter.png";
import instagram from "../assets/logos/instagram.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <h2 className={styles.brandName}>Book Jungle</h2>
            <p className={styles.brandText}>
              Your next favorite book is waiting.
            </p>
          </div>
          
           <div className={styles.listContainer}> 
            <ul className={styles.list}>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/books" className={styles.link}>Books</Link></li>
              <li><Link to="/services" className={styles.link}>Services</Link></li>
              <li><Link to="/about" className={styles.link}>About</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact</Link></li>
            </ul></div>
         
          <div className={styles.socialColumn}>
            <h3 className={styles.columnTitle}>Follow Us</h3>
            <div className={styles.social}>
              <a href="https://www.facebook.com/" className={styles.socialLink} aria-label="Instagram">
                <img src={facebookIcon} alt="" className={styles.socialIcon} />
              </a>
              <a href="https://www.twitter.com/" className={styles.socialLink} aria-label="Twitter">
                <img src={twitter} alt="" className={styles.socialIcon} />
              </a>
              <a href="https://www.instagram.com/" className={styles.socialLink} aria-label="Instagram">
                <img src={instagram} alt="" className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Book Jungle. All rights reserved.</p>
          <p className={styles.uni}>Lebanese International University</p>
        </div>

      </div>
    </footer>
  );
}