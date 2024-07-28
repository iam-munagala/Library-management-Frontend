const API_URL = 'http://localhost:8080/api/members';

export async function getMemberProfile(memberId) {
  const response = await fetch(`${API_URL}/${memberId}`);
  if (!response.ok) throw new Error('Failed to fetch member profile');
  return await response.json();
}

export async function addMember(member) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  });
  if (!response.ok) throw new Error('Failed to add member');
  return await response.json();
}
