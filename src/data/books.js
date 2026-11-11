import atomicHabitsPic from "../assets/images/books/atomicHabits-pic.jpg";
import silentPatientPic from "../assets/images/books/silentPatient-pic.jpg";
import theHobbitPic from "../assets/images/books/theHobbit-pic.jpg";
import itEndsWithUsPic from "../assets/images/books/itEndsWithus-pic.jpg";
import richDadPoorDadPic from "../assets/images/books/richDadPoorDad-pic.jpg";
import theAlchemistPic from "../assets/images/books/theAlchemist-pic.jpg";
import harryPic from "../assets/images/books/harryPoter-pic.jpg";
import moneyPic from "../assets/images/books/money-pic.jpg";
import pic1984 from "../assets/images/books/1984-pic.jpg";
import mattLibraryPic from "../assets/images/books/mattLibrary-pic.jpg";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results.",
    price: 18.99,
    category: "Self-Help",
    image: atomicHabitsPic,
  },
  {
    id: 2,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description:
      "A psychological thriller about a woman who stops speaking after being accused of murdering her husband.",
    price: 16.5,
    category: "Romance & Thriller",
    image: silentPatientPic,
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "Follow Bilbo Baggins on an unexpected adventure through magical lands filled with dragons, dwarves, and danger.",
    price: 14.99,
    category: "Fantasy",
    image: theHobbitPic,
  },
  {
    id: 4,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    description:
      "A moving story about love, difficult choices, and finding the courage to break painful patterns.",
    price: 17.25,
    category: "Romance & Thriller",
    image: itEndsWithUsPic,
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description:
      "A personal finance book exploring different attitudes toward money, investing, and financial independence.",
    price: 15.99,
    category: "Self-Help",
    image: richDadPoorDadPic,
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A young shepherd travels across the desert in search of treasure and discovers the importance of following his dreams.",
    price: 13.99,
    category: "Fiction",
    image: theAlchemistPic,
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description:
      "A young boy discovers he is a wizard and begins an extraordinary journey at Hogwarts School of Witchcraft and Wizardry.",
    price: 19.99,
    category: "Fantasy",
    image: harryPic,
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "An exploration of how emotions, behavior, and personal experiences shape the way people think about money.",
    price: 16.99,
    category: "Self-Help",
    image: moneyPic,
  },
  {
    id: 9,
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel about a society controlled by surveillance, propaganda, and an oppressive political system.",
    price: 12.99,
    category: "Fiction",
    image: pic1984,
  },
  {
    id: 10,
    title: "The Midnight Library",
    author: "Matt Haig",
    description:
      "Between life and death, a woman discovers a mysterious library containing different versions of the life she could have lived.",
    price: 17.99,
    category: "Fiction",
    image: mattLibraryPic,
  },
];

export default books;
