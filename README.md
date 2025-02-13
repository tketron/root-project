# root-project

Tyler Ketron

Submission for 'Suggestion Box' full stack application for Root.

## Setup & Running Locally

The app is a monorepo with separate backend and frontend.

Node.js is required to install dependencies. I developed using Node v20.

To setup, install, and run locally:

1. Clone this repository to a local folder

2. Setup and start the server

   Navigate inside the backend folder:

   `cd server`

   Install dependencies:

   `npm install`

   Start the server:

   `npm run dev`

3. In a separate terminal window or tab, serve the frontend

   Navigate to the frontend folder:

   `cd client`

   Install dependencies:

   `npm install`

   Start the frontend server:

   `npm run dev`

A backend server should now be running on port 3000 and a frontend server on port 5173. In a browser, navigate to http://localhost:5173 to view the application.

## Overview

Basic functionality includes:

- Logging in and out as different users. However no user data is persisted, so this functions mostly as a way to assign an author to comments and suggestions. If not logged in, adding new comments and suggestions is disabled.

- Adding a new suggestion, either by inputting the exact text in a dialog or by randomly generating a string.

- Adding a comment to a suggestion thread.

- Navigating between suggestions and viewing their comment threads.

![UI View when user is not logged in](<Screenshot 2025-02-12 at 4.57.15 PM.png>)
UI when a user is not logged in

![UI view when a user is logged in](<Screenshot 2025-02-12 at 4.57.46 PM.png>)
UI when a user is logged in
