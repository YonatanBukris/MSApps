# MSApps Home Assignment - Fullstack Project

## Project Description

This is a fullstack application developed for the MSApps home assignment.  
It includes:

- A **React (TypeScript)** frontend, created with **Vite**.
- A **Node.js backend** using **Express**.
- Integration with the **Pixabay API** to fetch and display images dynamically.

## Features

1. **Image Grid:**
   - Displays images in a 3x3 grid layout.
   - Includes pagination and category selection.
   - Provides a clean, responsive design with hover effects.
2. **Modals:**
   - Image details modal: Shows metadata like views, downloads, and collections.
   - Category selection modal: Allows users to select a category dynamically.
3. **Redux State Management:**
   - Manages app state for categories, pagination, and selected images.
4. **Backend API:**
   - Fetches images from the Pixabay API.
   - Supports pagination and sorting (e.g., by ID or date).

---

## Project Structure

### Backend (`ms-app-back`)

- A Node.js backend that handles:
  - Communication with the Pixabay API.
  - Data sorting and pagination logic.

### Frontend (`ms-app-front`)

- A React-based UI that:
  - Displays images in a visually appealing way.
  - Integrates with the backend via Axios for API calls.

---

### How to Run the Project

## backend:

- Navigate to the backend directory
- cd ms-app-back
- npm install
- npm start
  The server will run on http://localhost:5000 by default

## frontend:

- Navigate to the frontend directory
- cd ms-app-front
- npm install
- npm run dev
  The app will run on http://localhost:5173 by default
