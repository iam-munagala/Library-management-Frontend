import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';
import BookCard from './BookCard';

function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data)).catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
