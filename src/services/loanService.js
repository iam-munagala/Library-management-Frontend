const API_URL = 'http://localhost:8080/api/loans';

export async function getLoans(memberId) {
  const response = await fetch(`${API_URL}?memberId=${memberId}`);
  if (!response.ok) throw new Error('Failed to fetch loans');
  return await response.json();
}

export async function manageLoan(loan) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loan),
  });
  if (!response.ok) throw new Error('Failed to manage loan');
  return await response.json();
}
