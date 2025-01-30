# Task Management API

This is a RESTful API built using **Express.js** and **MongoDB**. It enables users to register, login, and perform CRUD operations on tasks. The API requires user authentication for managing tasks.

## Table of Contents
1. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Steps to Install](#steps-to-install)
2. [Environment Setup](#environment-setup)
   - [.env Configuration](#env-configuration)
3. [Folder Structure](#folder-structure)
4. [API Endpoints](#api-endpoints)
   - [User Authentication](#user-authentication)
   - [Task Operations (Requires Authentication)](#task-operations-requires-authentication)
5. [Authentication](#authentication)
6. [Contributing](#contributing)

---

## Installation

### Prerequisites

Before setting up the project, ensure that you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (either a local MongoDB instance or a cloud MongoDB cluster like MongoDB Atlas)

### Steps to Install

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory with the following environment variables:

    ```bash
    PORT=5000
    MONGO_URI=mongodb+srv://<your-mongodb-url>
    JWT_SECRET=mysecretkey
    ```

4. **Start the server**:

    ```bash
    npm start
    ```

---

## Environment Setup

### .env Configuration

The `.env` file contains important environment variables that you must configure for the application to run properly:

- **PORT**: The port where the server will run (default is `5000`).
- **MONGO_URI**: The MongoDB connection string (for a cloud or local MongoDB instance).
- **JWT_SECRET**: The secret key used for signing JWT tokens for authentication.

---

## Folder Structure

```plaintext
├── config
│   └── db.js            # MongoDB connection logic
├── controllers
│   ├── taskController.js # Task CRUD operations
│   └── userController.js # User registration and login logic
├── models
│   ├── Task.js          # Task model definition
│   └── User.js          # User model definition
├── routes
│   ├── taskRoutes.js    # Task API routes
│   └── userRoutes.js    # User API routes
├── middleware
│   └── authMiddleware.js # Middleware for authentication
├── server.js            # Express server setup
└── .env                 # Environment variables
