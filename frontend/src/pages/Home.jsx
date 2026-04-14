import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import AddBookModal from '../components/AddBookModal';
import { getBooks } from '../services/bookService';
import BookFilter from '../components/BookFilter';
import styles from './Home.module.css';

const LOCAL_STORAGE_KEY = 'bookJournalBooks';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ title: '', author: '', status: '' });

  const saveBooksToStorage = (bookList) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookList));
  };

  const loadBooksFromStorage = () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) return null;

    try {
      return JSON.parse(stored);
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return null;
    }
  };

  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    const savedBooks = loadBooksFromStorage();
    if (savedBooks && savedBooks.length > 0) {
      setBooks(savedBooks);
    } else {
      fetchBooks();
    }
  }, []);

  useEffect(() => {
    saveBooksToStorage(books);
  }, [books]);

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      (filters.status === '' || book.status === filters.status)
    );
  });


return (

    <div>
      <div className={styles.buttonAndFilters}>
        <button className={styles.addButton} onClick={() => setShowModal(true)}>+</button>
        <BookFilter filters = {filters} setFilters={setFilters} />
      </div>
    <hr className={styles.divider} />
      <BookList books={filteredBooks} />
 
      {showModal && (
        <AddBookModal
          onClose={() => setShowModal(false)}
          onBookAdded={fetchBooks}
        />
      )}
    </div>
  );
}