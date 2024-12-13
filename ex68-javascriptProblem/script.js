// Asynchronous function
async function asyncMapNumbers(arr) {
    return arr.map(num => 
        new Promise(resolve => 
            setTimeout(() => resolve(num * 2), 500)
        )
    );
}

// Example usage
async function mulbytwo() {
    const numbers = [1, 2, 3, 4, 7];
    const promises = await asyncMapNumbers(numbers);

    // Resolve all promises
    const results = await Promise.all(promises);
    console.log(results); // Output: [2, 4, 6, 8]
}

mulbytwo()