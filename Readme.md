# Secure REST API for User Authentication and Payments

This project implements a secure REST API for user authentication and payments using **NestJS** (preferred) or **Express.js**, **Passport.js**, **JWT**, and **Stripe** (or another payment gateway). The API includes endpoints for user registration, login, fetching user details, and simulating payments, with proper security measures such as password hashing, role-based authentication, and error handling.

## Features

- **User Authentication**:
  - **POST /auth/register**: Register a new user with a hashed password
  - **POST /auth/login**: Authenticate user and return a JWT token
  - **GET /auth/me**: Fetch logged-in user details (protected route)
- **Payments**:
  - **POST /payments/checkout**: Simulate a payment and store transaction details
- **Security**:
  - JWT token-based authentication
  - Role-based authentication (admin/user)
  - Password hashing with **bcrypt.js**
  - Secure transaction records storage
  - Error handling and validation for API requests
- **Bonus Features**:
  - Refresh token mechanism
  - Rate limiter to prevent brute-force attacks
  - Docker for database containerization
  - Unit tests for authentication functions

## Tech Stack

- **NestJS** (or **Express.js** if preferred)
- **Passport.js** for user authentication
- **JWT** for secure token-based authentication
- **MongoDB** (using **Mongoose**) or **PostgreSQL** (using **Prisma**) for database management
- **Bcrypt.js** for password hashing
- **Stripe** (or any other payment gateway) for payment processing
- **Docker** (for containerizing the database)

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version >= 14)
- **npm** (or **yarn**)
- **Docker** (optional, for running the database in a container)

### Steps to Set Up

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

    Or if you're using yarn:

    ```bash
    yarn install
    ```

4. Set up environment variables:

    Create a `.env` file in the root of your project with the following fields:

    ```
    JWT_SECRET=<your-jwt-secret>
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
    DATABASE_URL=<your-database-url>
    ```

    - Replace `<your-jwt-secret>` with a secret key for JWT token generation.
    - Replace `<your-stripe-secret-key>` with your Stripe secret key (if using Stripe).
    - Replace `<your-database-url>` with your database connection URL (MongoDB or PostgreSQL).

5. **Docker Setup (Optional)**:  
   If you're using Docker to run your database, you can start the container by running:

    ```bash
    docker-compose up
    ```

6. Start the server:

    ```bash
    npm run start
    ```

    Or if you're using yarn:

    ```bash
    yarn start
    ```

7. Open your browser and access the API at `http://localhost:3000`.

## API Endpoints

### **POST /auth/register**

Register a new user with a hashed password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
