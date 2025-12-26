Simple Express.js Backend (MVC Pattern)

This project is a beginner-friendly Express.js backend server built to practice routing, controllers, JSON handling, and a simple MVC (Model–View–Controller) structure.
The goal is to understand how backend servers work and how to separate logic properly.
What This Project Does
  The server provides:
    A home route with a welcome message
    An about route describing the project
    A contact route with contact info
    A dynamic route that returns the current time
    A POST route that accepts JSON data and returns it back
    A 404 handler for unknown routes

All responses are returned in JSON format.

Project Structure
backend-task/
│
├── controllers/
│   └── mainController.js   → Handles all response logic
│
├── routes/
│   └── mainRoutes.js       → Handles routing only
│
├── app.js                  → Server entry point
├── package.json
└── README.md

 MVC Explanation (Simple)
Routes: Decide which URL goes where
Controllers: Handle what response to send
app.js: Connects everything and starts the server
No response logic is written directly inside routes.

 API Endpoints

Base route:

/api

Method	Endpoint	Description
GET    	/api/	        Welcome message
GET    	/api/about	  About the project
GET    	/api/contact	Contact information
GET    	/api/time    	Returns current time
POST  	/api/echo	    Accepts and returns JSON
ANY	    Unknown route	404 JSON response

How to Run the Project
    Install dependencies:
    npm install
Start the server:
  node app.js
Server runs at:
  http://localhost:3000/api
Requirements Covered
    Express.js server
    MVC pattern followed
    GET and POST requests
    JSON request handling
    Controllers handle logic
    Clean and organized code
    Unknown route handling

Purpose
This project is created for learning backend fundamentals and understanding how Express.js applications are structured using MVC.
