export default function BookCard({ book }) {
    return (
    <div className="book-card">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Status: {book.status}</p>
        {book.rating && <p>Raiting: {book.rating}/5</p>}
    </div>
    );
}