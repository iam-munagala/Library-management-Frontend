const API_URL = 'http://localhost:8080/api/events';

export async function getEvents() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch events');
  return await response.json();
}

export async function addEvent(event) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  if (!response.ok) throw new Error('Failed to add event');
  return await response.json();
}
