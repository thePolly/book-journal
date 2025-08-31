import { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';
import BookCard from './BookCard';

export default function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
    getBooks().then(res => setBooks(res.data));
    }, []);

    if (books.length === 0) {
    return <p>No books</p>;
    }

    return (
    <div>
        {books.map(book => (
        <BookCard key={book.id} book={book} />
        ))}
    </div>
);
}