import { useState } from 'react';
import './AddBookModal.css';
import { addBook } from '../services/bookService';


export default function AddBookModal({onClose, onBookAdded}) {

    const [form, setForm] = useState({
        title : "",
        author: "",
        status: "TO_READ",
        rating: 0,
        coverColor: "#b37f62ff",
        startDate: new Date().toISOString().split('T')[0], 
        finishDate: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({    ...prevForm, [name]: value })) };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addBook(form);
        onBookAdded();
        onClose();
    };    

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
          <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="TO_READ">To Read</option>
            <option value="READING">Reading</option>
            <option value="FINISHED">Finished</option>
            <option value="DROPPED">Dropped</option>
          </select>
          <input name="rating" type="number" min="0" max="5" value={form.rating} onChange={handleChange} />
          <div className="modal-buttons">
            <button type="submit">Add Book</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}


