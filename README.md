# Recipe Sharing Community

The **Recipe Sharing Community** is a full-stack web application designed to connect cooking enthusiasts, providing a platform where users can share, discover, and organize recipes. This app supports recipe submission, social interactions, and premium content access through a subscription-based model.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [API Documentation](#api-documentation)
8. [Future Enhancements](#future-enhancements)
9. [Contributing](#contributing)
10. [License](#license)

---

## 1. Project Overview

The Recipe Sharing Community app is a platform for users to upload and share their favorite recipes, connect with other food lovers, and discover new culinary ideas. Core features include user registration, recipe submission with ingredient lists and timers, and social functions such as commenting, rating, following, and upvoting/downvoting recipes. Premium content access is available via subscription.

## 2. Features

### Core Features

- **User Authentication & Authorization**:
  - Secure user registration, login, and JWT-based authentication.
  - Password recovery and secure password change options.

- **User Profile Management**:
  - Update profile information, follow/unfollow users.
  - Premium membership unlocks exclusive recipes and an ad-free experience.

- **Recipe Management**:
  - Submit, update, and delete recipes with rich text formatting and image attachments.
  - Interactive ingredient checklist and timer for tracking cooking times.
  - Admin capabilities for managing content.

- **Recipe Feed**:
  - Advanced search filters by keywords, ingredients, cooking time, tags (e.g., vegetarian).
  - Infinite scroll for continuous browsing.

- **Social Interactions**:
  - Rate recipes, comment, and upvote/downvote recipes.
  - Sort content by popularity based on upvotes.

### Additional Features

- **Subscription System**: Aamarpay or Stripe integration for premium memberships.
- **UI/UX Enhancements**: Smooth page transitions, hover effects, and loading animations.
- **Responsive Design**: Mobile-friendly interface with easy navigation.

## 3. Technologies Used

- **Frontend**: React, CSS/SCSS for styling, Responsive Design
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Aamarpay/Stripe
- **Version Control**: Git

## 4. Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local instance or MongoDB Atlas)
- **Stripe** or **Aamarpay** account for payment integration
- **Git** for version control

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/recipe-sharing-community.git
    cd recipe-sharing-community
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    # Backend dependencies
    cd backend
    npm install

    # Frontend dependencies
    cd ../frontend
    npm install
    ```

3. Set up environment variables for backend (`backend/.env`):

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key  # or AAMARPAY credentials
    ```

4. Run the application:

    ```bash
    # Start backend server
    cd backend
    npm start

    # Start frontend server
    cd ../frontend
    npm start
    ```

5. Access the app at `http://localhost:3000`.

## 5. Usage

### User Features

- **Register/Login**: Create an account to access recipe features.
- **Recipe Submission**: Share recipes with ingredients, cooking time, and rich text formatting.
- **Social Interactions**: Follow users, comment on, rate, and upvote/downvote recipes.
- **Subscription**: Access premium recipes through paid membership.

### Admin Features

- **User Management**: Block/unblock users, manage content.
- **Recipe Management**: Publish/unpublish recipes, delete content as needed.

## 6. Folder Structure

```plaintext
recipe-sharing-community/
├── backend/            # Backend code (Node.js, Express, MongoDB)
│   ├── controllers/    # Request handlers for API routes
│   ├── models/         # Mongoose models for MongoDB
│   ├── routes/         # API routes
│   ├── middlewares/    # Authentication and authorization middlewares
│   └── utils/          # Utility functions (e.g., JWT generation)
│
├── frontend/           # Frontend code (React)
│   ├── components/     # Reusable components (e.g., Navbar, RecipeCard)
│   ├── pages/          # Pages (e.g., Home, Profile, RecipeDetails)
│   ├── services/       # API service functions
│   └── styles/         # CSS and SCSS files
│
├── README.md           # Project documentation
└── package.json        # Project metadata and dependencies
