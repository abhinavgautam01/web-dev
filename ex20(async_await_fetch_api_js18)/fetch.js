// async function getData1() {
//   const url = "https://google.com/";
//   try {
//       const response = await fetch(url);
//       if (!response.ok) {
//           throw new Error(`Response status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log(json);
//   } catch (error) {
//       console.error(error.message);
//   }
// }

// Call the function
// getData1();

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json; // Return the data for further use
  } catch (error) {
    console.error(error.message);
    return null; // Return null in case of an error
  }
}

// Use a public API that supports CORS
const url = "https://jsonplaceholder.typicode.com/todos/1"; // Example public API
getData(url).then(data => {
  if (data) {
    console.log(data);
  } else {
    console.log("Failed to retrieve data.");
  }
});
