# Samprita Patra - Portfolio Website

A fully functional, production-ready personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- **Responsive Design**: Fully responsive on Mobile, Tablet, and Desktop.
- **Modern Animations**: Powered by Framer Motion for smooth section reveals and interactions.
- **Theme Support**: Dark and Light mode toggle.
- **Backend API**: Node.js/Express server handling contact form submissions.
- **Email Notifications**: Nodemailer integration to send emails upon form submission.
- **Database**: MongoDB storage for all contact messages.
- **Dynamic Content**: Skills, Projects, and Experience sections built with data-driven components.

## Tech Stack
- **Frontend**: React (Vite), Framer Motion, Axios, Lucide React, CSS Variables.
- **Backend**: Node.js, Express.js, Mongoose, Nodemailer, Joi.
- **Database**: MongoDB.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or Atlas URI)

## Installation

1. **Clone the repository** (if applicable) or navigate to the project root.

2. **Install Dependencies** (Root, Server, and Client):
   ```bash
   npm run install-all
   ```
   Or manually:
   ```bash
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

## Configuration

1. **Backend Environment Variables**:
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio_db
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-app-password
   ```

## Running the Application

You can run both client and server concurrently from the root directory:

```bash
npm run server
# In a separate terminal
npm run client
```

Or run them individually:

**Backend:**
```bash
cd server
npm start
```

**Frontend:**
```bash
cd client
npm run dev
```

## Folder Structure
- `client/`: React Frontend
- `server/`: Node.js Backend
- `server/models/`: Database Models
- `server/routes/`: API Routes

## Contact
- Name: Samprita Patra
- Email: sampritapatra123@gmail.com
