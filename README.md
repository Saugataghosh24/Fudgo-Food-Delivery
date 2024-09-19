# Fudgo - Food Delivery Website

**Fudgo** is a full-stack food delivery website developed using the MERN stack, offering an intuitive user experience for customers and a robust admin panel for managing food items and orders. The website allows users to browse food menus, place orders, track deliveries, and manage their cart. Admins can add new food items, view a list of existing items, and manage orders.
 
   ![logo](https://github.com/user-attachments/assets/05725ca2-6d81-4ee0-9487-cbbbe5698ce2)
   
---

## Index

1. [Hosted Links](#hosted-links)
2. [Features](#features)
   - [User Panel](#user-panel)
   - [Admin Panel](#admin-panel)
3. [Technologies Used](#technologies-used)
4. [Screenshots](#screenshots)
   - [User Panel](#user-panel-screenshots)
   - [Admin Panel](#admin-panel-screenshots)
5. [Installation and Setup](#installation-and-setup)
   - [Prerequisites](#prerequisites)
   - [Getting Started](#getting-started)
6. [API Endpoints](#api-endpoints)
   - [User Authentication](#user-authentication)
   - [Cart Management](#cart-management)
   - [Order Management](#order-management)
   - [Food Management (Admin)](#food-management-admin)
7. [Deployment](#deployment)

---

## Hosted Links

- **User Panel**: [User Panel Live](https://fudgo.onrender.com)
- **Admin Panel**: [Admin Panel Live](https://fudgo-admin.onrender.com)  
  
  **Note:** The backend server may take some time to start due to cold starts on Render.

---

## Features

### User Panel
- **Home Page**: Browse through the menu and featured food items.
- **Navbar**: Navigate easily between sections.
- **Menu Section**: View all available food items in the selected menu.
- **Food Items Section**: Browse through a variety of food offerings.
- **Signin Popup**: Seamless user authentication for login and signup.
- **Cart Page**: View items added to the cart.
- **Place Order Page**: Complete the checkout process.
- **My Orders Page**: Track past orders and current delivery status.

### Admin Panel
- **Add Food Page**: Add new food items to the database.
- **Food List Page**: View and remove existing food items.
- **Orders Page**: View and manage orders from customers.

---

## Technologies Used

- **Frontend**: Vite, React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Password Encryption**: Bcryptjs
- **HTTP Client**: Axios
- **Deployment**: Render (Frontend & Backend)

---

## Screenshots

### User Panel Screenshots

1. **Home Page**  
   ![Home](https://github.com/user-attachments/assets/6c6d9044-4b52-4629-8603-8f7a14de38f9)

2. **Menu Section**  
   ![Menu](https://github.com/user-attachments/assets/fa3348bf-ac6d-47ca-a18e-93aac7df911e)

3. **Footer Section**  
   ![Footer](https://github.com/user-attachments/assets/69b04325-4b80-416a-b8e9-90760641f0e2)

4. **Signin Popup**  
   ![Sign-in-popup](https://github.com/user-attachments/assets/701f068a-c8b4-44a6-b841-b4f6c2fabba5)
   
5. **Cart Page**  
   ![Cart](https://github.com/user-attachments/assets/4f606bd7-e6fa-4043-843a-9c472c025396)

6. **Place Order Page**  
   ![Place-order](https://github.com/user-attachments/assets/64f90156-a80b-4ad2-a26e-63f24cc8ab9d)
   
7. **My Orders Page**  
   ![My-orders](https://github.com/user-attachments/assets/624acd2a-4827-4203-acd2-fd13ca7cca5b)

### Admin Panel Screenshots

1. **Add Food Page**  
   ![Admin-add-items](https://github.com/user-attachments/assets/ef6a2775-ee5c-4b52-9473-598f83752f24)
   
2. **Food List Page**  
  ![Admin-items-list](https://github.com/user-attachments/assets/f7516bd7-9230-42d4-8a5b-08e4e04a4f46)

3. **Orders Page**  
   ![Admin-orders](https://github.com/user-attachments/assets/ee980b9d-b8e5-44d9-a568-077a7a15f8d6)

---

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: You should have MongoDB installed and running or use a cloud MongoDB service like MongoDB Atlas.

### Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/fudgo-food-delivery.git
   cd fudgo-food-delivery
   ```

2. **Install Dependencies for Backend**
   Navigate to the backend directory and install the required packages.
   ```bash
   cd backend
   npm install
   ```

3. **Install Dependencies for Frontend (Vite + React)**
   Go to the frontend directory and install the packages.
   ```bash
   cd frontend
   npm install
   ```

4. **Install Dependencies for Admin (Vite + React)**
   Go to the admin directory and install the packages.
   ```bash
   cd admin
   npm install
   ```

5. **Environment Variables**
   Create a `.env` file in the backend directory and add the following:
   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   PORT=4000
   ```

6. **Run the Backend**
   Start the backend server:
   ```bash
   npm run server
   ```

7. **Run the Frontend (Vite)**
   In another terminal, start the frontend:
   ```bash
   npm run dev
   ```

8. **Run the Admin (Vite)**
   In another terminal, start the admin:
   ```bash
   npm run dev
   ```

9. **Access the Application**
   - User Panel: Open [http://localhost:5173](http://localhost:5173)
   - Admin Panel: Open [http://localhost:5174](http://localhost:5174)

---

## API Endpoints

### User Authentication

- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Log in an existing user.

### Cart Management

- **POST /api/cart/add**: Add food-items in cart.
- **POST /api/cart/remove**: Remove food-items from cart.
- **POST /api/cart/get**: Get Cart Items.

### Order Management

- **POST /api/order/place**: Place a new order.
- **POST /api/order/userorders**: Get orders for the logged-in user.
- **POST /api/order/list**: Listing orders for admin panel.
- **GET /api/order/status**: Updating order status.

### Food Management (Admin)

- **POST /api/food/add**: Add a new food item.
- **GET /api/food/list**: Get the list of all food items.
- **POST /api/food/remove**: Remove a food item.

---

## Deployment

The Fudgo Food Delivery project has been deployed using **Render** for both frontend and backend services.

### Frontend Deployment on Render

1. Connect the frontend GitHub repository to Render.
2. Select **Vite** as the build tool.
3. Add the necessary environment variables.
4. Deploy the frontend service.

### Backend Deployment on Render

1. Connect the backend GitHub repository to Render.
2. Make sure to set up the environment variables such as `MONGO_URI` and `JWT_SECRET` on Render.
3. Deploy the backend service.

