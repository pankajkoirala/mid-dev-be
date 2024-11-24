# Node.js and Express Application with TypeScript

## Overview

This project is a Node.js application built with Express and TypeScript. It uses several packages to manage functionality, including handling HTTP requests, managing file uploads, and ensuring smooth application configuration. The application runs on a local server with the port defined in the `.env` file.

## Features

- Built with TypeScript for type safety and maintainability.
- Handles file uploads using `multer`.
- Supports CORS for cross-origin resource sharing.
- Uses `dotenv` for environment variable management.
- Includes `axios` for HTTP requests.

---

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- [npm](https://www.npmjs.com/)

### Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   ```

   Replace `3000` with the desired port number if needed.

3. Start the server:

   ```bash
   npm start
   ```

4. Access the application in your browser or via API testing tools like Postman at:

   ```
   http://localhost:<PORT>
   ```

   Replace `<PORT>` with the value specified in your `.env` file.

---

## Endpoint

The following enpoint are present

- `/api/product` # GET request for all products
- `/api/product/:id` # GET request for spectific product

---

## Project Structure

```
├── src
│   ├── config         # All application config and constants
│   ├── middleware     # Custom middleware, e.g., for file uploads
│   ├── Exception      # Error handler
│   ├── middleware     # Custom middleware, e.g., for file uploads
│   ├── model          # All models and interface
│   ├── routes         # Application routes
│   ├── service        # All external api calls here
│   └── app.ts         # Entry point of the application
├── public
│   └── uploads        # Directory for uploaded files
├── .env               # Environment variables
├── .gitignore         # Files and directories to ignore in Git
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

---

## Scripts

The following npm scripts are available:

- `npm run build`: Compiles TypeScript files into JavaScript.
- `npm start`: Starts the application.
- `npm run start:dev`: Runs the application in development mode using tools like `nodemon`.

---

## Key Packages

Here are the main packages used in this project:

### Dependencies

- **express**: Web framework for building server-side applications.
- **axios**: HTTP client for making API requests.
- **cors**: Enables cross-origin resource sharing.
- **dotenv**: Loads environment variables from a `.env` file.
- **multer**: Middleware for handling file uploads.
- **path**: Provides utilities for working with file and directory paths.

### Dev Dependencies

- **typescript**: Enables development using TypeScript.
- **ts-node**: Executes TypeScript directly without pre-compilation.
- **@types/node**: Type definitions for Node.js.
- **@types/express**: Type definitions for Express.
- **@types/multer**: Type definitions for Multer.

---

## Environment Variables

The application uses a `.env` file to manage configuration. Currently, it supports the following variable:

```
    PORT=5000   # Example 5000 is used as port
```

---