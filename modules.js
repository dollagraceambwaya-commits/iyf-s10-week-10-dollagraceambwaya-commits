// Import built-in modules
const fs = require("fs");
const path = require("path");

// Read file (synchronous)
const content = fs.readFileSync("hello.js", "utf-8");
console.log("Sync read:\n", content);

// Read file (asynchronous - preferred)
fs.readFile("hello.js", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Async read:\n", data);
});

// Write file
fs.writeFileSync("output.txt", "Hello, World!");
console.log("File written: output.txt");

// Path utilities
console.log("Joined path:", path.join(__dirname, "files", "data.json"));
console.log("File extension:", path.extname("photo.jpg"));
