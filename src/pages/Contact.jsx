import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Let's Talk Books</h1>
        <p className={styles.subtitle}>
          Have a question, need a recommendation, or just want to say hello?
          We'd love to hear from you.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Get in Touch</h2>
          <p className={styles.infoText}>
            Our team is available Monday through Friday, 9am to 5pm. We usually
            respond within 24 hours.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📍</span>
              <span>Beirut, Lebanon</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📞</span>
              <span>+961 12345677</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>✉️</span>
              <span>hello@bookjungle.com</span>
            </div>
          </div>
        </div>

        <form className={styles.formSection}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder=""
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="+961"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              placeholder="name@example.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
