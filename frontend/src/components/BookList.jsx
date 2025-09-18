import BookCard from './BookCard';
import  './BookList.css'

export default function BookList({books}) {

    return (
    <div className="book-list">
        {books.map(book => (
        <BookCard key={book.id} book={book} />
        ))}
    </div>
);
}