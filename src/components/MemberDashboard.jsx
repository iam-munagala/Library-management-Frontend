import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemberDashboard() {
  const [member, setMember] = useState({ name: '', email: '' });
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch member data
    axios.get('/api/member')
      .then(response => {
        setMember(response.data);
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });

    // Fetch current loans
    axios.get('/api/loans')
      .then(response => {
        // Ensure the response data is an array before setting the state
        if (Array.isArray(response.data)) {
          setLoans(response.data);
        } else {
          console.error('Expected an array for loans, but got:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching loans data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Member Dashboard</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Profile</h2>
          <div className="mt-4">
            <p><strong>Name:</strong> {member.name}</p>
            <p><strong>Email:</strong> {member.email}</p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Current Loans</h2>
          <ul className="mt-4 list-disc pl-5">
            {loans.map((loan, index) => (
              <li key={index}>{loan}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MemberDashboard;
