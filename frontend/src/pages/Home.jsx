import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import AddBookModal from '../components/AddBookModal';
import { getBooks } from '../services/bookService';


export default function Home() {
const [books, setBooks] = useState([]);
const [showModal, setShowModal] = useState(false);


  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);


return (

    <div>
       <button onClick={() => setShowModal(true)}>➕</button>
       <BookList books={books} />
      {showModal && (
        <AddBookModal
          onClose={() => setShowModal(false)}
          onBookAdded={fetchBooks}
        />
      )}
    </div>
  );
}