// A function that takes a callback as an argument
function fetchData(url, callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data); // Call the callback function with the fetched data
  }, 2000); // Simulate a 2-second delay
}

// Callback function to handle the fetched data
function processFetchedData(data) {
  console.log('Data received:', data);
}

// Call the fetchData function with a URL and a callback
fetchData('https://ash.com', processFetchedData);

console.log('Fetching data...'); // This message will be printed first
