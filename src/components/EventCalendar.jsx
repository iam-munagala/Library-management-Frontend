import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/eventService';

function EventCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(data => setEvents(data)).catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Event Calendar</h1>
      <div className="mt-4">
        <ul>
          {events.map(event => (
            <li key={event.id} className="mb-2">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventCalendar;
