import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import AddBookModal from '../components/AddBookModal';
import { getBooks } from '../services/bookService';
import BookFilter from '../components/BookFilter';


export default function Home() {
const [books, setBooks] = useState([]);
const [showModal, setShowModal] = useState(false);
const [filters, setFilters] = useState({title: '', author: '', status: ''});


  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      (filters.status === '' || book.status === filters.status)
    );
  });


return (

    <div>
      <button onClick={() => setShowModal(true)}>➕</button>
      <BookFilter filters = {filters} setFilters={setFilters} />
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