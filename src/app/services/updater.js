let counter = 0;

/**
 * Makes an AJAX call
 * @param {string} url
 * @param {string} method
 * @returns {Request}
 */
const requestMoreData = (url, method) => {
  // Create a config object
  const config = {
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  };

  // Create the Http Request
  const request = new Request(url, config);

  // Fetch data
  return fetch(request)
    .then(res => res.json())
    // This emulates fetching different files
    .then(res => {
      counter += 1;
      return res.files[counter - 1];
    });
};

export default requestMoreData;