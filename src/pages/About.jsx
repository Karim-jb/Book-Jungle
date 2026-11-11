import aboutHeroImage from "../assets/images/AboutUsHero.png";
import styles from "../styles/about.module.css";
import storyImage from "../assets/images/storyImage.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.textWrapper}>
          <span className={styles.eyebrow}>Est. 2026 </span>

          <div className={styles.titleContainer}>
            <h1 className={styles.titleLine1}>WE ARE</h1>
            <h1 className={styles.titleLine2}>BOOK JUNGLE</h1>
          </div>

          <p className={styles.introText}>
            We don't just sell books. We collect them, argue about them, and
            obsess over matching them with the right reader. Step into our wild,
            untamed world of stories.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageOffsetBox}></div>
          <img
            src={aboutHeroImage}
            alt="Our team"
            className={styles.heroImage}
          />
          <div className={styles.badge}>100% Independent</div>
        </div>
      </section>
      <section className={styles.storySection}>
        <div className={styles.storyImageCol}>
          <div className={styles.storyImageWrapper}>
            <img
              src={storyImage}
              alt="Our Story"
              className={styles.storyImage}
            />
          </div>
        </div>

        <div className={styles.storyTextCol}>
          <span className={styles.massiveNumber}>02</span>
          <h2 className={styles.storyTitle}>
            <span className={styles.storySubtitle}>Our Story</span>
            The idea behind <br /> Book-Jungle
          </h2>

          <div className={styles.storyContent}>
            <span className={styles.quoteMark}>“</span>
            <p>
              It started with a simple frustration: bookstores felt too quiet,
              and online shopping felt too cold. We wanted to build a place that
              felt like a chaotic, beautiful jungle of ideas.
            </p>
            <p>
              We spent months digging through publishers, arguing over covers,
              and reading late into the night. The result is a curated space
              where every shelf has a personality, and every book has a reason
              for being there.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.missionSection}>
        <div className={styles.missionHeader}>
          <span className={styles.eyebrow}>03</span>
          <h2 className={styles.missionTitle}>Mission & Vision</h2>
        </div>

        <div className={styles.missionGrid}>
          <div className={styles.missionBlock}>
            <h3 className={styles.blockTitle}>The Mission</h3>
            <p className={styles.blockText}>
              To disrupt the quiet, sterile world of online book shopping by
              building a digital space that feels as wild, unpredictable, and
              exciting as a physical bookstore. We curate aggressively to save
              you from choice paralysis.
            </p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.missionBlock}>
            <h3 className={styles.blockTitle}>The Vision</h3>
            <p className={styles.blockText}>
              We aren't trying to be the biggest bookstore on the internet. We
              want to be the most trusted. A place where finding a book feels
              like a discovery, not a transaction. A jungle where every reader
              finds their exact species of story.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <Link to="/books" className={styles.megaButton}>
          <span className={styles.megaButtonText}>Enter the Jungle</span>
          <span className={styles.megaButtonIcon}>→</span>
        </Link>
      </section>
    </div>
  );
}
