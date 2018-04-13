export function loadJson(url) {
  return fetch(url, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]));
}