import { useState } from 'react';
import styles from '../styles/category.module.css';

export default function CategoryFilter({setActiveCategory,activeCategory}) {

  const categories = ['All', 'Fiction', 'Self-Help', 'Fantasy', 'Romance & Thriller'];

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={activeCategory === category ? styles.activePill : styles.pill}
        >
          {category}
        </button>
      ))}
    </div>
  );
}