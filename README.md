# Week 10: Backend Basics - Node.js & Express

## Author
- **Name:** Dolla Grace Ambwaya
- **GitHub:** [@dollagraceambwaya](https://github.com/dollagraceambwaya-commits)
- **Date:** May 12, 2026

## Project Description
This project implements a modular Node.js + Express backend for the IYF Weekend Academy Season 10 tasks.  
It covers CRUD APIs for posts and users, middleware (logger, error handler, validation), environment variables, and query filtering.  
The goal was to learn backend fundamentals and build a structured API server with professional practices.

## Technologies Used
- Node.js
- Express.js
- dotenv
- Postman (for testing)
- ESLint + Prettier (code style)

## Features
- Hello Server routes (`/`, `/about`, `/api/time`)
- Users API: list, single user, create with validation
- Posts API: CRUD, query filtering, pagination, sorting
- Comments API: add, list, delete comments on posts
- Middleware: logger, error handler, validation
- Environment Variables: `.env` and `.env.example` for secrets/config

## How to Run
1. Clone this repository:
   git clone https://github.com/dollagraceambwaya/iyf-s10-week-10-dollagraceambwaya-commits.git
   cd iyf-s10-week-10-dollagraceambwaya-commits
   
3. Install dependencies:
npm install

3. Create .env file:
PORT=3000
NODE_ENV=development
API_KEY=your-secret-key

4. Start the server:
node server.js

5. Test endpoints in browser or Postman:

- http://localhost:3000/api/health

- http://localhost:3000/api/users

- http://localhost:3000/api/posts

## Lessons Learned
- How to structure a Node.js project with routes, controllers, middleware, and data.

- Using environment variables securely with dotenv.

- Implementing validation and error handling in Express.

- Testing APIs with Postman and handling different request methods.

- Importance of clean repo organization and professional README documentation.

## Challenges Faced
- Debugging app.use() errors when middleware was not exported correctly.

- Fixing empty store.js and validate.js files to prevent crashes.

- Handling ESLint warnings for unused next in error handlers.

- Ensuring .env secrets were excluded from GitHub with .gitignore.
