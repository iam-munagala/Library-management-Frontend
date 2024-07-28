import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import MemberDashboard from './components/MemberDashboard';
import EventCalendar from './components/EventCalendar';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import MemberForm from './components/MemberForm';
import EventForm from './components/EventForm';
import LoanForm from './components/LoanForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/books/add" element={<BookForm />} />
          <Route path="/members/add" element={<MemberForm />} />
          <Route path="/events/add" element={<EventForm />} />
          <Route path="/loans/manage" element={<LoanForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
