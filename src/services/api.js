// API_HOST is set through webpack config
const API_URL = `${API_HOST}/api`;

const defaultOptions = Object.freeze({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const urlFor = (endpoint) => (
  `${API_URL}/${endpoint}`
);

export const apiFetch = (endpoint, options = {}) => {
  if (options.authToken) {
    options.headers = Object.assign({}, defaultOptions.headers, {
      'Authorization': `Bearer ${options.authToken}`
    });
  }

  return fetch(
    urlFor(endpoint),
    Object.assign({}, defaultOptions, options)
  );
};

export const get = (endpoint, options = {}) => (
  apiFetch(
    endpoint,
    Object.assign({}, options, { method: 'GET' })
  )
);

export const post = (endpoint, options = {}) => (
  apiFetch(
    endpoint,
    Object.assign({}, options, { method: 'POST' })
  )
);

export const patch = (endpoint, options = {}) => (
  apiFetch(
    endpoint,
    Object.assign({}, options, { method: 'PATCH' })
  )
);

export const doDelete = (endpoint, options = {}) => (
  apiFetch(
    endpoint,
    Object.assign({}, options, { method: 'DELETE' })
  )
);

export const queryString = (params = {}) => (
  Object.keys(params).map(k => (
    `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
  )).join('&')
);