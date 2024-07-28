import React from 'react';

function BookCard({ book }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-md">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h2 className="text-gray-900 font-bold text-xl mb-2">{book.title}</h2>
          <p className="text-gray-700 text-base">by {book.author}</p>
          <p className="text-gray-600">ISBN: {book.isbn}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
