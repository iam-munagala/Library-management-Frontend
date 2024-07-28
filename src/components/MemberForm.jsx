import React, { useState } from 'react';
import { addMember } from '../services/memberService';

function MemberForm() {
  const [member, setMember] = useState({ name: '', email: '', memberId: '' });

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(member).then(() => alert('Member added successfully!')).catch(error => console.error('Error adding member:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Add Member</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input type="text" id="name" name="name" value={member.name} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" value={member.email} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="memberId" className="block text-sm font-medium">Member ID</label>
          <input type="text" id="memberId" name="memberId" value={member.memberId} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">Add Member</button>
      </form>
    </div>
  );
}

export default MemberForm;
