import React, { useState } from 'react';
import { addBook } from '../services/bookService';

function BookForm() {
  const [book, setBook] = useState({ title: '', author: '', isbn: '', genre: '' });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book).then(() => alert('Book added successfully!')).catch(error => console.error('Error adding book:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Add Book</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input type="text" id="title" name="title" value={book.title} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium">Author</label>
          <input type="text" id="author" name="author" value={book.author} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="isbn" className="block text-sm font-medium">ISBN</label>
          <input type="text" id="isbn" name="isbn" value={book.isbn} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium">Genre</label>
          <input type="text" id="genre" name="genre" value={book.genre} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
