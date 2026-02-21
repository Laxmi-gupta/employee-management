# IDMS - SDE Internship Assessment  
## Employee Management System

---

## Project Overview

This project is a full-stack Employee Management System built as part of the IDMS SDE Internship Assessment.

The application allows users to:

- Create employees with image upload
- View employee records in a structured table
- Search employees dynamically
- Preview employee images
- Handle empty state UI
- Perform backend validations with proper schema enforcement

The project follows clean architecture principles with separate frontend and backend layers.

---

## Tech Stack

### Frontend
- React (Vite)
- CSS
- Axios
- React Hook Form

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Cloudinary

---

## Project Structure

```
project-root/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
└── README.md
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

#  Backend Setup

Navigate to backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run backend server:

```bash
npm run dev
```

Server will start on:
```
http://localhost:5000
```

---

#  Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
npm install
npm run dev
```

Application will run on:
```
http://localhost:5173
```

---

## Features Implemented

### Employee Creation
- Form validation using React Hook Form
- Backend validation using Mongoose
- Unique email enforcement
- Enum validation for department & designation

### Image Upload
- Image uploaded to Cloudinary
- Stored as URL in MongoDB
- Preview available in dashboard

### Search Functionality
- Backend search using regex
- Case-insensitive filtering

### Clean Architecture
- Separated controllers, routes, models
- Reusable API service in frontend
- Environment-based configuration

---

## Validation Rules

- Email must be valid format
- Phone must be exactly 10 digits
- Department and designation are restricted using enum values
- Photo is required
- Duplicate email entries are prevented

