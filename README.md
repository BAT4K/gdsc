# GDSC SNIoE Dev Team Recruitments

## Overview

This project is a submission and display system for the GDSC Dev Team recruitment task. It allows users to submit tasks, stores the submissions in MongoDB, and displays them on a user-friendly page. The project uses Node.js for the backend, MongoDB for the database, and Vercel for deployment.

## Deployed Link

You can view the project live here: https://gdsc-alpha.vercel.app/

## Tools Used

- **Node.js**: For the backend server.
- **Express.js**: Web framework for Node.js.
- **MongoDB Atlas**: For storing submissions.
- **Vercel**: Deployment platform for hosting the application.
- **TailwindCSS**: Utility-first CSS framework for styling the frontend.

## Features

- Submission form for users to add their tasks.
- Submissions are displayed in a user-friendly format with delete functionality.
- Responsive design for mobile and desktop views.
- Live data fetching from MongoDB Atlas.

## How to Run Locally

### Prerequisites
- Node.js installed on your machine.
- MongoDB Atlas account or a local MongoDB instance.

### Steps

1. **Clone the repository:**

      ```bash
   git clone https://github.com/BAT4K/gdsc.git

2. **Navigate to the project directory:**

   ```bash
   cd submission-system

3. **Install dependencies:**

   ```bash
   npm install
   
4. **Set up environment variables:**
   
- Create a `.env` file in the root of the project.
- Add your MongoDB URI (from MongoDB Atlas) to the `.env` file:
   
     ```perl
     MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster.mongodb.net/myDatabase

5. **Start the server:**

    ```bash
   npm start

6. **Open your browser and go to `http://localhost:5000` to view the application.**

## Problems Faced

- **Heroku**: Initially tried deploying the project on Heroku, but found out that it required a paid subscription. Switched to Vercel as an alternative.
- **MongoDB Atlas**: The initial setup used a local MongoDB URI, but to work with Vercel, I had to migrate the database to MongoDB Atlas. This took a considerable amount of time to set up and configure properly.
- **Frontend Responsiveness**: Editing the frontend to be responsive on smaller devices proved to be challenging.
- **File Structure**: Setting up the file structure correctly so that all files could be linked to each other caused several issues, which required adjustments in both the frontend and backend.
   

  
