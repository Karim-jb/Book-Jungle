import serviceHeroImage from "../assets/images/serviceHero.png"; // Update with your actual file name
import styles from "../styles/services.module.css";

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img
            src={serviceHeroImage}
            alt="Our Services"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.label}>What We Offer</span>
          <h1 className={styles.title}>More Than Just a Bookstore</h1>
          <p className={styles.text}>
            We believe that reading is an experience. From hand-picked
            recommendations to fast, reliable delivery, we provide everything
            you need to get lost in a good story. Discover why Book Jungle is
            different.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need for the perfect reading experience.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📚</div>
            <h3 className={styles.cardTitle}>Curated Selection</h3>
            <p className={styles.cardText}>
              Every book is hand-picked by our team. No filler, just stories we
              truly love and recommend.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🚚</div>
            <h3 className={styles.cardTitle}>Fast Delivery</h3>
            <p className={styles.cardText}>
              Get your next read quickly. Enjoy free shipping on all orders over
              $50, delivered right to your door.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>💬</div>
            <h3 className={styles.cardTitle}>Book Advice</h3>
            <p className={styles.cardText}>
              Not sure what to read next? Our team is here to give you
              personalized recommendations.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🤝</div>
            <h3 className={styles.cardTitle}>Book Club</h3>
            <p className={styles.cardText}>
              Join our community. Discuss monthly picks, share reviews, and
              connect with other readers.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.howItWorksSection}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Your next great read is just three simple steps away.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>Explore</h3>
            <p className={styles.stepText}>Browse our book collection.</p>
          </div>

          <div className={styles.stepLine}></div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>Choose</h3>
            <p className={styles.stepText}>Discover a book you love.</p>
          </div>

          <div className={styles.stepLine}></div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>Add to Cart</h3>
            <p className={styles.stepText}>Manage your selected books.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
