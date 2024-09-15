# GDSC SNIoE Dev Team Recruitments

This project is a submission and display system for the GDSC Dev Team recruitment task. It allows users to submit tasks, stores the submissions in MongoDB, and displays them on a user-friendly page. The project uses Node.js for the backend, MongoDB for the database, and Vercel for deployment.

## Features

- **Submission Form:** Users can submit their text entries through a form.
- **Display Submissions:** All submitted entries are displayed in a list format.
- **Delete Submissions:** Each submission can be removed using a delete button.
- **Responsive Design:** The application is styled using TailwindCSS to ensure responsiveness and a polished look.
- **Backend Integration:** The backend is built using Node.js and Express, and submissions are stored in a MongoDB database.

## Technology Stack

- **Frontend:** HTML, CSS (TailwindCSS), JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB (using Mongoose)
- **Deployment:** Heroku

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB instance (either local or cloud-based, e.g., MongoDB Atlas)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/BAT4K/gdsc.git
   cd gdsc/submission-system

2. **Install Dependencies**
- Navigate to the *server* directory and install backend dependencies:

   ```bash
   cd server
   npm install
 
- Navigate to the *client* directory and install frontend dependencies (if applicable):

  ```bash
  cd ../client

3. **Configure Environment Variables**
- Create a *.env* file in the *server* directory and add your MongoDB URI:

  ```bash
  MONGO_URI=mongodb://localhost:27017/submissionSystem
  PORT=5000
  
4. **Start the Server**
- Navigate back to the *server* directory and start the server:

  ```bash
  cd server
  node server.js

5. **Open the Application**
- Visit *http://localhost:5000* in your browser to see the application in action.

## Deployment

-To deploy your application to Heroku:

1. **Install Heroku CLI**
   
   ```bash
   npm install -g heroku-cli

2. **Login to Heroku**

   ```bash
   heroku login

3. **Create a Heroku App**

   ```bash
   heroku create

4. **Deploy Your Code**
- Commit changes to your Git.
- Push to Heroku

  ```bash
  git push heroku main

5. **Set Environment Variables**
- Configure your MongoDB URI on Heroku:

  ```bash
  heroku config:set MONGO_URI=mongodb://localhost:27017/submissionSystem

6. **Open Your App**

## Usage

- **Submit Entries:** Use the form on the homepage to submit your text entries.
- **View Submissions:** All entries are displayed in a list format.
- **Delete Entries:** Click the "x" button next to each entry to remove it.

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch ( **git checkout -b feature/your-feature** ).
3. Commit your changes ( **git commit -am 'Add new feature'** ).
4. Push to the branch ( **git push origin feature/your-feature** ).
5. Open a Pull Request.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- TailwindCSS for styling
- MongoDB and Mongoose for database management
- Node.js and Express for backend development
- Heroku for deployment

   




 
