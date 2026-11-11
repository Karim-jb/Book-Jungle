import SearchBar from "../components/SearchBar";
import styles from "../styles/books.module.css";
import Category from "../components/Category";
import { useState } from "react";
import data from "../data/books.js";
import BookCard from "../components/BookCard.jsx";
import books from "../data/books.js";

function Books() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [value, setValue] = useState("");
  const AllBooks = data;

  function handleSubmit(e) {
    e.preventDefault();
    setActiveCategory("All");
  }

  let filteredBooks = books.filter(
    (e) => e.category === activeCategory || activeCategory === "All",
  );

  if (value !== "") {
    filteredBooks = books.filter((e) =>
      e.title.toLowerCase().includes(value.toLowerCase()),
    );
  }

  return (
    <>
      <div className={styles.filterContainer}>
        <form onSubmit={handleSubmit}>
          {" "}
          <SearchBar
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </form>

        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className={styles.booksGrid}>
        {filteredBooks.map((e) => {
          return (
            <div className={styles.cardWrapper}>
              <BookCard book={e}></BookCard>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Books;
