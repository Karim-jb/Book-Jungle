import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/logos/shopping-cart.png";
import styles from "../styles/nav.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          Book Jungle
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={open ? styles.line1Open : styles.line1}></span>
          <span className={open ? styles.line2Open : styles.line2}></span>
          <span className={open ? styles.line3Open : styles.line3}></span>
        </button>

        <nav className={open ? styles.navOpen : styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link to="/" className={styles.link} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className={styles.link} onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li>
              <Link to="/services" className={styles.link} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <Link to="/books"  onClick={closeMenu}>
            {" "}
            <img src={Icon} alt="Bag" className={styles.icon} />
          </Link>
        </div>
      </div>
    </header>
  );
}
