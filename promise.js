// Create a function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      const error = null; // Simulating no error

      if (error) {
        reject(error); // Reject the promise with an error if needed
      } else {
        resolve(data); // Resolve the promise with the fetched data
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Using the promise
fetchData()
  .then((data) => {
    console.log(data.message); // Data fetched successfully
  })
  .catch((error) => {
    console.error(error); // Handle errors here
  });

console.log("Fetching data..."); // This will be printed first, as the promise is asynchronous
