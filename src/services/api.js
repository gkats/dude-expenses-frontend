const API_URL = 'http://www.dude-expenses.dev/api';

const defaultOptions = Object.freeze({
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
});

const urlFor = (endpoint) => `${API_URL}/${endpoint}`;

export const apiFetch = (endpoint, options = {}) => {
  return fetch(
    urlFor(endpoint),
    Object.assign({}, defaultOptions, options)
  );
};

export const post = (endpoint, options = {}) => {
  return apiFetch(
    endpoint,
    Object.assign({}, options, { method: 'POST' })
  )
};
