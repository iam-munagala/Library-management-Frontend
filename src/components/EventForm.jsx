import React, { useState } from 'react';
import { addEvent } from '../services/eventService';

function EventForm() {
  const [event, setEvent] = useState({ title: '', date: '', description: '' });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event).then(() => alert('Event added successfully!')).catch(error => console.error('Error adding event:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Add Event</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input type="text" id="title" name="title" value={event.title} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium">Date</label>
          <input type="date" id="date" name="date" value={event.date} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea id="description" name="description" value={event.description} onChange={handleChange} className="border rounded-lg p-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
