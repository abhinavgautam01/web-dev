function mirrorString(original) {
    // Reverse the original string
    const reversed = original.split('').reverse().join('');
    // Append the reversed string to the original
    return original + reversed;
}

// Example usage:
const input = "hello";
const mirrored = mirrorString(input);

console.log(mirrored); // Output: "helloolleh"
