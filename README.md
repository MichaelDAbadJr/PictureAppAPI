# PicturePlaceApp - Backend

## Overview

This the backend API to a fullstack Picture Place application. Built using Node.js and Express, providing RESTful APIs for user authentication and place management. It integrates with MongoDB for data storage and utilizes Google Cloud Storage for image uploads. The application employs JWT (JSON Web Tokens) for secure authentication and Bcrypt for password hashing, ensuring that user credentials are managed safely. This API is deployed on the Google App Engine for seemless integration with Google Cloud Services.

<a href="https://junmike-picture-place.netlify.app/" target="_blank">View Live Website</a>
<img src="https://raw.githubusercontent.com/MichaelDAbadJr/assets/refs/heads/main/PicturePlace-Cover.jpg" width="500">

link to the frontend repository -->
<a href="https://github.com/MichaelDAbadJr/PicturePlaceApp-Frontend/" target="_blank">PicturePlaceApp-Frontend Repository</a>

## Technologies Used

- **Node.js & Express:** JS runtime and Web framework for building RESTful APIs.
- **MongoDB & Mongoose:** NoSQL database for data storage and ODM for MongoDB, used for data modeling..
- **Multer:** Middleware for handling file uploads.
- **Google Cloud Storage:** For storing uploaded images.
- **JWT (JSON Web Tokens):** For secure user authentication.
- **Bcrypt:** For password hashing and secure password management.

## Features

- **User Authentication & Security:** Secure registration and login processes utilizing JWT (JSON Web Tokens) to ensure only authorized users can access protected resources. Robust password management through Bcrypt, providing secure hashing to protect user credentials against unauthorized access.
- **Image Uploading:** Seamless image uploads to Google Cloud Storage, allowing users to easily manage their images with automatic URL generation for easy access.
- **CRUD Operations for Users & Places::** Full functionality to Create, Read, Update, and Delete user and place entries, enabling users to manage their favorite locations effortlessly.
- **Data Validation:** Comprehensive input validation using Express-validator, ensuring data integrity and user input safety across all API requests.
- **User-Specific Data:** Each user can create and manage their own places, promoting personalized experiences within the application.
- **Scalable Features:** Built on Node.js and Express, providing a scalable foundation to accommodate future growth and additional features.
- **Middleware Protection:** Implemented middleware for authentication checks and file handling, enhancing the security and reliability of API interactions.

## Getting Started

### Prerequisites

- Familiarity with Node.js, Express, MongoDB, Google Cloud Storage, Multer, and the MVC model for building RESTful APIs
- Familiarity with .env files for using securing secret api data and secret keys.
- Must have your own keys/API keys for MongoDB, Google Maps, Google Cloud and JWT Tokens

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MichaelDAbadJr/PicturePlaceApp-Backend
   ```

2. **Navigate to the project directory:**

   ```sh
   cd PicturePlaceApp-Backend
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

   or

   ```
   yarn install
   ```

4. **To start the development server, use:**

   ```sh
   npm start
   ```

   or

   ```
   yarn start
   ```

5. **Usage:**
   Once the development server is running, open your browser and navigate to http://localhost:5173 or the appropriate localhost on your machine to demo the app.

6. **License:**
   This project is licensed under the MIT License. See the LICENSE file for details.
