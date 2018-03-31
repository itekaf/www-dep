export const loadJSON = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.error("Error: " + err.message())
    })
};