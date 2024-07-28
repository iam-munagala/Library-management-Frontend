import React, { useState } from 'react';
import { manageLoan } from '../services/loanService';

function LoanForm() {
  const [loan, setLoan] = useState({ memberId: '', bookId: '', dueDate: '' });

  const handleChange = (e) => {
    setLoan({ ...loan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    manageLoan(loan).then(() => alert('Loan managed successfully!')).catch(error => console.error('Error managing loan:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Manage Loan</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="memberId" className="block text-sm font-medium">Member ID</label>
          <input type="text" id="memberId" name="memberId" value={loan.memberId} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="bookId" className="block text-sm font-medium">Book ID</label>
          <input type="text" id="bookId" name="bookId" value={loan.bookId} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-sm font-medium">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value={loan.dueDate} onChange={handleChange} className="border rounded-lg p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">Manage Loan</button>
      </form>
    </div>
  );
}

export default LoanForm;
