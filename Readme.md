# Secure REST API for User Authentication and Payments

This project implements a secure REST API for user authentication and payments using **NestJS** (preferred) or **Express.js**, **Passport.js**, **JWT**, and **Stripe** (or another payment gateway). The API includes endpoints for user registration, login, fetching user details, and simulating payments, with proper security measures such as password hashing, role-based authentication, and error handling.

## Features

- **User Authentication**:
  - **POST /api/auth/register**: Register a new user with a hashed password
  - **POST /api//auth/login**: Authenticate user and return a JWT token
  - **GET /api/auth/me**: Fetch logged-in user details (protected route)
- **Payments**:
  - **POST /api/payments/checkout**: Simulate a payment and store transaction details
- **Security**:
  - JWT token-based authentication
  - Role-based authentication (admin/user)
  - Password hashing with **bcrypt.js**
  - Secure transaction records storage
  - Error handling and validation for API requests
  - Refresh token mechanism
  - Docker for database containerization
  - Unit tests for authentication functions

## Tech Stack

- **NestJS** (or **Express.js** if preferred)
- **Passport.js** for user authentication
- **JWT** for secure token-based authentication
- **MongoDB** (using **Mongoose**) or **PostgreSQL** (using **Prisma**) for database management
- **Bcrypt.js** for password hashing
- **Stripe** (or any other payment gateway) for payment processing

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version >= 14)
- **npm** (or **yarn**)

### Steps to Set Up

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Anikroy7/user_authentication_server
    ```

2. Navigate to the project directory:

    ```bash
    cd user_authentication_server
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```


4. Set up environment variables:

    Create a `.env` file in the root of your project with the following fields:

    ```
    DATABASE_URL=
    PORT= 5000
    BCRYPT_SALT_ROUND = 2
    NODE_ENV= development
    JWT_ACCESS_SECRET= 
    JWT_ACCESS_EXPIRES_IN= 

    JWT_REFRESH_SECRET= 
    JWT_REFRESH_EXPIRES_IN=

    AAMARPAY_BASE_URL=https://sandbox.aamarpay.com
    AAMARPAY_STORE_ID=
    AAMARPAY_SIGNATURE_KEY=


    SERVER_BASE_URL= http://localhost:5000
    ```



5. Start the server:

    ```bash
    npm run start
    ```


6. Open your browser and access the API at `http://localhost:5000`.

## API Endpoints

### **POST /auth/register**

Register a new user with a hashed password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
