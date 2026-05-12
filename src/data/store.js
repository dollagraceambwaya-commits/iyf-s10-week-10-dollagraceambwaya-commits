// src/data/store.js

// In-memory posts data
let posts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    content: "Node.js is a JavaScript runtime...",
    author: "Dolla Grace",
    createdAt: "2026-01-15T10:00:00Z",
    likes: 10,
  },
  {
    id: 2,
    title: "Express.js Fundamentals",
    content: "Express is a web framework...",
    author: "Dolla Grace",
    createdAt: "2026-01-16T14:30:00Z",
    likes: 15,
  },
];

// Counter for new IDs
let nextId = 3;

// Export so controllers can use it
module.exports = { posts, nextId };
