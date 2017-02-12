export const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  if (token && (token === 'undefined' || token === 'null')) {
    return null;
  }
  return token;
};

export const setAuthToken = (authToken) => (
  localStorage.setItem('authToken', authToken)
);