const API_URL = 'http://localhost:8080/api/books';

export async function getBooks() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch books');
  return await response.json();
}

export async function addBook(book) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error('Failed to add book');
  return await response.json();
}
